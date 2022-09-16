import { Router } from 'express';
import productsRouter from './productos.js'
import mensajesRouter from './mensajes.js';

const router = Router();

router.use('/productos', productsRouter);
router.use('/mensajes', mensajesRouter);

export default router;
