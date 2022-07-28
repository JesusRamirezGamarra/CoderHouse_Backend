let username;
const chatBox = document.getElementById('chatBox');
const socket = io({
    autoConnect:false
});

Swal.fire({
    title:"Identifícate",
    input:"text",
    text:"Ingresa el usuario con el que te identificarás en el chat",
    inputValidator: (value) =>{
        return !value && "Necesitas identificarte para poder continuar >:("
    },
    allowOutsideClick:false,
    allowEscapeKey:false
}).then(result=>{
    username = result.value;
    socket.connect();
})

/*Listeners */
chatBox.addEventListener('keyup',evt=>{
    if(evt.key==="Enter"){
        if(chatBox.value.trim().length>0){
            socket.emit('message',{user:username,message:chatBox.value})
            chatBox.value="";
        }
    }
})

/*Listeners */

socket.on('log',data=>{
    let log = document.getElementById('log');
    let messages = "";
    data.forEach(message=>{
        messages = messages+`${message.user} dice: ${message.message}</br>`
    })
    log.innerHTML = messages;
})


socket.on('newUser',data=>{
    // console.log(data)
    if(username){
        Swal.fire({
            text:"Nuevo Usuario en el chat",
            toast:true,
            position:"top-right",
            timer:3000
        })
    }
})
