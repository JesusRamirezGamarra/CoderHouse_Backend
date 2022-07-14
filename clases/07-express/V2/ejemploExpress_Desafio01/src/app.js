// const express = require('express');
import express from 'express';
import moment from 'moment';
const app = express(); // NO se pone new express no es una clase es un modulo;
const PORT = 8080;
let counter =0 ;
const server = app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
    //console.log(`Server running on: ${__dirname}${server.address().port}/`)
})
server.on('error', (error) => console.log(`Server error: ${error}`))


app.get('/',(req,res)=>{
    //res.send('Finalmente, Bienvenido a Expess')
    res.send('<h1>Bienvenido al servidor Express</h1>')
    
})

app.get('/visitas',(req,res)=>{
    counter ++;
    res.send(`# Visitas en el EndPoint :  ${counter} veces`)
})

app.get('/fyh',(req,res)=>{
    let currentTime = moment();
    res.send(currentTime.format('DD/MM/YYYY hh:mm:ss'))
})

app.get('/papaConQueso',(req,res)=>{
    res.send('Finalmente, Bienvenido a Expess - Pero con Papa Con Queso')
})
http://localhost:8080/info?rol=users&&papaconqueso=papa
app.get('/info',(req,res)=>{
    console.log(req.query);
    res.send("Hola");

    let rol = req.query.rol;
    if(!rol)  return res.send('No se envio un rol, definir rol antes de continuar ...');
    else if(rol=='admin')  return res.send('Ok admimistrador');
    res.send('No eres usuario administrador');

})