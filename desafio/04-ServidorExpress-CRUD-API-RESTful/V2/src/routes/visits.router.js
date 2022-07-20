
import {Router} from 'express';

const router = Router();

import {Contenedor} from '../middleware/api/VisitsCounterFileManager.js';
// const contenedor = new Contenedor(__dirname + '/database/files/visitsCounter.json');
const contenedor = new Contenedor('visitsCounter.json');

router.get('/count',async (req, res) => {
 
    res.send(await contenedor.getAll());
    // res.send({ error: "progressCount.router" })
})

export default router;