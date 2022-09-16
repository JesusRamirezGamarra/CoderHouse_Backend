import { Router } from 'express';
import {getAllProducts,getProductById,createProduct,updateProduct,deleteProduct,checkBodyProduct, fakerProducts} from '../controllers/productos.js';

const router = Router();

router.get('/productos-test', fakerProducts);
router.get('/', getAllProducts);
router.get('/:id', getProductById);


router.post('/', checkBodyProduct, createProduct);


router.put('/:id', checkBodyProduct, updateProduct);


router.delete('/:id', deleteProduct);



export default router;
