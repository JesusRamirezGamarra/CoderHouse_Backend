import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import config from './config/config.js'

//import mongoDb from './mongoDB.js'
import { passportMiddleware, passportSessionHandler } from './middlewares/passport.js'
import { authRouter } from './routers/authRouter.js'
import { usersRouter } from './routers/usersRouter.js'


const app = express()
// const connection = mongoose.connect("mongodb+srv://coderhouse:Mishina2000@coderhouse-cluster-ljrg.qaohzev.mongodb.net/CoderHouse-Login?retryWrites=true&w=majority")

//----------* MONGOOSE CONNECTION *----------//
try {
  await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options, () => {
  console.log(config.mongodb.cnxStr)
  console.log('Mongoose is connected!')
  })
  } catch (error) {
  console.log('Mongoose could not connect.')
}


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(
  session({
    //store: MongoStore.create({ mongoUrl: mongoDb.sessions }),
    store : MongoStore.create({
      // mongoUrl:"mongodb+srv://coderhouse:Mishina2000@coderhouse-cluster-ljrg.qaohzev.mongodb.net/CoderHouse-Login?retryWrites=true&w=majority",
      mongoUrl:config.mongodb.cnxStr,
      ttl:3600
    }),
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 500000,
    },
  })
);
app.use(passportMiddleware)
app.use(passportSessionHandler)



app.use('/api/usuarios', usersRouter)
app.use('/auth', authRouter)


// listen
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`escuchando en puerto ${server.address().port}`)
})






