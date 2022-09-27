import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js'
import sessionsRouter from './routes/sessions.router.js'
import mongoose from 'mongoose';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import initializePassport from './config/passport.config.js';
import passport from 'passport';
import config from './config/config.js'

const app = express();
// const connection = mongoose.connect("URL DEL BUEN AMIGO MONGO AQUÍ :)")

try {
    await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options, () =>
    console.log('Mongoose is connected!',)
    )
    } catch (error) {
    console.log('Mongoose could not connect.')
}


app.use(express.json());
app.use(express.static(__dirname+'/public'))
app.use(session({
    secret:'c0derSecretConpapasquesitoYunaMalteada',
    store:MongoStore.create({
        //mongoUrl:"URL DEL MARAVILLOSO MONGUIN FELIZ AQUI",
        mongoUrl:config.mongodb.cnxStr,
        ttl:3600
    }),
    resave:false,
    saveUninitialized:false
}));
initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

app.use('/',viewsRouter);
app.use('/api/sessions',sessionsRouter);
const server = app.listen(8080,()=>console.log("RAWWWR"))