import express from 'express';
import usersRouter from './routes/users.router.js';
import productsRouter from './routes/products.router.js';
import petsRouter from './routes/pets.router.js'

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


const server = app.listen(8080,()=>console.log("Now listening on 8080"))

//http://localhost:8080/index.html?user=jesus
/*Middleware nivel aplicación */
//  app.use((req,res,next)=>{
//     req.atributoAdicional="Propiedad adicional obtenidad de BD";
//     console.log("Peticion", req.method, " recibido en ", req.url);

//     // let user = req.query.user;
//     // console.log("🚀 ~ file: app.js ~ line 20 ~ app.use ~ user", user)    
    
//     // if(!user) return res.status(401).send({error:"Not authenticated"})
//     next();
// })

app.use(express.json());
app.use('/users',usersRouter);
app.use('/products',productsRouter);
app.use('/pets',petsRouter);
//console.log(__dirname+'/public')
app.use(express.static( 'src/public'));
//app.use(express.static(__dirname+'/public'));
//app.use(express.static( '/home/jesus/Proyecto/Backend/clases/08-RouterMulder/V1/src/public'));


//Errores : 
//app.use(express.static( 'public'));
//app.use(express.static( '../public'));
//app.use(express.static( '../../public'));


