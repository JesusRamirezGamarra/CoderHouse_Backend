import passport from "passport";
import local from 'passport-local';
import userService from "../models/User.js";
import { createHash, isValidPassword } from "../utils.js";
const LocalStrategy = local.Strategy;

const initializePassport = () =>{
    passport.use('register',
        new LocalStrategy(
            {
                usernameField: "username",
                passReqToCallback: true,
            },
        async(req,email,password,done)=>{
            try{
                console.log('passport.use(register')
                const {name} = req.body;
                // console.log(name)
                if(!name||!email||!password) 
                    return done(null,false,{message:"Incomplete values"})
                //¿El usuario ya está en la base de datos?
                const exists = await userService.findOne({username:email});
                console.log({exist:'ok'})
                if(exists) 
                    return done(null,false,{status:"error",message:"User already exists"})
                //Insertamos en la base
                const newUser = {
                    name:name,
                    username:email,
                    password:createHash(password)
                }
                console.log({newUser:newUser})
                let result = await userService.create(newUser);
                console.log({result:result})
                //SI TODO SALIÓ BIEN EN LA ESTRATEGIA
                return done(null,result)
            }catch(error){
                done(error)
            }
        })
    )

    passport.use('login',
        new LocalStrategy(
            {
                usernameField:'username'
            },
            async(email,password,done)=>{
                if(!email||!password) 
                    return done(null,false,{status:"error",message:"Incomplete values"})
                let user = await userService.findOne({username:email});
                if(!user) 
                    return done(null,false,{status:"error",message:"Incorrect credentials"})
                if(!isValidPassword(user,password)) 
                    return done(null,false,{status:"error",message:"Incorrect password"});
                return done(null,user);
            }
        )
    )

    passport.serializeUser((user,done)=>{
        done(null,user._id)
    })
    passport.deserializeUser(async(id,done)=>{
        let result = await userService.findOne({_id:id})
        return done(null,result);
    })
}

export default initializePassport;