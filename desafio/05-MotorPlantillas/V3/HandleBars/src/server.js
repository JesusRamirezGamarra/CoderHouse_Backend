import express from 'express';
import handlebars from 'express-handlebars';
import {__dirname,___dirname} from './utils.js';
import productsRouter from './routes/products.router.js';
import bodyParser from "body-parser";

const app = express();

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

app.use(express.static(___dirname+'/public'));
app.use(express.urlencoded({ extended: true }))
app.use('/', productsRouter)      

                      // Route for products ROOT

//////////////////////////////////////////////////////////////////////////////////
////         SERVER ON PORT
//////////////////////////////////////////////////////////////////////////////////
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${server.address().port}/`)
})
server.on('error', (error) => console.log(`Server error: ${error}`))
//////////////////////////////////////////////////////////////////////////////////
