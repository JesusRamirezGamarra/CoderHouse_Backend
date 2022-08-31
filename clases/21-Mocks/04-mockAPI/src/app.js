import express from 'express';
import userRouter from './routes/users.js'

const app = express()
//////////////////////////////////////////////////////////////////////////////////
////         SERVER ON PORT
//////////////////////////////////////////////////////////////////////////////////
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${server.address().port}/`)
})
server.on('error', (error) => console.error(`Server error: ${error}`))
//////////////////////////////////////////////////////////////////////////////////

app.use('/users',userRouter)