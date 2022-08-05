import express from 'express';
import path from 'path';
import { __dirname } from './utils.js';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.js';
import productsRouter from './routes/products.js';
import { Server } from 'socket.io';
import { ChatManager } from './managers/chatManager.js';

const app = express();

const PORT = process.env.PORT||8080;

const chatService = new ChatManager();

const server = app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`));
const io = new Server(server);

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname+'/views');
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', viewsRouter);
app.use('/api/products', productsRouter);
app.use('*', (req, res) => {
    res.render('error404');
})

io.on('connection', socket =>{
    console.log("Cliente conectado en socket: " + socket.id);

    socket.on('client: add product', data => {
        let newProduct = data;
        io.emit('server: new product', newProduct);
    })

    socket.on('client: delete product', data => {
        let products = data;
        console.log(products)
        io.emit('server: products', products);
    })

    socket.on('message', async(data) => {
        let newMessage = data;
        await chatService.addMessage(newMessage);
        let messages = await chatService.getAll();
        io.emit('messages', messages);
    })
});