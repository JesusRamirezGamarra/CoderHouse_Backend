//----------* REQUIRE'S *----------//
import express from 'express';
import { Server } from 'socket.io';
import {__dirname,___dirname} from './utils.js';
import productsRouter from './routes/products.router.js';
import chatMessagesRouter from './routes/chatMessages.router.js';
import fs from 'fs';

import handlebars from 'express-handlebars';
//import url from 'node:url';//https://nodejs.org/api/url.html#url_new_url_input_base

//----------* EXPRESS() *----------//
const app = express();
// const httpServer = new HttpServer(app)
// const io = new IOServer(httpServer)

//////////////////////////////////////////////////////////////////////////////////
////         SERVER ON PORT
//////////////////////////////////////////////////////////////////////////////////
const PORT =   process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  productsRouter.createProductsTable();
  chatMessagesRouter.createMessagesTable()
  console.log(`Server running on: http://localhost:${server.address().port}/`)
})
server.on('error', (error) => console.log({'Server Error': error}))
//////////////////////////////////////////////////////////////////////////////////
const io = new Server(server);


//----------* MIDDLEWARES *----------//
app.set('views', 'src/views')
// app.use(express.static('public'))
app.use(express.static(___dirname+'/public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname+'/views');
app.set('view engine', 'handlebars');

const host =`http://localhost:${PORT}`;

//////////////////////////////////////////////////////////////////////////////////
////         ROUTES
//////////////////////////////////////////////////////////////////////////////////
app.use('*', (req, res) => {
    if( req.url.includes('/css/') || req.url.includes('/js/') && 
        req.url.includes('/img/') || req.url.includes('/ico/')){
        console.log({Description:'visits statics'}) ;
    }else{
      res.render('error404');
    }
})

app.use('/', (req, res) => {
  try { 
    res.sendFile(process.cwd() + '/public/index.html')
  } catch (error) {
    console.log({'Server Error': error})
  }
})

////////////////////////////////////////////////////////////////////////////////
//         SOCKET IO 
////////////////////////////////////////////////////////////////////////////////
io.on('connection', async (socket) => {
  socket.emit('socketConnected')
  const email = socket.handshake.query.email;
  socket.broadcast.emit('newConnection',{ email: email});

    socket.on('productListRequest', async () => {
      console.log('>>> productListRequest')
      const allProducts = await productsRouter.getAllProduct()
      console.log('allProducts.length :',allProducts.length )
      if(allProducts.length == 0)
        await productsRouter.createInitialProducts()
      
      socket.emit('updateProductList', allProducts)
    })

    socket.on('addNewProduct', async (newProduct) => {
      console.log('>>> addNewProduct')
      const FileName = `${Date.now()}-${newProduct.filename}`;
      const file = ___dirname + `/public/img/${FileName}`;

      
      if (newProduct.title.length > 25  ){
        socket.emit('error', {error : 'Title must be less than 25 characters' })
      }
      else if (newProduct.price < 0 || newProduct.price > 100000){
        socket.emit('error', {error : 'Price must be between 0 and 100000'})
      }else{

        let newProductWithOutImage = {
          title: newProduct.title, 
          price: newProduct.price, 
          thumbnail: `${host}/img/${FileName}`
        }
        

        fs.writeFileSync(file, new Buffer(newProduct.data.split(';base64,')[1], 'base64'))  
        await productsRouter.addNewProduct(newProductWithOutImage)
        const allProducts = await productsRouter.getAllProduct()
        io.sockets.emit('updateProductList', allProducts)
      }
    })

    socket.on('chatMessagesRequest', async () => {
      console.log('>>> chatMessagesRequest')

      const allMessages = await chatMessagesRouter.getAllMessages()
      socket.emit('updateChatRoom', allMessages)
    })

    socket.on('addNewMessage', async (newMessage) => {
      console.log('>>> addNewMessage')
      await chatMessagesRouter.addNewMessage(newMessage)
      const allMessages = await chatMessagesRouter.getAllMessages()
      io.sockets.emit('updateChatRoom', allMessages)
    })

    socket.on('disconnection', async(data) => {
      console.log('>>> disconnection')
      socket.broadcast.emit('disconnection', { email: data.email});
    })

})

