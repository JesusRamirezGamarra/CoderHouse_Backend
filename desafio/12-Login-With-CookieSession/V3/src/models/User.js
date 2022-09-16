import mongoose from 'mongoose';

const collection = "users";

const usersSchema = new mongoose.Schema({
    id:Number,
    users:[]
})

const userService =  mongoose.model(collection,usersSchema);
export default userService;