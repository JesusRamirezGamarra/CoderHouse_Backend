// const fs = require('fs');
// const { v4: uuidv4 } = require('uuid');
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { normalize, schema } from 'normalizr';
import {__dirname,___dirname} from '../utils.js';
// import * as moment from 'moment';
import moment from 'moment'

// const author = new schema.Entity(
//     'author', 
//     {},
//     { idAttribute: 'email' }
// );

// const textMessage = new schema.Entity(
//     'textMessage',
//     {
//         author: author
//     },
//     {
//         idAtributes: 'dateMessage'
//     }
// );

// const msge = new schema.Entity(
//     'message',
//     {
//         author: author,
//         textMessage : [textMessage]
//     },
//     { idAttribute: '_id' }
// );
// const msgesSchema = new schema.Array(msge);


const author = new schema.Entity('authors',
    {},
    {
        idAttribute: 'email'
    }
)

const chat = new schema.Entity('chats',
    {
        author:author
    },
    {        
    }
)
const msgesSchema = new schema.Entity('chatGroup',{
    author:author,
    chats:[chat]
})


//Esto solo va a funcionar si el archivo ya existe
class Mensajes {
    constructor(nombreArchivo) {
        this.archivo = nombreArchivo;
    }

    async getData() {
        const data = await fs.promises.readFile(this.archivo, 'utf-8'); //data = '[]'
        return JSON.parse(data);
    }

    async saveData(data) {
        await fs.promises.writeFile(this.archivo, JSON.stringify(data, null, '\t'));
    }

    //GET
    async get() {
        try
        {
            // console.log('async get() {')
            const data = await this.getData();
            let normalizedMessages = normalize(data, msgesSchema);
            console.log(JSON.stringify(normalizedMessages,null,'\t'));
            return normalizedMessages;
        }
        catch(error){
            console.log(error)
            return null
        }
    }
    async getDesnormalized() {
        const data = await this.getData();
        return data;
    }
    //POST
    async post(miObjeto) {
        try{
            const data = await this.getData();
            // console.log(data);
            // console.log(miObjeto);

            const mensajeNuevo = {
                _id: uuidv4(),
                author: {
                    email: miObjeto.email,
                    name: miObjeto.name,
                    surname: miObjeto.surname,
                    age: miObjeto.age,
                    alias: miObjeto.alias,
                    avatar: miObjeto.avatar,
                },
                message : miObjeto.message,
                dateMessage : moment().format('DD/MM/YYYY h:mm:ss a'),
            }

            data.push(mensajeNuevo);
            await this.saveData(data);
        }
        catch(error){
            console.log(error)
            return null
        }
    }
}

// const MensajesController = new Mensajes('mensajes.json');

// module.exports = {
//     MensajesController: MensajesController,
// };

const oMensajesController = new Mensajes(__dirname + '/db/mensajes.json');
// console.log(oMensajesController.archivo)

export const MensajesController = {
        MensajesController: oMensajesController,
    };

export default oMensajesController