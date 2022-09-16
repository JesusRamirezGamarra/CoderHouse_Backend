import express from 'express';
// import { original, intento1, intento2 } from './aproximacion2.js';
import { original, intento3 } from './aproximacion2.js';

const app = express();

// app.get('/original', original);
// app.get('/intento1', intento1);
// app.get('/intento2', intento2);
app.get('/original', original);
app.get('/intento3', intento3);

app.listen(8080, () => console.log('Ready'));
