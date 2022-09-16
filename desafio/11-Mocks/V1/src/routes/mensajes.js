import { Router } from 'express';
import {checkBodyMsg, getAllMsg, sendMsg, getAllMsgDesnormalized} from '../controllers/mensajes.js';
const router = Router();

router.get('/', getAllMsg);

router.get('/desnormalized', getAllMsgDesnormalized)

router.post('/', checkBodyMsg, sendMsg);

export default router;
