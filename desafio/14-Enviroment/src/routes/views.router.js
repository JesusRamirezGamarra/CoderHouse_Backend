import  { Router } from 'express';

const router = Router();

//Middleware
const isLoggedIn = (req, res, next) => {
    console.log('isLoggedIn')
    if(!req.isAuthenticated())  res.redirect('/login') 
    else    next();    
}


////////////////////////////////////////////////////////////////////////////
/* --------- REGISTER ---------- */
router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/usuarioCreado', (req, res) => {
    res.render('usuarioCreado');
});

/* --------- LOGIN-Error---------- */
router.get('/register-error', (req, res) => {
    res.render('register-error')
});

////////////////////////////////////////////////////////////////////////////

/* --------- LOGIN ---------- */
router.get('/',(req,res)=>{
    res.render('login');
})
router.get('/login',(req,res)=>{
    res.render('login');
})

/* --------- LOGIN-Error---------- */
router.get('/login-error', (req, res) => {
    res.render('login-error')
});

////////////////////////////////////////////////////////////////////////////

router.get('/data',(req,res)=>{
    if(!req.session.user) 
        return res.redirect('/login');
    res.render('data',{user:req.session.user});
})



////////////////////////////////////////////////////////////////////////////

/* --------- DATOS ---------- */
router.get('/datos', isLoggedIn, async(req, res,) => {
    console.log('/datos')
    const datos = req.user
    const nombre = datos.username
    res.render('datos', {nombre})
})
/* --------- LOGOUT ---------- */
router.get('/logout', (req, res) => {
    const datos = req.user
    const nombre = datos.username
    req.session.destroy()
    res.render('logout',{nombre})
    
});

export default router;