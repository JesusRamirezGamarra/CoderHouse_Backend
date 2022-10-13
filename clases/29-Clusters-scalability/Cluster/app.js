import express from 'express';
import os from 'os';
import cluster from 'cluster';

const CPUs = os.cpus().length
// console.log('CPU : ',CPUs)


const app = express()
if(cluster.isPrimary){
    console.log(`Primary process with ${process.pid} is running `);
    
    for(let i=0;i<CPUs;i++){
        cluster.fork();

    }
    cluster.on('exit',worker=>{
        console.log(`Exit El proceso wordkler con pid ${worker.process.pid}`)
        //cluster.fork(); // reintegra un worker en reemplazo del que se elimina  taskkill /pid -f
    })
    
}
else{
    
    app.listen(8080,()=>{})
    console.log(`worker process with ${process.pid} started`)
}

////////////////////////////////////////////////////////////////////////////////////////////

app.get('/',(req,res)=>{
    res.send(`El proceso con id ${process.pid} atendio esta consulta`)
})

app.get('/suma',(req,res)=>{
    let suma =0;
    for (let i = 0; i < 5e9;i++  )
    {
        suma+=i;
    }
    res.send(`suma entregada : ${suma} ;El proceso con id ${process.pid} atendio esta consulta`)
})
