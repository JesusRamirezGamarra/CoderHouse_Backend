//const express = require('express');
// const router = require('./routes/productos');
// const productos = require('./api/productos');

import express from 'express';
import productsRouter from './routes/products.router.js';


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// creo una app de tipo express
const app = express();
// pongo a escuchar el servidor en el puerto indicado
const puerto = 8080;
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});
// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// protejo el servidor ante cualquier excepcion no atrapada
app.use((err, req, res, next) => {
    console.error(err.message);
    return res.status(500).send('Algo se rompio!');
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', productsRouter);
app.use(express.static('src/public'));




// module.exports = server;