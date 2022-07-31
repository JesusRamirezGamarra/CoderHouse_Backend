//----------* REQUIRE'S *----------//
// const express = require('express')
// const { Server: HttpServer } = require('http')
// const { Server: IOServer } = require('socket.io')
// const productsController = require('./controller/products')
// const messagesController = require('./controller/chatMessages')
import express from 'express';
// import { Server: HttpServer } from 'http';
// import { Server: IOServer} from 'socket.io';
import { Server } from 'socket.io';
import {__dirname,___dirname} from './utils.js';
import productsRouter from './routes/products.router.js';
import chatMessagesRouter from './routes/chatMessages.router.js';


//----------* EXPRESS() *----------//
const app = express();
// const httpServer = new HttpServer(app)
// const io = new IOServer(httpServer)

//////////////////////////////////////////////////////////////////////////////////
////         SERVER ON PORT
//////////////////////////////////////////////////////////////////////////////////
const PORT =   process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${server.address().port}/`)
})
server.on('error', (error) => console.log(`Server error: ${error}`))
//////////////////////////////////////////////////////////////////////////////////
const io = new Server(server);





//----------* MIDDLEWARES *----------//
app.set('views', 'src/views')
// app.use(express.static('public'))
app.use(express.static(___dirname+'/public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())








//////////////////////////////////////////////////////////////////////////////////
////         ROUTES
//////////////////////////////////////////////////////////////////////////////////
app.use('/', (req, res) => {
  try {
    res.sendFile(process.cwd() + '/public/index.html')
  } catch (error) {
    console.log(`ERROR: ${error}`)
  }
})

////////////////////////////////////////////////////////////////////////////////
//         SOCKET IO 
////////////////////////////////////////////////////////////////////////////////
io.on('connection', (socket) => {
  socket.emit('socketConnected')

    socket.on('productListRequest', async () => {
      console.log('>>> productListRequest')
      const allProducts = await productsRouter.getAllProduct()
      socket.emit('updateProductList', allProducts)
    })

    socket.on('addNewProduct', async (newProduct) => {
      console.log('>>> addNewProduct')
      await productsRouter.addNewProduct(newProduct)
      const allProducts = await productsRouter.getAllProduct()
      io.sockets.emit('updateProductList', allProducts)
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
})

