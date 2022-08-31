import mongoose from "mongoose";
import MongoDBContainer from "./MongoDBContainer.js";
import faker from 'faker';


const collection ='users';
const usersSchema = mongoose.Schema({
    name: String,
    lastName: String,
    color: String,
    phone: String,
    email: String,
    music: String
})
export default class Users extends MongoDBContainer{
    constructor(){
        super(collection,usersSchema);
    }

    populate = async(quantity=2) => {
        for(let i=0; i<quantity; i++){
            this.data.push({
                    name: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    color: faker.vehicle.color(),
                    phone: faker.phone.phoneNumber('11-####-####'),
                    email: faker.internet.email(),           
                    music : faker.music.genre(),
                })
        }
        console.log(this.data);
        //await this.model.drop();
        this.model.deleteMany();
        //let results = await this.model.insertMany(this.data)
        // res.send({status:"success",payload:results})
        return true;
    }




}