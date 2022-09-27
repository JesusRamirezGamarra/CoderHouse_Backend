import {Router} from 'express';
import { REPL_MODE_STRICT } from 'repl';
import userService from '../models/User.js';
import { createHash, isValidPassword } from '../utils.js';
import passport from 'passport';

const router = Router();

router.post('/register',passport.authenticate('register',{failureRedirect:'/api/sessions/registerfail'}),async (req,res)=>{
    console.log(req.user)
    res.send({status:"succes",payload:req.user._id})
})
router.get('/registerfail',(req,res)=>{
    console.log("Error grave")
    res.status(500).send({status:"error",error:""})
})
router.post('/login',passport.authenticate('login',{failureRedirect:'/api/sessions/loginfail'}),async(req,res)=>{

    req.session.user = {
        name:req.user.name,
        email:req.user.email,
        id:req.user._id
    }
    res.redirect(307, 'http://localhost:8080/home');
})
router.get('/loginfail',(req,res)=>{
    console.log("Error grave")
    res.status(500).send({status:"error",error:""})
    res.send("Hay un error grave")
})
export default router;