import {Router} from 'express';
import uploader from '../utils.js';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const router = Router();

const pets = [];


router.use((req,res,next)=>{
    // let user = req.query.user;
    req.atributoAdicional="Propiedad adicional obtenidad de BD";
    // if(!user) return res.status(401).send({error:"Not authenticated"})
    next();
})

const middlewareAutenticacion = (req,res,next)=>{
    let autenticacion=true;
    console.log('middlewareAutenticacion : ', autenticacion)
    next();
}

const middlewareAutorizacion = (req,res,next)=>{
    let autorizacion=true;
    console.log('middlewareAutorizacion : ', autorizacion)
    next();
}



router.get('/',(req,res)=>{
    console.log('router GET : pets/')
    console.log(__dirname+'/public')
    res.send(pets);
    
})

router.post('/',middlewareAutenticacion,middlewareAutorizacion,uploader.single('file'),(req,res)=>{

    console.log('req.file : ' , req.file);
    console.log('req.body : ' , req.body);
    console.log('req.atributoAdicional : ',req.atributoAdicional);
    
    let pet = req.body;
    pet.image = req.file.path;
    console.log('pet : ', pet);
    if(!pet.name) return res.status(400).send({status:"error",error:"Invalid input name"})
    if(!pet.specie) return res.status(400).send({status:"error",error:"Invalid input specie"})
    if(!pet.image) return res.status(400).send({status:"error",error:"Invalid input image"})
    pets.push(pet);

    res.send({status:"success",message:"pet added"})
})

router.put('/',(req,res)=>{
    
})

router.delete('/',(req,res)=>{
    
})


export default router;