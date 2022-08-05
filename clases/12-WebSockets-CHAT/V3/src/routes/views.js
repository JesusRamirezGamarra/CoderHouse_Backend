import { Router } from 'express';
import { ProductManager } from '../managers/productManager.js';
import { ChatManager } from '../managers/chatManager.js';

const router = Router();

const productService = new ProductManager();
const chatService = new ChatManager();

router.get('/', async(req, res) => {
    let products = await productService.getAll();
    let messages = await chatService.getAll();
    res.render('home', {
        hasProducts: products.length > 0,
        products,
        messages
    });
})

export default router;