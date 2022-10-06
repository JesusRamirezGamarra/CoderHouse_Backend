import mongoose from 'mongoose'
import config from '../config/config.js'

// //----------* MONGOOSE CONNECTION *----------//
export const initDb = () => {
    try{

        return mongoose.connect(
            config.mongo.MONGO_URL,
            () =>{
                console.log('Mongoose is connected !')
                }
        )        
    }
    catch(error){
        console.log('Mongoose could not connect.',error)
    }
}
