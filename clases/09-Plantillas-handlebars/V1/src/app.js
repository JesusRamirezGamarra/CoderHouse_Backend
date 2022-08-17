import express from 'express';
import __dirname from './utils.js'
const app =express();

app.use(express.static(__dirname+'/public'));
//console.log('__dirname',__dirname);
const server = app.listen(8080,()=> console.log('Listening on 8080'));

