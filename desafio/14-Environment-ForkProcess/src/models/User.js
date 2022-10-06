import mongoose from 'mongoose';

const collection = "Users";

const usersSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: false
    },    
    username: {
        type: String, 
        required: true, 
        unique: true
    },
    password:{ 
        type: String, 
        required: true
    }
    // name:String,
    // email:String,
    // password:String
})

const userService =  mongoose.model(collection,usersSchema);
export default userService;