import {__dirname} from './utils.js'
import express from 'express';
import {Server} from 'socket.io';

const app = express();
const server = app.listen(8080,()=>console.log('Listening on 8080'));
const io = new Server(server)

app.use(express.static(__dirname + '/public'));

io.on('connection',(socket)=>{
    // Socket representa el sokets cliente que se haya conectado en el evento 
    // Cuerpo de eventos del socket
    // Todo Socket se basa en .on y .emit
    // .on = escucha el evento
    // .emit = envia el evento
    // socket.emit = enviar solo al socket conectado
    // io.emit = envia a TODOS los conectados

    console.log("cliente conectado en socket : " + socket.id);
    console.log('a user connected');

    socket

    socket.on('Saludo',data=>{
            console.log(data);
    })

    
    socket.on('message',data=>{
        //console.emit(data);
        io.emit('log',`${socket.id} dice: ${data}`)

    })


    // socket.on('disconnect',()=>console.log('user disconnected'));
    // socket.on('chat message',(msg)=>{
    //     console.log('message: ' + msg);
    //     io.emit('chat message',msg);
    // }
    // );

})