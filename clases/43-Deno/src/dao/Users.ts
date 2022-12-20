import userModel from './models/User.ts';

export default class User {
    getUsers=() =>{
        return usersModel.find();
    }

    saveUser = (User:any)=> {
        return userModel.create(user);
    }
}