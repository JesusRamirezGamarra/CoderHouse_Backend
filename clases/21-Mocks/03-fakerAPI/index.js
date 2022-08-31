// const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
// const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
// const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

import express from 'express';
import { faker } from '@faker-js/faker'

const app = express();
faker.locale = 'es';


const between = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const devolverAleatorios = (req, res) => {
    const respuesta = [];

    for(let i =0; i<2; i++){
        respuesta.push({
            nombre: faker.name.firstName(),
            apellido: faker.name.lastName(),
            color: faker.vehicle.color(),
            phone: faker.phone.phoneNumber('11-####-####'),
            email: faker.internet.email(),           
            music : faker.music.genre(),
        })            

    }
    res.json({
        data: respuesta
    });
}

app.get('/test', devolverAleatorios)

//////////////////////////////////////////////////////////////////////////////////
////         SERVER ON PORT
//////////////////////////////////////////////////////////////////////////////////
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${server.address().port}/`)
})
server.on('error', (error) => console.error(`Server error: ${error}`))
//////////////////////////////////////////////////////////////////////////////////