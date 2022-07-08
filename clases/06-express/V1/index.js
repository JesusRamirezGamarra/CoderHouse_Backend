//npm i express 
//nodemon index.js

// console.log('hello world');
// const http = require('http');

const express = require('express');
const app = express()


// Manejadores de acceso
app.get('/', (req, res) => {
    res.send('hola mundo')
    })

app.get('/llegada', (req, res) => {
res.send('gracias por llegar')
    })

app.get('/salida', (req, res) => {
    res.send('gracias por salir')
    })        


const PORT = 8080
const server = app.listen(PORT, () => {
    // console.log(`Server running on port ${PORT}`)
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
    }
)
server.on("error", error => console.log(`Error en servidor ${error}`))