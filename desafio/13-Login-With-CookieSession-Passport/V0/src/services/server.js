import express from 'express';
import handlebars from 'express-handlebars';
import session from 'express-session';
import cookieParser from 'cookie-parser';

// import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import passport from 'passport';

import {__dirname,___dirname} from '../utils.js';
import mainRouter from '../routes/index.js';
import config from '../config/config.js';


import viewsRouter from '../routes/views.router.js'
import sessionsRouter from '../routes/sessions.router.js'
import initializePassport from '../config/passport.config.js';


//----------* MONGOOSE CONNECTION *----------//
try {
  await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options, () =>
  console.log('Mongoose is connected!',)
  )
  } catch (error) {
  console.log('Mongoose could not connect.')
}

const ttlSeconds = 600;

const StoreOptions = {
    store: MongoStore.create({
    mongoUrl:config.mongodb.cnxStr//,
    // crypto: {
    //   secret: 'squirrel',
    // },
  }),
  ttl:3600,
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false,
  // cookie: {
  //   maxAge: ttlSeconds * 1000,
  // },
};

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(session(StoreOptions));

app.use(express.urlencoded({ extended: true }));
const publicPath = ___dirname +  '/public';
app.use(express.static(publicPath));


initializePassport();
app.use(passport.initialize());
app.use(passport.session());




const layoutDirPath = ___dirname +  '/views/layouts';
const defaultLayerPth = ___dirname+ '/views/layouts/main.hbs';
const partialDirPath = ___dirname+  '/views/partials';

app.set('view engine', 'hbs');
app.engine(
  'hbs',
  handlebars({
    layoutsDir: layoutDirPath,
    extname: 'hbs',
    defaultLayout: defaultLayerPth,
    partialsDir: partialDirPath,
  })
);

// app.use(mainRouter);
app.use('/',viewsRouter);
app.use('/api/sessions',sessionsRouter);

export default app;
