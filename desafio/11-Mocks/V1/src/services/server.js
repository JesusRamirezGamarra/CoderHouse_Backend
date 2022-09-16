import express from 'express';
import mainRouter from '../routes/index.js';
import http from 'http';
//import path from 'path'
import {__dirname,___dirname} from '../utils.js';
import { initWsServer } from './socket.js'

const app = express();

const httpServer = http.Server(app);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(function (err, req, res, next) {
  return res.status('500').json({
    msg: 'There was an unexpected error',
    error: err.message,
  });
});


//path absoluto de la carpeta public
const publicPath = ___dirname + '/public';
app.use(express.static(publicPath));
//CONFIGURACIÓN DE ejs
app.set('view engine', 'ejs');
//path absoluto de la carpeta views
const viewPath = ___dirname +  '/views/pages'
app.set('views', viewPath);


initWsServer(httpServer);
app.get('/', async (req, res) => { res.render('index')  })
app.use('/api', mainRouter);


export default httpServer;
