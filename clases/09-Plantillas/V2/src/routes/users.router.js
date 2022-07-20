import {Router} from 'express';

const router = Router();
let users = [
    {name:'Juan',age:20},
    {name:'Pedro',age:30},
    {name:'Maria',age:40},
    {name:'Pablo',age:50},
    {name:'Juan',age:60},
    {name:'Pedro',age:70},
    {name:'Maria',age:80},
];

router.get('/', (req,res)=>{
    res.send(users);
})


router.get('/List', (req,res)=>{
    // let users = await usersManager.getAll();
    res.render('users',{
        hasUsers:users.length>0,
        users
    });
})


export default router;
