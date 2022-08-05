import { Router } from 'express';
import { ProductManager } from "../managers/productManager.js";
import { uploader } from '../utils.js';

const router = Router();

const productService = new ProductManager();

// GET ALL
router.get('/', async(req, res)=>{
    let productsFile = await productService.getAll();
    let category = req.query.category;
    if(category){
        let productsByCategory = productsFile.filter(prod => prod.category === category);
        if(productsByCategory.length === 0){
            return res.status(400).send(`La categoria ${category} no existe.`);
        }
        return res.status(200).send(productsByCategory);
    }
    res.status(200).send(productsFile);
})

// GET BY ID
router.get('/:idProduct', async(req,res) => {
    let id = req.params.idProduct;
    let productFound = await productService.getById(id);
    if (!productFound) return res.status(400).send({error:`No se ha podido encontrar el producto con id ${id}`})
    res.status(200).send({"Product found": productFound});
})

// POST
router.post('/', uploader.single('filePost'), async(req, res)=>{
    let newProduct = req.body;
    newProduct.image = req.file.filename;
    console.log(newProduct)
    if (!req.file) return res.status(500).send({error:'No se pudo cargar el archivo.'})
    if (!newProduct.title || !newProduct.price) return res.status(400).send({error: "Por favor, completar todos los campos."});
    let productAdded = await productService.addProduct(newProduct);
    res.status(200).send(productAdded);
})

// PUT
router.put('/:idProduct', uploader.single('filePut'), async(req, res)=>{
    let id = req.params.idProduct;
    let newProduct = req.body;
    newProduct.image = req.file.filename;
    let oldProduct = await productService.getById(id);
    if(!oldProduct) return res.status(400).send({error: `No se ha podido encontrar el producto con id ${id}`})
    let productReplaced = await productService.addProduct(newProduct, oldProduct);
    res.status(200).send({"Message": productReplaced});
})

// DELETE BY ID
router.delete('/:idProduct', async(req, res)=>{
    let id = req.params.idProduct;
    let newProductsFile = await productService.deleteById(id);
    if(!newProductsFile) return res.status(400).send({error: `No se ha podido eliminar el producto con id ${id}`})
    res.status(200).send(newProductsFile);
})

export default router;