import { Router } from "express";
import { fork } from 'child_process'
import {__dirname} from '../utils.js';
import moment from 'moment'

const scriptPath = __dirname +  '/utils/operacion.js';

const router = Router();

router.get('/', (req, res) => {
    try{
        const cant = req.query.cant || ( 100 * 1000 * 1000 ) // 100000000
        const computo  = fork(scriptPath)
        computo.send(cant)
        computo.on('message', (resultado) => {
            res.json({
                result: resultado
            })
        })
    }
    catch(err){
        logger.error(`${new moment().format('DD/MM/YYYY HH:mm:ss')} || PATH: ${req.path} || METHOD: ${req.method} || ERROR: ${err.message}`);
    }        
})


export default router;
