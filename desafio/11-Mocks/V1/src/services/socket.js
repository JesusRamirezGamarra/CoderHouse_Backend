// import express from 'express';
//const socketIo = require('socket.io');
//import { socketIo } from 'socket.io';
// import { createServer } from "http";
import { Server } from "socket.io";
//import { DBService } from '../api/apiSQL'
// import { ProductosController } from '../api/apiFaker.js'
// import { MensajesController } from '../api/apiArchivoMensajes.js';
import oProductosController  from '../api/apiFaker.js'
import oMensajesController  from '../api/apiArchivoMensajes.js';

let io;

export const initWsServer = (server) => {
  //io = socketIo(server);

  // console.log('export const initWsServer = (server) => ')
  // // // // const httpServer = createServer();
  const io = new Server(server, {
  // // // //   // ...
  });
  //io = socketIo(server);

  // const app = express();
  // const PORT =   process.env.PORT || 8080;
  // const server = app.listen(PORT, () => {
  //   console.log(`Server running on: http://localhost:${server.address().port}/`)
  // })
  // server.on('error', (error) => console.log(`Server error: ${error}`))
  // const io = new Server(server);
  

  io.on('connection', (socket) => {
    console.log('Nueva Conexion establecida!');
    console.log(new Date());

    socket.on('allProducts', async () => {
      const productos = await oProductosController.get()
      productos.forEach((unProducto) => {
        socket.emit('producto', unProducto);
      });
    });
    
    socket.on('allMsgs', async () => {
      const mensajes = await oMensajesController.get()
        socket.emit('mensaje', mensajes);
    });
  });
  return io;
};

export const socketEmit = (eventName, message) => {
    io.emit(eventName, message);
  };

// module.exports = {
//   initWsServer,
//   socketEmit,
// };

// export const  = {
//   initWsServer,
//   socketEmit,
// };

export default socketEmit