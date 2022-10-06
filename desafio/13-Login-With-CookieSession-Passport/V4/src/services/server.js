
import express from "express";
import exphbs from "express-handlebars";
// import path from "path";

import session from "express-session";
import passport from "passport";
import MongoStore from 'connect-mongo';


//import config from '../config/index.js'
import {___dirname} from '../utils.js';
import config from '../config/config.js'
import mainRouter from "../routes/index.js";
import { loginFunc, signupFunc } from "./auth.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Inicializar express-session





const ttlSeconds = 600;

const StoreOptions = {
  store: MongoStore.create({
    //mongoUrl: config.MONGO_ATLAS_URL,
    mongoUrl:config.mongodb.cnxStr,
    // crypto: {
    //   secret: 'squirrel',
    // },
  }),
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ttlSeconds * 1000,
  },
};

//Inicializamos Passport
app.use(passport.initialize());

//Le permitimos a passport que pueda manipular las sesiones
app.use(session(StoreOptions));

//Permitimos que passport pueda manipular las sessiones de nuestra app
app.use(passport.session());

//Lógica que ataja el Login de los usuarios
passport.use("login", loginFunc);

//Lógica que ataja el SignUp de los usuarios
passport.use("signup", signupFunc);

const publicPath      = ___dirname +  "/public";
app.use(express.static(publicPath));

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

app.use(mainRouter);

export default app;
