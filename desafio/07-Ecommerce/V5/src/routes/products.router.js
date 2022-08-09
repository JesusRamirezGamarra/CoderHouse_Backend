//----------* Imports'S *----------//
import {Router} from 'express'
const router = new Router()
import {productsController} from '../controllers/products.contoller.js'
import {adminAuth} from '../middleware/SecurityManager.js'


router.get('/:pid?', async (req,res)=>{
        if(req.params.pid != undefined) {
            productsController.getProductById(req,res)
        }else{
            productsController.getAllProductList(req,res)
        }
})


router.post('/',adminAuth ,productsController.addNewProduct)
router.put('/:pid',adminAuth ,productsController.updatetProductById)
router.delete('/:pid',adminAuth,productsController.deleteProductById)

//----------* EXPORTS ROUTER *----------//
export default router;
