// /api/sessions
import {Router} from 'express';
import userService from '../models/User.js';
import { createHash, isValidPassword } from '../utils.js';
import passport from 'passport';
const router = Router();
// const passportOptions = { 
//     badRequestMessage: "falta username / password" 
// };




////////////////////////////////////////////////////////////////////////////
router.post('/register',
            passport.authenticate(
                'register',
                {
                    failureRedirect:'/register-error',
                    // badRequestMessage: "falta username / password",
                    failureMessage: true
                }
            ),
            async (req,res)=>{
                console.log(req.user);
                // console.log({error:err})
                // if (err) {
                //     return next(err);
                // }
                // if (!user) 
                //     return res.render('register-error')
                //res.render('usuarioCreado')                
                res.redirect('/usuarioCreado')    
                // res.send(
                //     {
                //         status:"success",payload:req.user._id
                //     }
                // );
            }
)
// router.get('/registerfail',(req,res)=>{
//     console.log("Something is wrong")
//     res.status(500).send({status:"error",error:""})
// })

////////////////////////////////////////////////////////////////////////////
router.post('/login',
            passport.authenticate(
                'login',
                {
                    failureRedirect: '/login-error', 
                    failureMessage: true
                }
            ),
            async(req,res)=>{
                req.session.user = {
                    username: req.user.username,
                    name:req.user.name,
                    id: req.user._id
                }
                console.log({
                            status:'success',
                            payload:req.session.user
                        })
                // res.send(
                //     {
                //         status:'success',
                //         payload:req.session.user
                //     })
                res.redirect('/datos')                
            }
)
// router.get('/loginfail',(req,res)=>{
//     res.status(500).send({status:"error",error:"Error in login "})
// })



export default router;
