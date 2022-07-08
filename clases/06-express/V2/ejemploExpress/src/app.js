// const express = require('express');
import express from 'express';
const app = express(); // NO se pone new express no es una clase es un modulo;
const PORT = 8080;
const server = app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
    //console.log(`Server running on: ${__dirname}${server.address().port}/`)
})
server.on('error', (error) => console.log(`Server error: ${error}`))


app.get('/',(req,res)=>{
    //res.send('Finalmente, Bienvenido a Expess')
    res.send('<h1>TITULO HTML</h1>')
    res.send(`[
        {
            "title": "Escuadra",
            "price": 123.45,
            "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
            "id": 1
        },
        {
            "title": "Calculadora",
            "price": 234.56,
            "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
            "id": 2
        },
        {
            "title": "Globo Terráqueo",
            "price": 345.67,
            "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
            "id": 3
        }
    ]`)
})

app.get('/papaConQueso',(req,res)=>{
    res.send('Finalmente, Bienvenido a Expess - Pero con Papa Con Queso')
})