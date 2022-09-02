//----------* Imports'S *----------//
import {Router} from 'express'
const router = new Router()
import {productsController} from '../controllers/products.contoller.js'
import {adminAuth} from '../middleware/SecurityContainer.js'

//----------* PRODUCT ROUTES *----------//

//----------* ADICCIONAL *----------//
// Delete Product List
router.delete('/', adminAuth, productsController.deleteProductList)

//----------* BASE *----------//
// Get Product List & Get Product by ID
router.get('/:pid?', async (req,res)=>{
        if(req.params.pid != undefined) {
            productsController.getProductById(req,res)
        }else{
            productsController.getAllProductList(req,res)
        }
})

// Add New Product
router.post('/',adminAuth ,productsController.addNewProduct)
// Edit Product by ID
router.put('/:pid',adminAuth ,productsController.updatetProductById)
// Delete Product by ID
router.delete('/:pid',adminAuth,productsController.deleteProductById)


//----------* EXPORTS ROUTER *----------//
export default router;
