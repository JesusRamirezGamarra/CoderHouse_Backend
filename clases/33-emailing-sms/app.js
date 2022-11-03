
import express from "express";
import nodemailer from "nodemailer";
import twilio from "twilio";

const app = express();
const server = app.listen(8080,()=>{
    console.log('Listening....')
})



const transporter = nodemailer.createTransport({
    //host: 'smtp.ethereal.email',
    service:'gmail',
    port: 587,
    auth: {
        user: 'luciojesusramirezgamarra@gmail.com',
        pass: 'dayevbefbvoonfrf'
    }
});

const client = twilio('AC389f5ef1ebfae5e4997a3ae9513fab16','1c10dc517e925d7f7980a2c08038bb7f')


app.get('/mail',async(req,res)=>{
    let result = await transporter.sendMail({
        from:'yo',
        to:'luciojesusramirezgamarra@gmail.com,lramire2@tulane.edu',
        subject:'TEST',
        html:`
                <div><h1>Correo de prueba Con Imagen</h1></div>
                <img src="cid:Password-GUID.png" >
        `,
        attachments:[
            {
                filename:'Password.png',
                path:'./src/img/Adjunto01.png',
                cid:'Password-GUID.png'
            },
            {
                filename:'Password02.png',
                path:'./src/img/Adjunto01.png'
            }        
            ]
        })
    console.log(result)
    res.send('email send')
})


app.get('/sms',async (req,res)=>{
    try{
    let result = await client.messages.create({
            from:'+17432025424',
            to:'+51978111558',
            body:'test de prueba'
        })
    }
    catch(e)
    {
        console.log(e)
        res.send('sms send')
    }
    res.send('sms send')
})

app.get('/whatsapp',async(req,res)=>{
    try{
        let result = await client.messages.create({
            from:'whatsapp:+14155238886',
            to:'whatsapp:+51978111558',
            body:'Este es un mensaje CODER , cuidado',
            mediaUrl:['https://estaticos-cdn.elperiodico.com/clip/04f179ae-aa89-4c3a-b00b-10d171fb1fe2_alta-libre-aspect-ratio_default_0.jpg']
        })
    }
    catch (e)
    {
        console.log(e)
        res.send('whatsapp send')
    }
    res.send('whatsapp send')
})