/***************************************************************************************
 * productos.js - declaro las rutas asociadas a los productos
 ****************************************************************************************/
const express = require('express');
const router = express.Router();

// instancio el controlador
const Productos = require('../api/productos');
const productos = new Productos();



router.get('/', (req, res) => {
    let listado = productos.getProductos();
    if (listado.length === 0) {
        res.send({ error: "No hay productos cargados" })
    } else {
        return res.json(listado);
    }
})

router.get('/:id', (req, res) => {
    let id = req.params.id;
    let producto = productos.listar(id);
    if (producto == null) {
        res.send({ error: "Producto no encontrado" })
    } else {
        res.json(producto)
    }
})

router.post('/', (req, res) => {
    console.log(req.body.title);
    console.log(req.body.price);
    console.log(req.body.thumbnail);
    productos.guardar(req.body.title, req.body.price, req.body.thumbnail);
    return res.json({ estado: 'GUARDADO' });
})







router.delete('/:id', (req, res) => {
    return res.json({ estado: 'BORRADO' });

})

module.exports = router;