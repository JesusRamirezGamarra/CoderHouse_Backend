//----------* Imports'S *----------//
import {FileManager} from '../middleware/api/FileManager.js';
const cartDB = new FileManager('carts');
const productDB = new FileManager('products');

//----------* cartController *----------//
export const cartsController = {

  
  addNewCart: async (req, res) => {
    try {
      const newCart = {
        id: await cartDB.getNewId(),
        timestamp:Date.now(),
        productos: [],
      }
      await cartDB.addItem(newCart)
      res.status(200).json({description:`new cart successfully created with id=${newCart.id}`,data:newCart})

    } catch (error) {
      console.warn({class:`cartsController`,method:`addNewCart: async (req, res)`,description: error})
      res.status(500).json({description: `Internal Server Error,please contact administrator `})
    }
  },
  deleteCartById: async (req, res) => {
    try {
      const cartId = req.params.cid
      console.log(cartId)
      console.log(req.params)
      const cartFound = await cartDB.getById(cartId)
      if (!cartFound) {
        res.status(422).json({ description: 'Cart not found.' })
      } else {
        await cartDB.deleteById(cartId)
        res.status(200).json({ description : `The cart with id=${cartId} has been removed.`})
      }
    } catch (error) {
      console.warn({class:`cartsController`,method:`deleteCartById: async (req, res)`,description: error})
      res.status(500).json({description: `Internal Server Error,please contact administrator `})
    }
  },
  getAllProductListByCartId: async (req, res) => {
    try {
      const cartId = req.params.cid
      let cartFound = await cartDB.getById(cartId)
      
      if (!cartFound) {
        res.status(422).json({ description: 'Cart not found.' })
      } else {
        res.status(200).json({description:`Cart found, content ${cartFound.products.length} products.`,data:cartFound.products})
      }
    } catch (error) {
        console.warn({class:`cartsController`,method:`getAllProductListToByCartId: async (req, res)`,description: error})
        res.status(500).json({description: `Internal Server Error,please contact administrator `})
    }
  },

  addProductToCart: async (req, res) => {
    try {
      const cId = parseInt(req.params.cid)
      const pId = parseInt(req.body.pid) // Se confirma por el profesor que va por FORM-DATA BODY
      const pquantity =  req.body.quantity ? parseInt(req.body.quantity) : 1


      const cartFound = await cartDB.getById(cId)
      if(!cartFound){
        return res.status(422).json({ description: `Cart ${pId} not found.` })
      }
      const productFound = await productDB.getById(pId)
      if(!productFound){
        return res.status(422).json({ description: `Product ${pId} not found.` })
      }
      else if(pquantity<1){
        return res.status(422).json({ description: 'Quantity must be greater than 0.' })
      }
      else if (productFound.stock == 0 ){
        return res.status(422).json({ description: `Product stock not found.` })
      }
      else if(productFound.stock < pquantity){
        return res.status(422).json({ description: 'insufficient stock.' })
      } 
      
      const productsInCartsFound = cartFound.products
      const ProductItemInCarts = productsInCartsFound.find(item=> item.id === parseInt(pId))

      if(!ProductItemInCarts){//insert new product
        const newProduct = {
          id: pId,
          quantity: pquantity,
        }
        cartFound.products.push(newProduct)
        await cartDB.updateById(cartFound)
        return res.status(200).json({description:`Product ${pId} added to cart ${cId} successfully.`,data:cartFound})
        
      }
      else {//Update quantity

        let { stock, ...itemRest } = productFound;
        stock = stock - pquantity
        itemRest.timestamp = Date.now()
        console.log(`stock : `,stock)
        await productDB.updateById({...itemRest,stock})
        //console.log(`cartFound : `,cartFound)
        cartFound.timestamp = Date.now()
        cartFound.products = cartFound.products.map( item => item.id !== pId ? item : {...item, quantity: item.quantity + pquantity} )
        await cartDB.updateById(cartFound)
        //console.log(`Update cartFound.products : `,cartFound.products)

        return res.status(200).json({description: `(${pquantity}) unid(s) of (${productFound.id}) - ${productFound.name} added successfully in Cart.`,data:cartFound})
      }

    }catch (error) {
      console.warn({class:`cartsController`,method:`addProductToCart: async (req, res)`,description: error})
      res.status(500).json({description: `Internal Server Error,please contact administrator `})
    }
  },


  deleteProductToCartById: async (req, res) => {
    try {
      const cId = parseInt( req.params.cid )
      const pId = parseInt( req.params.pid )

      const cartFound = await cartDB.getById(cId)
      if(!cartFound){
        return res.status(422).json({ description: `Cart ${cId} not found.` })
      }

      const productFound = await productDB.getById(pId)
      if(!productFound){
        return res.status(422).json({ description: `Product ${pId} not found.` })
      }
      else{
        cartFound.timestamp = Date.now()
        cartFound.products = cartFound.products.filter( item => item.id !== pId )
        //cartFound.products = cartFound.products.map ( item => {if(item.id !== pId)return item })
        //cartFound.products = cartFound.products.map ( item => (item.id !== pId) ? item : '' )
        await cartDB.updateById(cartFound)
        return res.status(200).json({description: `Producto : (${productFound.id}) - ${productFound.name} was removed from your cart.`,data:cartFound})
      }

    } catch (error) {
      console.warn({class:`cartsController`,method:`deleteProductToCartById: async (req, res)`,description: error})
      res.status(500).json({description: `Internal Server Error,please contact administrator `})
    }
  },







  getCartById: async (req, res) => {
    try {
      console.log('getCartById')
      const cartId = req.params.id
      const cartFound = await cartDB.getById(cartId)

      if (!cartFound) {
        res.send({ error: 'Cart not found.' })
      } else {
        res.json(cartFound)
      }
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },

  getcartList: async (req, res) => {
    try {
      const allCarts = await cartDB.getAll()
      res.json(allCarts)
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },



  cartProductList: async (req, res) => {
    try {

      const cartId = req.params.id
      const cartFound = await cartDB.getById(cartId)

      if (!cartFound) {
        res.send({ error: 'Cart not found.' })
      } else {
        res.json(cartFound.productos)
      }
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },


  addProductToCartV0: async (req, res) => {
    try {
      const cartId = req.params.id
      const prodId = req.params.id_prod

      const cartFound = await cartDB.getById(cartId)
      const productFound = await productDB.getById(prodId)

      if (!cartFound) {
        res.send({ error: 'Cart not found.' })
      } else if (!productFound) {
        res.send({ error: 'Product not found.' })
      } else {
        await cartDB.addItemInto(cartFound.id, productFound)
        const updatedCart = await cartDB.getById(cartId)
        res.json(updatedCart)
      }
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },


  emptyCartById: async (req, res) => {
    try {
      const cartId = req.params.id
      const cartFound = await cartDB.getById(cartId)

      if (!cartFound) {
        res.send({ error: 'Cart not found.' })
      } else {
        await cartDB.emptyContainer(cartId)
        const updatedCart = await cartDB.getById(cartId)
        res.json(updatedCart)
      }
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },

}


//----------* EXPORTS CONTROLLER *----------//
export default cartsController
