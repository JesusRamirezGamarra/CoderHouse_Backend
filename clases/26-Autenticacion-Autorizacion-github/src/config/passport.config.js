import passport from "passport";
import local from 'passport-local';
import userService from "../models/User.js";
import { createHash, isValidPassword } from "../utils.js";
import GithubStrategy from 'passport-github2';

const LocalStrategy = local.Strategy;

const initializePassport = () =>{
    passport.use('register',new LocalStrategy({passReqToCallback:true,usernameField:"email"},
    async(req,email,password,done)=>{
        try{
            const {name} = req.body;
            if(!name||!email||!password) return done(null,false,{message:"Incomplete values"})
            //¿El usuario ya está en la base de datos?
            const exists = await userService.findOne({email:email});
            if(exists) return done(null,false,{message:"User already exists"})
            //Insertamos en la base
            const newUser = {
                name,
                email,
                password:createHash(password)
            }
            let result = await userService.create(newUser);
            //SI TODO SALIÓ BIEN EN LA ESTRATEGIA
            return done(null,result)
        }catch(error){
            done(error)
        }
    }))

//////////////////////////////////// passport Strategy

    passport.use('login',new LocalStrategy({usernameField:'email'},async(email,password,done)=>{
        if(!email||!password) return done(null,false,{message:"Incomplete values"})
        let user = await userService.findOne({email:email});
        if(!user) return done(null,false,{message:"Incorrect credentials"})
        if(!isValidPassword(user,password)) return done(null,false,{message:"Incorrect password"});
        return done(null,user);
    }))

//////////////////////////////////// github Strategy

    passport.use('github',new GithubStrategy({
        clientID: 'Iv1.7274b30c2adfc92a',
        clientSecret : 'da0428060324dec00bbc08e107d4205ae618538a',
        callbackURL : 'http://localhost:8080/api/sessions/githubcallback'
    },async(accessToken,refreshToken,profile,done)=>{
            console.log('TEST si funciona la estrategia de github')
            console.log(profile);
            //Extraer informacion del profile
            const {name,location,email} = profile._json;
            // existe en la BD ?
            let user = await userService.findOne({email:email});
            if(!user){
                let newUser ={
                    name,
                    email,
                    password:''//, //Algunos creo un Password Temporal
                    // methods:['github']
                }
                let result = await userService.create(newUser);
                return done(null,result); 
            }
            else { // Si encontro al usuario en la BD
                return done(null,user); 
            }
        }
    ))



//////////////////////////////////// serializar


    passport.serializeUser((user,done)=>{
        done(null,user._id)
    })
    passport.deserializeUser(async(id,done)=>{
        let result = await userService.findOne({_id:id})
        return done(null,result);
    })
}

export default initializePassport;