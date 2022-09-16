import mongoose from 'mongoose';
//import mongoDb from '../mongoDB.js'

//await mongoose.connect(mongoDb.users);
//await mongoose.connect(mongoDb.users);
await mongoose.connect("mongodb+srv://coderhouse:Mishina2000@coderhouse-cluster-ljrg.qaohzev.mongodb.net/CoderHouse-Login?retryWrites=true&w=majority");

const db = mongoose.model('users', {
    id: Number,
    username: String,
    password: String
  });


export const getAll = async () => {
  const data = await db.find({}, { _id: 0, __v: 0 });
  return data
}

export const saveUser = async (user) => {
  await db.create(user);
}

export const getById= async (i) => {
  const user = await db.findOne({ id: i }, { _id: 0, __v: 0 });
  if (!user) throw new Error('no existe un usuario con ese id')
  return user
}

export const getByName = async (userName) => {
  const user = await db.findOne({username: userName}, { _id: 0, __v: 0 })
  if(!user) throw new Error('no existe un usuario con ese nombre')
  return user
}

export const checkUsernameAvailability = async (userName) => {
  const user = await db.findOne({username: userName}, { _id: 0, __v: 0 })
  if (user) throw new Error('el nombre de usuario no está disponible')
}