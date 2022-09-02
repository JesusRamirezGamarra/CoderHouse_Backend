import mongoose from "mongoose";

export default class MongoDBContainer{
    constructor(collection,schema){
        mongoose.connect('mongodb://127.0.0.1/mockapi')
        this.model = mongoose.model(collection,schema);
        this.data = []
    }

    getAll = async() =>{
        // console.log('getAll')
        let results = await this.model.find({});
        // console.log(results);
        return results;
    }
    save = async(document) =>{
        // console.log('results')
        let results = await this.model.create(document);
        return results;
    }
    
}