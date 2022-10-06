//console.log(process.env.PORT)


// node index.js
// NO existe hasta crear las variables de entorno


import express from 'express';
import config from './config/config.js'
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Listening on PORT : ${PORT}`));