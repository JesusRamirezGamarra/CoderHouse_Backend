//----------* REQUIRE'S *----------//
const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const productsController = require('./helpers/productsController')
const messagesController = require('./helpers/messagesController')

//----------* EXPRESS() *----------//
const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

//----------* MIDDLEWARES *----------//
app.set('views', 'src/views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//----------* ROUTES *----------//
app.use('/', (req, res) => {
  try {
    res.sendFile(process.cwd() + '/public/index.html')
  } catch (error) {
    console.log(`ERROR: ${error}`)
  }
})

//----------* SOCKET IO *----------//
io.on('connection', (socket) => {
  socket.emit('socketConnected')

  socket.on('productListRequest', async () => {
    const allProducts = await productsController.getAllProduct()
    socket.emit('updateProductList', allProducts)
  })

  socket.on('chatMessagesRequest', async () => {
    const allMessages = await messagesController.getAllMessages()
    socket.emit('updateChatRoom', allMessages)
  })

  socket.on('addNewProduct', async (newProduct) => {
    await productsController.addNewProduct(newProduct)
    const allProducts = await productsController.getAllProduct()
    socket.emit('updateProductList', allProducts)
  })

  socket.on('addNewMessage', async (newMessage) => {
    await messagesController.addNewMessage(newMessage)
    const allMessages = await messagesController.getAllMessages()
    socket.emit('updateChatRoom', allMessages)
  })
})

//----------* SERVER CONFIGURATION *----------//
const PORT = 8085
const server = httpServer.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${server.address().port}/`)
})
server.on('error', (error) => console.log(`Server error: ${error}`))
