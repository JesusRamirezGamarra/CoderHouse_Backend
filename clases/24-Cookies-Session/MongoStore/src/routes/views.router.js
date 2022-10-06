import  { Router } from 'express';

const router = Router();

router.get('/',(req,res)=>{
    res.render('register');
})

router.get('/login',(req,res)=>{
    const email ="Jesus";
    const role = "User";
    req.session.user ={
        email,
        role
    }
    res.send(
        {
            playrole:req.session.user,
            maxAge:req.session.cookie.maxAge,
            Expires: '' + req.session.cookie.expires,
            Cookie : req.session.cookie

        })

})


router.get('/visita',(req,res)=>{
    if(req.session.counter){
        res.send(`visitado ${++req.session.counter} veces`)
    }
    else {
        req.session.counter = 1;
        req.send('Bienvenido')
    }
})

export default router;