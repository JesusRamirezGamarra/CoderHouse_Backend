import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 8080;
const server =  app.listen(PORT,()=>{
    console.log("Hello Cookies");
    console.log(`Server running on: http://localhost:${server.address().port}/`);
});
server.on('error', error => console.log(`Error en servidor: ${error}`))

app.use(cookieParser('secret_cadenaParaCifrarContenidoCookie'))
//app.use(cookieParser());
app.use(express.json());
app.use(express.text());


app.get('/',(req,res)=>{
    res.status(200).send('CookieFantastico :)')
    //res.send('CookieFantastico :)')
})
//////////////////////////////////////////////////////////////////// Basic
app.get('/cookie',(req,res)=>{
    //res.cookie('cookie_Basica',1).send('cookie SET')
    //res.cookie('cookie_Basica','Francisco').send('cookie SET')
    res.cookie('cookie_Basica',{a:1,c:2}).send('cookie SET')
})
app.get('/cookie_setJSON', (req, res) => {
    // res.cookie('json', { tipo: 'cookie', nombre: 'cuqui' })
    // res.send('Set Json Cookie')
    res.cookie('cookie_Json', 
                { tipo: 'cookie', nombre: 'cuqui' }
            ).send('Set Json Cookie')    
})

//////////////////////////////////////////////////////////////////// Expire
app.get('/cookie_TimeOut',(req,res)=>{
    res.cookie('cookie_TimeOut',
                { tipo: 'cookie', nombre: 'cuqui' },
                {maxAge:10 * 1000}
            ).send("Cookie TimeOut")
})
//////////////////////////////////////////////////////////////////// Print Cookie
app.get('/cookie_Send',(req,res)=>{
    res.send(req.cookies);
})
//////////////////////////////////////////////////////////////////// Clear
app.get('/cookie_Logout',(req,res)=>{
    res.clearCookie('cookie_TimeOut').send('Logged out')
})
//////////////////////////////////////////////////////////////////// signed
app.get('/cookie_Secret',(req,res)=>{
    res.cookie('superCookieBlindada',
                {nombre:"mauricio",email:"correo@correo.com"},
                {signed:true}
            ).send("Cookie blindada seteada con poder :)")
})

app.get('/cookie_SAFE',(req,res)=>{
    // res.send(req.cookies); NO mostrara las cookies signed
    res.send(req.signedCookies);
})

app.get('/cookie_NotSigned_AND_Signed', (req, res) => {
    res.json({ notSigned: req.cookies, signed: req.signedCookies })
})

//////////////////////////////////////////////////////////////////// Name
app.get('/cookie/:nombre', (req, res) => {
    const cookieName = req.params.nombre
    const jsonCookie = req.cookies[cookieName]
    res.json(jsonCookie)
})



////////////////////////////////////////////////////////////////////

app.post('/cookie_setCookie_Postman',(req,res)=>{
    const {name,value,expiresAtInSeconds} = req.body;
    console.log({name:name,value:value,expiresAtInSeconds:expiresAtInSeconds})
    res.cookie(name,value,{
        maxAge: expiresAtInSeconds?expiresAtInSeconds*1000:0
    }).send("Aquí está tu cookie personalizada brother :)")
})
app.get('/cookie_Logout_Postman/:name',(req,res)=>{
    const {name} = req.params;
    console.log({params:req.params})
    if(!name) return res.send("Name not found")

    res.clearCookie(name).send("Byebyebye")
})

app.get('/clr', (req, res) => {
    console.log({cookies:req.cookies})
    for (const cookieName of Object.keys(req.cookies)) {
        res.clearCookie(cookieName)
    }
    for (const signedCookieName of Object.keys(req.signedCookies)) {
        res.clearCookie(signedCookieName)
    }
    res.send('Clear Cookies')
})