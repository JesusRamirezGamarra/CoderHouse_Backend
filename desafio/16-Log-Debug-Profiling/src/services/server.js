
import express from "express";
import exphbs from "express-handlebars";

import session from "express-session";
import passport from "passport";
// import compression from "compression";
import MongoStore from 'connect-mongo';

import {___dirname} from '../utils.js';

import viewsRouter from '../routes/views.router.js'
import sessionsRouter from '../routes/sessions.router.js'
import randomRouter from '../routes/random.router.js'

import config from '../config/config.js'
import initializePassport from '../config/passport.config.js';
import { logger } from '../utils/logger.js';


import moment from 'moment'




console.log('inicializando server ... ')

const app = express();
// app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(___dirname +  "/public"));

const ttlSeconds = 60;
app.use(session({
    store:MongoStore.create({
        mongoUrl:config.mongo.MONGO_URL,
        ttl:3600
    }),
    // secret: 'shhhhhhhhhhhhhhhhhhhhh',
    secret:'c0derSecretConpapasquesitoYunaMalteada',
    resave:false,
    saveUninitialized:false,
    cookie: {
      maxAge: ttlSeconds * 1000,
      expires: ttlSeconds * 1000,
      // httpsonly:true,
      // path:"/",
    },  
}));

initializePassport();
//Inicializamos Passport
app.use(passport.initialize());
//Permitimos que passport pueda manipular las sessiones de nuestra app
app.use(passport.session());

const layoutDirPath   = ___dirname + "/views/layouts";
const defaultLayerPth = ___dirname + "/views/layouts/main.hbs";
const partialDirPath  = ___dirname + "/views/partials";
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs({
    layoutsDir: layoutDirPath,
    extname: "hbs",
    defaultLayout: defaultLayerPth,
    partialsDir: partialDirPath,
  })
);
app.use('/',viewsRouter);
app.use('/api/sessions',sessionsRouter);
//app.use('/api/randoms', randomRouter);
//MANEJO DE RUTAS INEXISTENTES
app.use( (req,res) => {
  try{
    let fyh = new moment().format('DD/MM/YYYY HH:mm:ss')
    let url =  req.protocol + '://' + req.get('host') + req.originalUrl;
    logger.warn(`${fyh}  || PATH: ${req.path} || Mehotd: ${req.method} || status: Page Not Fount || URL: ${url }`)
    res.status(404).render('404')
  }
  catch(err){
      logger.error(`${new moment().format('DD/MM/YYYY HH:mm:ss')} || PATH: ${req.path} || METHOD: ${req.method} || ERROR: ${err.message}`);
  }

})


export default app;
