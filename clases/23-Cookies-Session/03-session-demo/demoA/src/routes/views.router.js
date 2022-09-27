import  { Router } from 'express';

const router = Router();

router.get('/',(req,res)=>{
    res.render('register');
})
router.get('/login',(req,res)=>{
    res.render('login')
})
router.get('/home',(req,res)=>{
    if(!req.session.user) return res.redirect('/login')
    res.render('data',{user:req.session.user})
})
router.get('/logout',(req,res)=>{
    if(!req.session.user) return res.redirect('/login')
    let user = req.session.user.name
    req.session.destroy()
    res.render('logout',{user})
})
export default router;