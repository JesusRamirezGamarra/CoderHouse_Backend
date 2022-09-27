import mongoose from 'mongoose'
//import config from '../config/index'
import config from '../config/config.js'

export const initDb = () => {
    //return mongoose.connect(config.MONGO_ATLAS_URL, { useNewUrlParser: true })
    return mongoose.connect(config.mongodb.cnxStr, { useNewUrlParser: true })
}


// //----------* MONGOOSE CONNECTION *----------//
// try {
//   await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options, () =>
//         console.log('Mongoose is connected!',)
//   )
//   } catch (error) {
//   console.log('Mongoose could not connect.')
// }