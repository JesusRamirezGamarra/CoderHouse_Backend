import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import { Server } from 'socket.io';


const app = express();
const server = app.listen(8080,()=>console.log("Listening on 8080"));
const io = new Server(server);

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

app.use(express.static(__dirname+'/public'));
app.use('/',viewsRouter);


let log = [];
io.on('connection',socket=>{
    console.log("Socket connected")
    socket.broadcast.emit('newUser')
    socket.on('message',data=>{
        console.log(data)
        io.emit('message',data =>{
            log.push(data);
            //socket.emit('message',log); // mensaje solo a quien envio mensaje 
            io.emit('message',log); // mensaje a todos los sockets
        })
    })
})

