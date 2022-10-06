import { Router } from "express";
import { fork } from 'child_process'
import {__dirname} from '../utils.js';

const scriptPath = __dirname +  '/utils/operacion.js';

const router = Router();

router.get('/', (req, res) => {
    const cant = req.query.cant || ( 100 * 1000 * 1000 ) // 100000000

    const computo  = fork(scriptPath)
    computo.send(cant)

    computo.on('message', (resultado) => {
        res.json({
            result: resultado
        })
    })
})


export default router;
