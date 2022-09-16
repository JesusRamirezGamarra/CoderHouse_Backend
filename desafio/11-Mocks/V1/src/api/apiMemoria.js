// const { v4: uuidv4 } = require('uuid');
// const fyh = Date.now()
// const timestamp = new Date(fyh)

import { v4 as uuidv4 } from 'uuid';
const fyh = Date.now()
const timestamp = new Date(fyh)


const contenedorMensajes = []
//Esto solo va a funcionar si el archivo ya existe
class Mensajes {
    
    constructor(nombreArray) {
        this.arrayContenedor = nombreArray;
    }

    //GET
    async get() {
        const mensajes = await this.arrayContenedor;
        return mensajes;
    }

    //POST
    async post(miMensaje) {
        const mensajes = await this.arrayContenedor;
        let id;

        const mensajeNuevo = {
            id: uuidv4(),
            nombre: miMensaje.nombre,
            mensaje: miMensaje.mensaje,
            timestamp: timestamp.toUTCString()
        };

        mensajes.push(mensajeNuevo);
    }
}


// const MensajesController = new Mensajes(contenedorMensajes);

// module.exports = {
//     MensajesController: MensajesController,
// };

const oMensajesController = new Mensajes(contenedorMensajes);

export const MensajesController = {
    MensajesController: MensajesController,
};

export default MensajesController;