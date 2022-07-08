const http = require('http');
const server = http.createServer((request ,response)=>{
    let currentHour = new Date().getHours();
    if(currentHour>= 6 && currentHour<= 12) response.end("Buenos dias");
    if(currentHour>= 13 && currentHour<= 19) response.end("Buenas tardes");
    if(currentHour>= 20 || currentHour<= 5) response.end("Buenas noches");
})

const connectedServer = server.listen(8080,()=>{
    console.log('Listening on PORT 8080 ... Ahora con nodemon');
})


// node desafio.js
// nodemon desafio.js

// Install en el Global Command 
//npm install  -g nodemon