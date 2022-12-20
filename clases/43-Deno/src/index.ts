import servidor from 'npm:express';
import mongoose from 'npm:mongoose';
import userRouter from './routes/user.router.ts';

const app = servidor();
// const connection = await mongoose.connect('mongodb+srv://coderhouse:Mishina2000@coderhouse-cluster-ljrg.qaohzev.mongodb.net/CoderHouse-DENO?retryWrites=true&w=majority');
const connection = await mongoose.connect('mongodb://127.0.0.1:27017/deno');

app.use(servidor.json())
app.use('/api/users',userRouter);
app.listen( 8081, () => console.log('Listening on 8080'))
// ----------------------------------------------------------------console.log("hello word")