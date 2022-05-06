// import express from 'express'                    // Libreria de express
// import { ProductsApiRoute, CartsApiRoute } from './routes/index.js';

const express = require('express')                      // Libreria de express
// import express from 'express';
const ProductsApiRoute =  require('./routes/products/index')
const CartsApiRoute =  require('./routes/carts/index')
const app = express();

app.use("/public", express.static('public')); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/productos', ProductsApiRoute );
app.use('/api/carritos', CartsApiRoute)

app.all('*', (req, res) => {
  res.json(
    { 
      error: `404 Not Found - Pagina No Encontrada`, 
      descripcion: `ruta :  ${req.url}.Lo Sentimos, no podemos encontrar la pagina que solicitaste.`,
      status: 404
    });
})

//////////////////////////////////////////////////////////////////////////////////
////         SERVER ON PORT
//////////////////////////////////////////////////////////////////////////////////
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${server.address().port}/`)
})
server.on('error', (error) => console.log(`error: ${error}`))
//////////////////////////////////////////////////////////////////////////////////