import passport from 'passport';
import { Router } from "express";


const router = Router();




const passportOptions = { badRequestMessage: "falta username / password" };

//Middleware
const isLoggedIn = (req, res, next) => {
// console.log('Is Authenticated')
// console.log(req.isAuthenticated())
  if(!req.isAuthenticated()) { 
    res.redirect('/login') 
  }else{
    next();
  }

}

////////////////////////////////////////////////////////////////////////////

/* --------- REGISTER ---------- */
router.get('/signup', (req, res) => {
  res.render('register');
});
//SIGN UP
router.post('/signup', 
      (req, res, next) => {
          passport.authenticate('signup',
          passportOptions, 
          (err, user, info) => {
              console.log('Info SIGNUP');
              console.log(err, user, info);
              if (err) {
                return next(err);
              }
              if (!user) return res.render('register-error')
              res.render('usuarioCreado')
          })(req, res, next);
      }
);

////////////////////////////////////////////////////////////////////////////


/* --------- LOGIN ---------- */
router.get('/login', (req, res) => {
  res.render('login')
})
/* --------- LOGIN-Error---------- */
router.get('/login-error', (req, res) => {
  console.log(`router.get('/login-error'`);
  res.render('login-error')
});
//LOGIN
router.post('/login',
            passport.authenticate('login',{
              failureRedirect: '/login-error', 
              failureMessage: true
            }),
            async(req, res) => {
              console.log('antes de redirect a /datos')
              res.redirect('/datos')
            },
)
////////////////////////////////////////////////////////////////////////////
/* --------- DATOS ---------- */
router.get('/datos', isLoggedIn, async(req, res,) => {
  const datos = req.user
  const nombre = datos.username
  res.render('datos', {nombre})
})

//GET
router.get("/",(req, res) => {
 res.redirect('/datos')
});

/* --------- LOGOUT ---------- */
router.get('/logout', (req, res) => {
  const datos = req.user
  const nombre = datos.username
  res.render('logout',{nombre})
  req.session.destroy()
});
////////////////////////////////////////////////////////////////////////////

export default router;
