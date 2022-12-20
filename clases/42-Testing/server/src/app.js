import express from 'express';
const app = express();

app.get('/',(req,res)=>{
    res.send({status:'success',message:'hola, clientes :)'})
})
const server = app.listen(8080,()=> console.log('listening on 8080'))