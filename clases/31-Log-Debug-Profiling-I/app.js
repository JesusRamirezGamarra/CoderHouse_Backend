import express from 'express';
import compression from 'compression';

const app = express();
// app.use(compression())

app.get('/', (req, res) =>{
    let string = 'papaconqueso'
    for(let i=0; i<100; i++){
        string+=" papaconqueso";
    }
    res.send(string);
})

// server-sent event stream
app.get('/events', function (req, res) {
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')

// send a ping approx every 2 seconds
    var timer = setInterval(function () {
        res.write('data: ping\n\n')

        // !!! this is the important part
        res.flush()
    }, 2000)

    res.on('close', function () {
        clearInterval(timer)
    })
})


app.listen(8080,()=>console.log('listening on'))

