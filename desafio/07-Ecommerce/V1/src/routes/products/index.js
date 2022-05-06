// import Router from 'express';
// import { products } from '../../containers/index.js';
// export const ProductsApiRoute = new Router();
const Router = require('express');
const Container = require('../../containers/index.js')
const products = new Container('./src/databases/products.json')
const ProductsApiRoute = new Router()
const isAdmin = true;

//////////////////////////////////////////////////////////////////
// GET
//////////////////////////////////////////////////////////////////

// a. GET: '/' - Me permite listar todos los productos disponibles (disponible para todos)
ProductsApiRoute.get('/', async (req, res, next) => {
  try {
    const data = await products.getAll();
    res.json(data);
  } catch (ex) {
    console.error(ex);
  }
});
// b. GET: '/:id' - Me permite listar un producto por su id (disponible para todos)
ProductsApiRoute.get('/:id', async (req, res) => {
  try {
    const item = await products.getById(req.params.id);
    item ? res.json(item) : res.json(
                              {
                                error: `404 Not Found`, 
                                desc: `No encontramos la producto que buscas...`,
                                status: 404
                              });
  } catch (ex) {
    console.error(ex);
  }
});

//////////////////////////////////////////////////////////////////
// POST
//////////////////////////////////////////////////////////////////

// c. POST: '/' - Para incorporar productos al listado (disponible solo para administradores)
ProductsApiRoute.post('/', async (req, res) => {
  if (isAdmin) {
    if(!(res.body)){
      const nombre = req.body.nombre;
      const descripcion = req.body.descripcion;
      const foto = req.body.foto;
      const precio = req.body.precio;
      const stock = req.body.stock;
      try {
        products.save(nombre, descripcion, foto, precio,stock);
        res.json(
          {
            desc: `Producto creado exitosamente`,
            status: `200 OK`  
          });
      } catch (ex) {
        console.error(ex);
      }
    }else{
      res.json(
          { 
            error: `412 Precondition Failed`, 
            desc: `POST requiere campos : Nombre , Descripcion, Foto y precio` ,
            status : 412
          });
    }
  } else {
    res.json(
              { 
                error: `403 Forbidden`, 
                desc: `POST reservado para admins` ,
                status : 403
              });
  }
});

//////////////////////////////////////////////////////////////////
// PUT
//////////////////////////////////////////////////////////////////

// d. PUT: '/:id' - Actualiza un producto por su id (disponible solo para administradores)
ProductsApiRoute.put('/:id', async (req, res) => {

  if (isAdmin) {
    if(!(res.body)){
      const id = parseInt(req.params.id);
      const nombre = req.body.nombre;
      const descripcion = req.body.descripcion;
      const foto = req.body.foto;
      const precio = req.body.precio;
      const stock = req.body.stock;
    
      try {
        const update = await products.updateProduct(id, nombre, descripcion, foto, precio, stock);
        update ? res.json(
                            {
                              desc: `Producto modificado exitosamente`,
                              status:`200 OK`
                            }
                          ) : res.json(
                            {
                              error: `404 Not Found`, 
                              desc: `No encontramos el producto a modificar`,
                              status : 404
                            });
      } catch (ex) {
        console.error(ex);
      }
    }else{
      res.json(
                { 
                  error: `412 Precondition Failed`, 
                  desc: `POST requiere campos : Nombre , Descripcion, Foto y precio` ,
                  status: 412
                });
    }      
  } else {
    res.json(
              {
                error: `403 Forbidden`, 
                desc: `PUT reservado para admins` ,
                status : 403
              });
  }
});

//////////////////////////////////////////////////////////////////
// DELETE
//////////////////////////////////////////////////////////////////

// e. DELETE: '/:id' - Borra un producto por su id (disponible solo para administradores)
ProductsApiRoute.delete('/:id', async (req, res) => {
  if (isAdmin) {
    try {
      const isDeleted = await products.deleteById(req.params.id);
      isDeleted ? res.json(
                            {
                              desc: `Producto eliminado exitosamente`, 
                              status: `200 OK`
                            }) : 
                            res.json(
                              {
                                error: 404, 
                                desc: `No encontramos el producto que busca eliminar...`,
                                status :404
                              });
    } catch (ex) {
      console.error(ex);
    }
  } else {
    res.json(
              {
                error: `403 Forbidden`, 
                desc: `DELETE reservado para admins` ,
                status: 403

              });
  }
});

module.exports = ProductsApiRoute;