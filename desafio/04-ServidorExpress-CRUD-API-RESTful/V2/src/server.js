import cors from 'cors';
import {__dirname} from './utils.js'
import express from 'express';
import productsRouter from './routes/products.router.js';
import visitsRouter from './routes/visits.router.js';
import {Contenedor} from './middleware/api/VisitsCounterFileManager.js';
//import progressCountRouter from './routes/progressCount.router.js';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// creo una app de tipo express
const app = express();
// pongo a escuchar el servidor en el puerto indicado
const puerto = 8080;
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});
// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
    
});

//creo una instancia de contendor
const contenedor = new Contenedor('visitsCounter.json');
//const contenedor = new Contenedor(__dirname + '/database/files/visitsCounter.json');
// const contenedor = new Contenedor('/home/jesus/Proyecto/Backend/desafio/04-ServidorExpress-CRUD-API-RESTful/V2/src/database/files/visitsCounter.json');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// middleware para manejar las peticiones
const middlewareVisitsCounter = async( req, res, next ) => {
    // console.log('middlewareVisitsCounter : ', __dirname);
    // console.log('req.url : ',req.url) ;
    // if( req.url.includes('/css/') || req.url.includes('/js/') && 
    //     req.url.includes('/img/') || req.url.includes('/ico/')){
    //     console.log('visits NOT Visits Counter : ',app.locals.visits) ;
    // }else{
    //     const visits =  await contenedor.getAll();
    //     console.log('visits .....: ',visits) ;
    //     // if(visits >= 0){
    //         app.locals.visits = (++app.locals.visits || 1) ;
    //         const visitasJSON = [{visitas:app.locals.visits}];
    //         console.log('visitasJSON : ',visitasJSON) ;
    //         await contenedor.save(visitasJSON);
    //     // }
    //     console.log("🚀 ~ file: server.js ~ line 53 ~ app.use ~ app.locals.visits", app.locals.visits)
    // }
    
    if ( req.url ==='/' || req.url ==='index.html' ){
        app.locals.visits = (++app.locals.visits || 1) ;
        await contenedor.save([{visitas:app.locals.visits}]);
        console.log('visitasJSON : ',[{visitas:app.locals.visits}]) ;
        console.log('middlewareVisitsCounter __dirname : ',__dirname);
    }

    next();
}

const middlewareCors = (req, res, next) => {
    console.log('request', req.url, req.body, req.method);
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header('Access-Control-Allow-Methods', '*');
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-token");
    // if(req.method === 'OPTIONS') {
    //     res.end();
    // }
    // else {
    //     next();
    // }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.use(middlewareVisitsCounter,(req, res, next) => {
    // if(req.method.toLocaleUpperCase() !== 'GET'){
    //     res.locals.status = '405';
    //     next(new Error('405 Method Not Allowed'));
    // }
    next();
    // console.error(err.message);
    // return res.status(500).send('Algo se rompio!');
});

// // protejo el servidor ante cualquier excepcion no atrapada
// app.get('*', (err, req, res, next) => {
//     res.locals.status = '404';
//     next(new Error('404 Not Found'));
//     // console.error(err.message);
//     // res.status(500).send('Not Supported');
// })

// app.use( (err, req, res, next) => {
//     res.status(res.locals.status)
//     res.send(err.toString());
// })

// app.use(cors({
//     origin: 'http://localhost:8080',
// })); /* NEW */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/api/productos', productsRouter);
app.use('/api/visits', visitsRouter);

// module.exports = server;