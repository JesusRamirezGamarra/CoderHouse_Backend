//----------* Imports'S *----------//
import {Router} from 'express'
const router = Router()
import {cartsController} from '../controllers/carts.controller.js'



router.post('/', cartsController.addNewCart)
router.delete('/:cid', cartsController.deleteCartById)
router.get('/:cid/products', cartsController.getAllProductListByCartId)
router.post('/:cid/products/:pid', cartsController.addProductToCart)
router.delete('/:cid/products/:pid', cartsController.deleteProductToCartById)


//router.post('/:cid/products/:pid', cartsController.addProductToCart)
//router.post('/:cid/products', cartsController.addProductToCart)
//router.get('/:cid/products', cartsController.cartProductList)
//router.delete('/:cid/products/:pid', cartsController.deleteProductFromCart)


//----------* EXPORTS ROUTER *----------//
export default router;