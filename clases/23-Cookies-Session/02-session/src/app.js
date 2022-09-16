import express from 'express';
import session from 'express-session';

const app = express();
const PORT = process.env.PORT || 8080;
const server =  app.listen(PORT,()=>{
    console.log("Hello session");
    console.log(`Server running on: http://localhost:${server.address().port}/`);
});

app.use(session({ 
    secret : 'secret_cadenaParaCifrarContenidoCookie',
    resave: true,
    saveUninitialized: true
    }))
//app.use(cookieParser());
app.use(express.json());
app.use(express.text());

//////////////////////////////////////////////////////////////////// counter
app.get('/counter',(req,res)=>{
    if(req.session.counter){
        req.session.counter++;
        res.send(`¡Hola de nuevo! visitaste esto ${req.session.counter} veces`)
    }else{
        req.session.counter=1;
        res.send("Bienvenido :)")
    }
})
//////////////////////////////////////////////////////////////////// middleware
function auth(req, res, next) {
    if (req.session?.user === 'JesusRamirez' && req.session?.admin) {
        return next()
    }
    return res.status(401).send('error de autorización!')
}  
//////////////////////////////////////////////////////////////////// login
app.post('/login',(req,res)=>{
    const {email,password} = req.body;
    if(email==="correo@correo.com"&&password==="123"){
        req.session.user={
            email,
            role:"user"
        }
        return res.send("Logged in :)")
    }
    else{
        res.send("Incorrect credentials")
    }
})
//////////////////////////////////////////////////////////////////// privado
app.get('/privado', auth, (req, res) => {
    res.send('si estas viendo esto es porque ya te logueaste!')
})

//////////////////////////////////////////////////////////////////// current
app.get('/current',(req,res)=>{
    if(req.session.user){//Sí pasó por el login :) 
        res.send(req.session.user);
    }else{//No podemos dejarlo avanzar porque no se ha logueado
        res.send("Please login first")
    }
})
//////////////////////////////////////////////////////////////////// logout
app.get('/logout',(req,res)=>{
    req.session.destroy(err=>{
        if(err) return res.send("Couldn't log out try again");
        else return res.send("Logged out :)");
    })
})