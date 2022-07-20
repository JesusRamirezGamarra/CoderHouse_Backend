import express from 'express';
import __dirname from './utils.js'
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';
import usersRouter from './routes/users.router.js';
const app =express();

app.use(express.static(__dirname+'/public'));
//console.log('__dirname',__dirname);
const server = app.listen(8080,()=> console.log('Listening on 8080'));


// Template Engine configuration

app.engine('handlebars',handlebars.engine());           // set motor : handlebars
app.set('views',__dirname + '/views');                  // set directorio de views
app.set('view engine','handlebars');                    // set motor de views : handlebars ( relacion de vistas con motor )

app.use('/',viewsRouter); // set rutas de views ( RENDER )
app.use('/users',usersRouter); // set rutas de Method API ( NO RENDER)

// app.engine('handlebars',handlebars.engine());
// app.set('views',__dirname+'/views');
// app.set('view engine','handlebars')
