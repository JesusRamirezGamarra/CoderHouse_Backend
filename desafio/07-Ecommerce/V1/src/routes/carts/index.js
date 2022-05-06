// import Router from 'express';
// import { carts } from '../../containers/index.js';
// export const CartsApiRoute = new Router();
const Router = require('express')
const Container = require('../../containers/index.js')
const carts = new Container('./src/databases/carts.json')
const CartsApiRoute = new Router();
const isAdmin = true;

//////////////////////////////////////////////////////////////////
// POST
//////////////////////////////////////////////////////////////////

//a. POST: '/' - Crea un carrito y devuelve su id.
CartsApiRoute.post('/', async (req, res) => {
  console.log('post')
    const newCart = await carts.addNewCart();
    res.json(
        {
          desc :`Carrito creado exitosamente con id: ${newCart}`,
          status : 200
        });
  });
  
// b. POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto
  CartsApiRoute.post('/:id/productos', async (req, res) => {
    const id = req.params.id;
    const id_prod = req.body.id_prod;
    const newCart = await carts.addToCart(id, id_prod);
    if (newCart === true) 
      res.json(
        {
          desc: `Producto añandido exitosamente a su carrito.`,
          status: 200
        });
    else{
      res.json(
          { 
            error: '404 Not Found',
            desc: newCart ,
            status : 404
          });
    }
  });
  
//////////////////////////////////////////////////////////////////
// GET
//////////////////////////////////////////////////////////////////

// c. GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito
  CartsApiRoute.get('/:id/productos', async (req, res) => {
    const ID = req.params.id;
    try {
      const cartProducts = await carts.getCartProducts(ID);
      cartProducts ? res.json(cartProducts) : res.json(
                                                        {
                                                          error: `404 Not Found`, 
                                                          desc: `No encontramos el carrito`,
                                                          status : 404
                                                        });
    } catch (error) {
      console.error(error);
    }
  });


//////////////////////////////////////////////////////////////////
// DELETE
//////////////////////////////////////////////////////////////////
  
// d. DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto
  CartsApiRoute.delete('/:id/productos/:id_prod', async (req, res) => {
    const ID = req.params.id;
    const ID_PRODUCT = req.params.id_prod
    try {
      const cartProducts = await carts.deleteProductFromCart(ID, ID_PRODUCT);
      cartProducts === true ? res.json(
                                        {
                                          desc: `Producto elminado exitosamente`,
                                          status : 200
                                        }) : res.json(
                                          {
                                            error: `404 Not Found`, 
                                            desc: cartProducts,
                                            status : 404
                                          });
    } catch (error) {
      console.error(error);
    }
  });


  // e. DELETE: '/:id' - Vacía un carrito.
  CartsApiRoute.delete('/:id', async(req, res)=>{
    const ID = req.params.id
    try {
      const emptyCart = await carts.emptyCart(ID)
      emptyCart === true ? res.json(
                                      {
                                        
                                        desc: `Carrito vaciado exitosamente`, 
                                        status: 200
                                      }) : res.json(
                                        {
                                          error: `404 Not Found`, 
                                          desc: emptyCart,
                                          status: 404
                                        })
    } catch (error) {
      console.error(error)
    }
  })

  module.exports = CartsApiRoute;