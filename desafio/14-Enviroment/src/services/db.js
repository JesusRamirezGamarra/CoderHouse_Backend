import mongoose from 'mongoose'
//import config from '../config/index'
import config from '../config/config.js'

// //----------* MONGOOSE CONNECTION *----------//
export const initDb = () => {
    try{

        return mongoose.connect(
            config.mongodb.cnxStr, 
            config.mongodb.options, 
            () =>{
                console.log('Mongoose is connected!')
                }
  )        
        // return mongoose.connect(
        //     config.mongodb.cnxStr, 
        //     { useNewUrlParser: true }
        // )
    }
    catch(error){
        console.log('Mongoose could not connect.',error)
    }
}


//----------* MONGOOSE CONNECTION *----------//
// try {
//   await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options, () =>
//         console.log('Mongoose is connected!',)
//   )
//   } catch (error) {
//   console.log('Mongoose could not connect.')
// }