import { Router } from 'express';
import Users from '../dao/Memory/Users.memory.js';
//import Persistencia from '../dao/index.js'
import Persistencia  from '../dao/index.js';
const router = Router();


const usersService = new Users();
router.get('/ORIGINAL',async(req,res)=>{
    let results = await usersService.getAll();
    res.send(results);
})
router.get('/ORIGINALmock',async(req,res)=>{
    let results = await usersService.populate();
    res.send(results);
})

router.get('/',async(req,res)=>{
    // const usersService = new Persistencia('MEMORY');
    //let results = await (usersService.getPersistencia()).getAll();
    // let results = await Persistencia.getAll();
    // services.usersService  = 'MONGODB'

    // persistence = 'MONGODB'
    // console.log(services.usersService.persistence)
    // let results = await services.usersService.getAll();
    // console.log(results)
    // res.send(results);

    //const usersService = new Persistencia();
    const usersService = new Persistencia();
    let results = await(await usersService.getPersistencia('MONGODB')).getAll() ;  
    console.log(results);
    res.send(results);    
    // let results = await usersService.getPersistencia('MONGODB').getAll()
    // console.log( usersService.getPersistencia())
    // let results = await usersService.getPersistencia().getAll();
    // console.log(results)

})
router.get('/mock',async(req,res)=>{
    const usersService = new Persistencia();
    let results = (await usersService.getPersistencia('MONGODB')).populate() ;  
    res.send(results);    
    // let results = await services.usersService.populate();
    // console.log(results)
    // res.send(results);    
})
export default router;
