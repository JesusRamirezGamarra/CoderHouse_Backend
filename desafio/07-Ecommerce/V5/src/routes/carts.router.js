//----------* Imports'S *----------//
import {Router} from 'express'
const router = Router()
import {cartsController} from '../controllers/carts.controller.js'



router.post('/', cartsController.addNewCart)
router.delete('/:cid', cartsController.deleteCartById)
router.get('/:cid/products', cartsController.getAllProductListByCartId)

router.post('/:cid/products', cartsController.addProductToCart)         // Segun Profesor
router.post('/:cid/products/:pid', cartsController.addProductToCartV2)    // segun Tutor
router.delete('/:cid/products/:pid', cartsController.deleteProductToCartById)


//----------* EXPORTS ROUTER *----------//
export default router;