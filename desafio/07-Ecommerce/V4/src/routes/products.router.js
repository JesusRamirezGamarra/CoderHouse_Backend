//----------* Imports'S *----------//
import {Router} from 'express'
const router = new Router()
import {productsController} from '../controllers/products.contoller.js'


router.get('/:pid?', async (req,res)=>{
        if(req.params.pid != undefined) {
            productsController.getProductById(req,res)
        }else{
            productsController.getAllProductList(req,res)
        }
})

router.post('/', async (req,res)=>{
    if( req.body.isAdmin ==='true'){
        productsController.addNewProduct(req,res)
    }
    else{
        console.warn({method:`router.post('/', async (req,res)`,description: 'Unauthorized'})
        // {error : -1, descripcion: ruta 'x' método 'y' no autorizada }
        res.status(401).json({error : -1, descripcion: `Route '${req.originalUrl}' method '${req.method}' not autorized.`})
        //res.status(401).json({class: `productsRouter`,description: `User not Access, please login as admin`})
    }
})
router.put('/:pid', async (req,res)=>{
    if( req.body.isAdmin ==='true'){
        productsController.updatetProductById(req,res)
    }
    else{
        console.warn({method:`router.post('/', async (req,res)`,description: 'Unauthorized'})
        res.status(401).json({error : -1, descripcion: `Route '${req.originalUrl}' method '${req.method}' not autorized.`})
        // res.status(401).json({class:`productsRouter`,description: `User not Access, please login as admin`})
    }
})

router.delete('/:pid',async(req,res)=>{
    if( req.body.isAdmin ==='true'){
        productsController.deleteProductById(req,res)
    }
    else{
        console.warn({method:`router.delete('/', async (req,res)`,description: 'Unauthorized'})
        res.status(401).json({error : -1, descripcion: `Route '${req.originalUrl}' method '${req.method}' not autorized.`})
        // res.status(401).json({class:`productsRouter`,description: `User not Access, please login as admin`})
    }
})

//----------* EXPORTS ROUTER *----------//
export default router;
