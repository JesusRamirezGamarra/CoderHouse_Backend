const path = require('path')                            // path
const express = require('express')                      // Libreria de express
// const engine = require('express-handlebars').engine     // Libreria de handlebars
const productsRouter = require('./routes/products')     // Route for products
const {Server:HttpServer} = require('http')              // Libreria de http
const {Server:IOServer} = require('socket.io')           // Libreria de socket.io

// App Express
const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
// const handlebarsConfig = {
//     extname: '.hbs',
//     defaultLayout: 'index.hbs',
//     layoutsDir: path.join(__dirname, 'views/layouts'),
// }
// Settings
// app.set('view engine', 'hbs')
// app.set('views', 'src/views')
// app.engine('.hbs', engine(handlebarsConfig))
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', productsRouter)                            // Route for products ROOT



app.get('/',()=>{
    res.send('OK')
    console.log('Usuario Conectado')
})

const mensajes=[]

io.on('Connection', (socket) => {
    console.log('Usuario Conectado')
    socket.on('nuevoMensaje',data=>{
        mensajes.push(data)
        console.log(mensajes)
    })
    socket.emit('mensajes','MENSAJE')
})


//////////////////////////////////////////////////////////////////////////////////
////         SERVER ON PORT
//////////////////////////////////////////////////////////////////////////////////
// const PORT = Math.floor(Math.random() * (8099 - 8000)) + 8000
// const server = app.listen(PORT, () => {
//     console.log(`Server running on: http://localhost:${server.address().port}/`)
// })
const PORT = 8087
const server = httpServer.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${server.address().port}/`)
})
server.on('error', (error) => console.log(`Server error: ${error}`))
//////////////////////////////////////////////////////////////////////////////////
