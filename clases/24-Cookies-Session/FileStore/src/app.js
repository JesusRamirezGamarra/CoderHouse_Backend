import express from 'express';
import session from 'express-session';
import storage from 'session-file-store';


import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js'
import sessionsRouter from './routes/sessions.router.js'
import config from './config/config.js'


////////////////////////////////////////////////////////////////////////
///////////// Express Config
////////////////////////////////////////////////////////////////////////
const app = express();
const FileStorage = storage(session);

// http://expressjs.com/en/resources/middleware/session.html
const ttlSeconds = 1;
app.use(express.json());
app.use(express.static(__dirname+'/public'));
app.use(session({
        store: new FileStorage({
            path:'sessions',
            ttl: 10, // Seconds
            retries:0
        }),
        secret: 'shhhhh',
        resave: true,
        saveUninitialized:false,
        cookie: {
            maxAge: ttlSeconds * 1000,
            // expires: Date.now()+ ( 1 ),
            // httpsonly:true,
            // path:"/",
        },
    })
);



////////////////////////////////////////////////////////////////////////
///////////// Handlebars
////////////////////////////////////////////////////////////////////////

// app.engine('handlebars',handlebars.engine());
// app.set('views',__dirname+'/views');
// app.set('view engine','handlebars');



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