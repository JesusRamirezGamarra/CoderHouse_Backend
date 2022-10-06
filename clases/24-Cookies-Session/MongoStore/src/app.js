import express from 'express';
import session, {Cookie} from 'express-session';
// import storage from 'session-file-store'
import MongoStore from 'connect-mongo';

import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js'
import sessionsRouter from './routes/sessions.router.js'
import mongoose from 'mongoose';

import config from './config/config.js'

////////////////////////////////////////////////////////////////////////
///////////// NoSQL : MongoDB
////////////////////////////////////////////////////////////////////////
//const connection = mongoose.connect("URL DE MONGUITO AQUÍ")
try {
    await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options, () =>
    console.log('Mongoose is connected!',)
    )
    } catch (error) {
    console.log('Mongoose could not connect.')
}

////////////////////////////////////////////////////////////////////////
///////////// Express Config
////////////////////////////////////////////////////////////////////////
const app = express();

const ttlSeconds = 20;
app.use(express.json());
app.use(express.static(__dirname+'/public'))
app.use(session({
        store: MongoStore.create({
            mongoUrl:config.mongodb.cnxStr, 
            ttl:20
        }),
        secret: 'shhhhh',
        resave: true,
        saveUninitialized:true,
        cookie: {
            maxAge: ttlSeconds * 1000,
            expires: ttlSeconds * 1000,
            // httpsonly:true,
            // path:"/",
        },        
    })
    );



////////////////////////////////////////////////////////////////////////
///////////// Handlebars
////////////////////////////////////////////////////////////////////////

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

app.use('/',viewsRouter);
app.use('/api/sessions',sessionsRouter);



////////////////////////////////////////////////////////////////////////
///////////// Express 
////////////////////////////////////////////////////////////////////////
const PORT = config.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

server.on('error', (error) => console.log(`Error en servidor: ${error}`));