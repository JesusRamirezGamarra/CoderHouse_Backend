import { Router } from 'express';

const router = Router();

let usuarios = [
  { nombre: 'user'},
];

const validateLogIn = (req, res, next) => {
  if (req.session.info && req.session.info.loggedIn) next();
  else res.redirect('login');
};

router.get('/', validateLogIn,(req, res) => {
    req.session.contador++;
    res.redirect('datos');
});

/* --------- LOGIN ---------- */
router.get('/login', (req, res) => {
  res.render('login')
});

/* --------- REGISTER ---------- */
router.get('/register', (req, res) => {
  res.render('register');
});

/* --------- DATOS ---------- */
router.get('/datos', validateLogIn, (req, res) => {
  req.session.contador++;
  const datos = req.session
  res.render('datos', {datos});
  
});
///////////////////////////////////////////////////////////////
/* --------- LOGIN ---------- */
router.post('/login', (req, res) => {
  let { nombre} = req.body;

  const index = usuarios.findIndex((aUser) => aUser.nombre === nombre); 
    
  if(index < 0)
  res.render('register', {});
  else {
    req.session.nombre = nombre;
    req.session.contador = 0;
    req.session.info= {loggedIn:true}
    res.redirect('/datos');
  }
});

/*-----------------REGISTER----------------- */
router.post('/register', (req, res) => {
  let { nombre } = req.body;
  let encontrado = usuarios.filter((usuario) => usuario.nombre == nombre).length;
  if (!encontrado) {
    usuarios.push(req.body);
    req.session.nombre = nombre;
    req.session.contador = 0;
    res.redirect('/datos');
  } else {
    res.render('register-error', {});
  }
});

/* --------- LOGOUT ---------- */
router.get('/logout', (req, res) => {
  const datos = req.session
  res.render('logout',{datos})
  req.session.destroy()
});


export default router;
