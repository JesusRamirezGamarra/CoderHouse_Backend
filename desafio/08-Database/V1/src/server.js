//----------* REQUIRE'S *----------//
const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const productsController = require('./controller/products')
const messagesController = require('./controller/chatMessages')

//----------* EXPRESS() *----------//
const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

//----------* MIDDLEWARES *----------//
app.set('views', 'src/views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//////////////////////////////////////////////////////////////////////////////////
////         ROUTES
//////////////////////////////////////////////////////////////////////////////////
app.use('/', (req, res) => {
  try {
    res.sendFile(process.cwd() + '/public/index.html')
  } catch (error) {
    console.error(`ERROR: ${error}`)
  }
})

//////////////////////////////////////////////////////////////////////////////////
////         SOCKET IO 
//////////////////////////////////////////////////////////////////////////////////
io.on('connection', (socket) => {
  socket.emit('socketConnected')

  socket.on('productListRequest', async () => {
    console.log('>>> productListRequest')
    await productsController.createProductsTable()
    const allProducts = await productsController.getAllProduct()
    socket.emit('updateProductList', allProducts)
  })

  socket.on('addNewProduct', async (newProduct) => {
    console.log('>>> addNewProduct')
    await productsController.addNewProduct(newProduct)
    const allProducts = await productsController.getAllProduct()
    socket.emit('updateProductList', allProducts)
  })

  socket.on('chatMessagesRequest', async () => {
    console.log('>>> chatMessagesRequest')
    await messagesController.createMessagesTable()
    const allMessages = await messagesController.getAllMessages()
    io.sockets.emit('updateChatRoom', allMessages)
  })

  socket.on('addNewMessage', async (newMessage) => {
    console.log('>>> addNewMessage')
    await messagesController.addNewMessage(newMessage)
    const allMessages = await messagesController.getAllMessages()
    io.sockets.emit('updateChatRoom', allMessages)
  })
})

//////////////////////////////////////////////////////////////////////////////////
////         SERVER ON PORT
//////////////////////////////////////////////////////////////////////////////////
const PORT = Math.floor(Math.random() * (8099 - 8000)) + 8000
const server = httpServer.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${server.address().port}/`)
})
server.on('error', (error) => console.log(`Server error: ${error}`))
//////////////////////////////////////////////////////////////////////////////////