import express from 'express';
import { Server } from 'socket.io';
import handlebars from 'express-handlebars';

import __dirname from './utils.js';

const app = express();
const server = app.listen(8080,()=>console.log("Listening"))

// app.engine('handlebars',handlebars.engine());
// app.set('views',__dirname+'/views');
// app.set('view engine','handlebars');

console.log(__dirname)

const layoutDirPath   = __dirname + "\\views\\layouts";
const defaultLayerPth = __dirname + "\\views\\layouts\\main.hbs";
const partialDirPath  = __dirname + "\\views\\partials";
app.engine('.hbs',handlebars.engine({
    extname : ".hbs",
    layoutsDir: layoutDirPath,
    defaultLayout: defaultLayerPth,
    partialsDir: partialDirPath,
}));
app.set('view engine','.hbs');
app.set('views',__dirname+'\\views')     


app.use(express.json());
app.use(express.static(__dirname+'/public'));

const io = new Server(server)

const fakeApi = () => {
    return [
        {name: 'Katarina',lane: 'midlaner'},
        {name: 'Jayce',lane: 'toplaner'},
        {name: 'Heimerdinger',lane: 'toplaner'},
        {name: 'Zed',lane: 'midlaner'},
        {name: 'Azir',lane: 'midlaner'}
    ];
}


app.get('/',(req,res)=>{
    // res.render('home');
    // console.log(fakeApi() )
    res.render('main', {layout: 'index', suggestedChamps: fakeApi(),listExists: true  });
    // res.render('main', {layout : 'index'});
    // res.render('main', {layout : 'main'});
    //res.render('main');
})
const messages = [];

io.on('connection',socket=>{
    console.log("Socket conectado :)")

    socket.on('message',data=>{
        messages.push({socketid:socket.id,message:data})
        io.emit('messageLog',messages);
    })
})