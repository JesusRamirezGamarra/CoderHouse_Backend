
const socket = io({
    autoConnect: false//para que no se autoconecte el socket
})

let userEmail
function chatSocket() {
    if (chatBox.value.trim().length > 0) {
        console.log('entra a enviar chat')
        socket.emit('message', { userEmail: userEmail, message: chatBox.value })
        chatBox.value = ''
    }

}
function chatsHTML(chatList) {
    let str = ''

    for (const chat of chatList) {
        if (chat.userEmail === userEmail) {
            str += `
            <div>
                <span class="u2 chat">
                    <span class="userSay">${chat.userEmail}:</span><br>
                    ${chat.message}<br>
                    <span class="date">${chat.date}</span>
                </span>
        </div>
                `
        } else {
            str += `
                <div>
                <span class="u1 chat">
                    <span class="userSay">${chat.userEmail}:</span><br>
                    ${chat.message}<br>
                    <span class="date">${chat.date}</span>
                </span>
        </div>
            `
        }
    }
    return str
}

Swal.fire({
    title: 'Ingresa tu correo',
    input: 'text',
    text: 'Correo con que te identificarás',
    inputValidator: (value => {
        return !value && 'Ingresa tu direccion de e-mail'
    }),
    allowOutsideClick: false,
    allowEscapeKey: false
}).then(result => {
    userEmail = result.value
    socket.connect()//se autoconecta el socket despues de las validaciones que haga
    header.innerText = userEmail
})

const header = document.getElementById('header')

const chatBox = document.getElementById('chatBox')
chatBox.addEventListener('keyup', (evt) => {
    if (evt.key === 'Enter') {
        chatSocket()
    }
})

const sendButton = document.getElementById('send')
sendButton.addEventListener('click', () => {
    console.log('entra al boton enviar')
    chatSocket()
})

socket.on('log', (data) => {
    const chats = document.getElementById('chats')
    chats.innerText = ''
    chats.innerHTML = chatsHTML(data)
    chats.scrollTop = chats.scrollHeight
})
socket.on('newUser', (data)=>{
    if(userEmail){
        Swal.fire({
            text:'Nuevo ususario en el chat',
            toast:true, 
            position:'top-right',
            timer:1000
        })
    }
})