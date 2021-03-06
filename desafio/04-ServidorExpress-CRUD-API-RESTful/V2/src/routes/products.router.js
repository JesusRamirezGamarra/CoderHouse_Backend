/***************************************************************************************
 * productos.js - declaro las rutas asociadas a los productos
 ****************************************************************************************/
//const express = require('express');
//const router = express.Router();

// instancio el controlador
// const Productos = require('../api/FileManager');
// const productos = new Productos();

import axios from 'axios';
import {Router} from 'express';
const router = Router();

import {Productos} from '../middleware/api/ProductsMemoryManager.js';
const productos = new Productos();

import {uploader} from '../utils.js';
const productosUpload = [];


router.get("/list", function (req, res) {

    const url = 'http://localhost:8080/api/productos';

    // Make a request
    axios.get(url)
    .then(response => {
        // send the collected data back to the client-side DataTable
        res.json({
        "data": response.data
        })
    })
    .catch(function (error) {
        // handle error
        console.log(error);
        res.json({"error": error});
    })
});

///
router.get('/', (req, res) => {
    let listado = productos.getProductos();
    console.log(listado);
    if (listado.length === 0) {
        res.send([{ error: "No hay productos cargados" }])
    } else {
        // return res.json(listado);
        return res.json({
            "data": listado
        });
    }
})

router.get('/:id', (req, res) => {
    let id = req.params.id;
    let producto = productos.listar(id);
    if (producto == null) {
        // res.send(JSON.stringify([{ 
        //     "error" : "Producto no encontrado" 
        // }], null, '...'))
        res.send([{ "error" : "Producto no encontrado" }])
    } else {
        res.json(producto)
    }
})
// router.get('/:id([0-9])*', (req, res) => {
//     let id = req.params.id;
//     let producto = productos.listar(id);
//     if (producto == null) {
//         res.send({ error: "router.get('/:id([0-9])*', (req, res) => Producto no encontrado" })
//     } else {
//         res.json(producto)
//     }
// })


router.post('/', (req, res) => {
    console.log('req.body.title : ',req.body.title);
    console.log('req.body.price : ',req.body.price);
    console.log('req.body.thumbnail : ',req.body.thumbnail);
    productos.guardar(req.body.title, req.body.price, req.body.thumbnail);
    return res.json([{ "estado": "GUARDADO" }]);
})

router.post('/Upload',uploader.single('thumbnail'), (req, res) => {
    console.log('req.headers : ',req.headers);
    console.log('req.file : ',req.file);
    console.log('req.body : ',req.body);
    let prod = req.body;
    prod.image = req.file.path;
    prod.filename = req.file.filename;

    console.log('req.title : ',prod.title);
    console.log('req.price : ',prod.price);
    console.log('req.image : ',prod.image);
    console.log('req.image : ',prod.filename);
    // console.log('prod.image : ',prod.image);
    // console.log('req.image : ',prod.image);
    // console.log('req.file.originalname : ',prod.file.originalname);
    productos.guardar(prod.title, prod.price, prod.filename);

    // console.log('Upload Productos Form : ', prod);
    if(!prod.title) return res.status(400).send({status:"error",error:"Invalid input title"})
    if(!prod.price) return res.status(400).send({status:"error",error:"Invalid input price"})
    if(!prod.image) return res.status(400).send({status:"error",error:"Invalid input image"})
    productosUpload.push(prod);
    console.log('Upload Productos productosUpload : ', productosUpload);

    return res.json([{ "estado": "GUARDADO" }]);
})



router.put('/:id', (req, res) => {
    let id = req.params.id;
    let producto = productos.listar(id);
    if (producto == null) {
        return res.json([{ "error" : "Producto no encontrado" }]);
    }
    else {
        productos.actualizar(req.params.id, req.body.title, req.body.price, req.body.thumbnail);
        return res.json([{ "estado": "ACTUALIZADO" }]);
    }
})

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    productos.eliminar(id);
    return res.json({ estado: 'BORRADO' });

})

// module.exports = router;
export default router;