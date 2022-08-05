const socketChat = io();

let formChat = document.getElementById('form-chat');
let userChat = document.getElementById('user-chat');
let chatBox = document.getElementById('chat-box');
let chatMessage = document.getElementById('chat-message');

let userName;

formChat.addEventListener('submit', (e) => {
    e.preventDefault();
    userName = userChat.value;
    if(chatMessage.value.trim().length>0){
        socketChat.emit('message', {user: userName, message: chatMessage.value, time: moment().format(('DD/MM/YYYY hh:mm:ss'))})
        chatMessage.value= "";
    }
})

socketChat.on('messages', data => {
    let messages = "";
    data.forEach(message => {
        messages += `<div class="message">
                        <span style="color:blue">${message.user}</span>
                        <span style="color:black">&nbsp[</span>
                        <span style="color:red">${message.time}</span>
                        <span style="color:black">]:&nbsp</span>
                        <span style="color:green">${message.message}<span>
                    </div>`
    })
    chatBox.innerHTML = messages;
})
