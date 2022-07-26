console.log('HOLA')
const socket = io();

const chatbox = document.getElementById('chatbox');
chatbox.addEventListener('keyup',(e)=>{
    // console.log(e.key)
    if(e.key == 'Enter'){
        socket.emit('message',chatbox.value);
        chatbox.value = '';
    }
})

socket.emit('Saludo',{
    user:"Lucio Jesus",
    message:"Hola , cliente se conecta al server"

})


//Listeners
// socket.on('respuesta',data=>{
//     console.log(data);
// })
// socket.on('chat message',data=>{
//     console.log(data);
//     chatbox.value = data;
// })


socket.on('log',data=>{
    console.log(data);
})