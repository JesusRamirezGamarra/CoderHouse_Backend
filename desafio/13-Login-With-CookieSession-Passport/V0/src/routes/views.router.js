import  { Router } from 'express';
const router = Router();




// router.get('/', validateLogIn,(req, res) => {
//     req.session.contador++;
//     res.redirect('datos');
// });

router.get('/login',(req,res)=>{
    res.render('login');
})

router.get('/register',(req,res)=>{
    res.render('register');
})


router.get('/data',(req,res)=>{
    req.session.contador++;
    if(!req.session.user) return res.redirect('/login');
    // res.render('data',{user:req.session.user});
    res.render('data',{datos:req.session});
})

export default router;