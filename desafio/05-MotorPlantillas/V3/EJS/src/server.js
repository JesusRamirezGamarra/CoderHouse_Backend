import express from 'express';
import {__dirname,___dirname} from './utils.js';
import productsRouter from './routes/products.router.js';

const app = express();

// Settings
app.set('view engine', 'ejs')
app.set('views', 'src/views')


app.use(express.static(___dirname+'/public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
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
