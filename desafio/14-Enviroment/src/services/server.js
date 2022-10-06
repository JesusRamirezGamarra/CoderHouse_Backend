
import express from "express";
import exphbs from "express-handlebars";

import session from "express-session";
import passport from "passport";
import MongoStore from 'connect-mongo';


//import config from '../config/index.js'
import {___dirname} from '../utils.js';


import viewsRouter from '../routes/views.router.js'
import sessionsRouter from '../routes/sessions.router.js'

    // import mainRouter from "../routes/index.js"; 
    // import { loginFunc, signupFunc } from "./_____auth.js";

import config from '../config/config.js'
import initializePassport from '../config/passport.config.js';

console.log('inicializando server ... ')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(___dirname +  "/public"));

//Le permitimos a passport que pueda manipular las sesiones
// const ttlSeconds = 600;
// const StoreOptions = {
//   store: MongoStore.create({
//     mongoUrl:config.mongodb.cnxStr,
//     // crypto: {
//     //   secret: 'squirrel',
//     // },
//   }),
//   secret: 'shhhhhhhhhhhhhhhhhhhhh',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     maxAge: ttlSeconds * 1000,
//   },
// };
//app.use(session(StoreOptions));

const ttlSeconds = 60;
app.use(session({
    // secret:'c0derSecretConpapasquesitoYunaMalteada',
    store:MongoStore.create({
        mongoUrl:config.mongodb.cnxStr,
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

// //Lógica que ataja el Login de los usuarios
// passport.use("login", loginFunc);
// //Lógica que ataja el SignUp de los usuarios
// passport.use("signup", signupFunc);




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
// app.use(mainRouter);

app.use('/',viewsRouter);
app.use('/api/sessions',sessionsRouter);

export default app;
