import express from 'express';
import usersRouter from './routes/users.router.js'

const app = express()
const PORT = 8082
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

app.use('/api/users',usersRouter);


// app.get('/', (req,res) => {
//     res.json('Hola Yarn')
// })