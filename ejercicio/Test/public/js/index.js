const socket = io() // apunta a localhost:PORT

socket.on('mi mensaje',data=>{
    console.log(data);
})

const botonSaludar = document.getElementById('botonEnviar')
botonSaludar.addEventListener('click', () => {
    console.log('Cliente')
    socket.emit('NuevoMensaje', 'hola')
})
