import  { Router } from 'express';

const router = Router();

router.get('/',(req,res)=>{
    console.log({method: req.url})
    res.render('register');
})
router.get('/login',(req,res)=>{
    console.log({method: req.url})
    res.render('login')
})
router.get('/current',(req,res)=>{
    console.log({method: req.url})
    if(!req.session.user) return res.redirect('/login')
    res.render('data',{user:req.session.user})
})
router.get('/logout',(req,res)=>{
    console.log({method: req.url})
    if(!req.session.user) return res.redirect('/login')
    let user = req.session.user.name
    req.session.destroy()
    res.render('logout',{user})
})
export default router;