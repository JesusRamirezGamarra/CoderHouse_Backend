import { Router } from 'express';
import passport from 'passport';

export const authRouter = new Router();

////////////////////////////////////////////////////////////////////////////////// POST

authRouter.post(
  '/register',
  passport.authenticate('register', {
    failureRedirect: '/auth/failRegister',
    successRedirect: '/auth/successRegister',
  })
);

authRouter.post('/failRegister', (req, res) => {
  res.status(400).json({ err: 'fallo el registro' });
});

authRouter.post('/successRegister', (req, res) => {
  res.json({ msg: 'ok' });
});

authRouter.post(
  '/login',
  passport.authenticate('login', {
    failureRedirect: '/auth/failLogin',
    successRedirect: '/auth/successLogin',
  })
);

////////////////////////////////////////////////////////////////////////////////// GET

authRouter.get('/failLogin', (req, res) => {
  res.status(400).json({ err: 'fallo el login' });
});

authRouter.get('/successLogin', (req, res) => {
  res.json({ msg: 'ok' });
});

authRouter.get('/logout', async (req, res, next) => {
  if (req.isAuthenticated()) {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.sendStatus(200);
    });
  } else {
    res.sendStatus(400);
  }
});
