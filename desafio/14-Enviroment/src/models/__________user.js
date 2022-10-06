import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
    username: {
      type: String, 
      required: true, 
      unique: true
    },
    password:{ 
      type: String, 
      required: true
    }
})

UserSchema.pre('save', async function (next) {
    console.log('UserSchema.pre(save ...')
    const user = this;
    const hash = await bcrypt.hash(user.password, 10);
    this.password = hash;
    // console.log('user : ',user)
    // console.log('password',password)
    next();
  });
UserSchema.methods.isValidPassword = async function (password) {
    const user = this;
    console.log('password :', password)
    const hash = await bcrypt.hash(password, 10);
    console.log('hash :', hash)
    const compare = await bcrypt.compare(password, hash);
    //const compare = await bcrypt.compare(password, user.password);
    console.log('compare : ',compare)
    return compare;
  };



export const UserModel = model('user', UserSchema)