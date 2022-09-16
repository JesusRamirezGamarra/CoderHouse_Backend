import express from 'express';
import exphbs from 'express-handlebars';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import {__dirname,___dirname} from '../utils.js';

import mainRouter from '../routes/index.js';
import config from '../config/index.js';


const ttlSeconds = 600;

const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: config.MONGO_ATLAS_URL,
    crypto: {
      secret: 'squirrel',
    },
  }),
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ttlSeconds * 1000,
  },
};

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(session(StoreOptions));

app.use(express.urlencoded({ extended: true }));
const publicPath = ___dirname +  '/public';
app.use(express.static(publicPath));

const layoutDirPath = ___dirname +  '/views/layouts';
const defaultLayerPth = ___dirname+ '/views/layouts/main.hbs';
const partialDirPath = ___dirname+  '/views/partials';

app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    layoutsDir: layoutDirPath,
    extname: 'hbs',
    defaultLayout: defaultLayerPth,
    partialsDir: partialDirPath,
  })
);

app.use(mainRouter);

export default app;
