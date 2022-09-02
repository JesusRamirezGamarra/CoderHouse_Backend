//----------* Imports'S *----------//
import {Router} from 'express'
const router = Router()
import {cartsController} from '../controllers/carts.controller.js'



//----------* CART ROUTES *----------//

//----------* ADICCIONAL *----------//
// Get Cart List
router.get('/', cartsController.getcartList)
// Get Cart by ID
router.get('/:id', cartsController.getCartById)
// // Empty Cart
// router.delete('/:id', cartsController.emptyCartById)


//----------* BASE *----------//
// Get Cart Product List
router.get('/:cid/products', cartsController.getAllProductListByCartId)
// Create New Cart
router.post('/', cartsController.addNewCart)
// Add Product to Cart
router.post('/:cid/products', cartsController.addProductToCart)         // Segun Profesor
router.post('/:cid/products/:pid', cartsController.addProductToCartV2)  // segun Tutor
// Delete Product from Cart
router.delete('/:cid/products/:pid', cartsController.deleteProductToCartById)
// Delete Card by ID
router.delete('/:cid', cartsController.deleteCartById)




//----------* EXPORTS ROUTER *----------//
export default router;