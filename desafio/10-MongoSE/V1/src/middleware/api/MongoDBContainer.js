//----------* IMPORTS *----------//
import mongoose from 'mongoose'
import config from '../../config.js'

//----------* MONGOOSE CONNECTION *----------//
try {
    await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options, () =>
    console.log('Mongoose is connected!',)
    )
    } catch (error) {
    console.log('Mongoose could not connect.')
}


const dbConnection = mongoose.connection
dbConnection.on('error', (error) => console.log(`Connection error: ${error}`))
dbConnection.once('open', () => console.log('Connected to DB!'))

//----------* MONGODB-CONTAINER CLASS *----------//
export class MongoDBContainer {
    constructor(collectionName, schema) {
    this.collection = mongoose.model(collectionName, schema)
    }

    getById = async (id) => {
        try {
            const itemFound = await this.collection.findOne({ id: Number(id) },{_id:0})
            return itemFound
        } catch (error) {
            console.warn({class:`class MongoDBContainer`, method:`getById= async(id)`,description:error})
            throw new Error(error);
        }
    }


    getAll = async () =>{
        try {
            const allItems = await this.collection.find({})
            return allItems
        } catch (error) {
            console.warn({class:`class MongoDBContainer`, method:`getAll= async()`,description:error})
            throw new Error(error);
        }
    }



    addItem = async (object)=> {
        try {
            await this.collection.create(object)
        } catch (error) {
            console.warn({class:`class MongoDBContainer`, method:`addItem= async(object)`,description:error})
            throw new Error(error);
        }
    }

    updateById = async ({id ,...object}) => {
        try {
            await this.collection.updateOne(
            {
                id: id,
            },
            { $set: object }
            )
        } catch (error) {
            console.warn({class:`class MongoDBContainer`, method:`updateById= async(object) `,description:error})
            throw new Error(error);
        }
    }

    deleteById = async (id) => {
    try {
        const itemFound = await this.collection.find({ id: Number(id) })

        if (itemFound && itemFound.length) {
        await this.collection.deleteOne({
            id: id,
        })
        return true
        } else {
            return false
        }
    } catch (error) {
        console.warn({class:`class MongoDBContainer`, method:`deleteById= async(idNumber)`,description:error})
        throw new Error(error);
    }
    }

    deleteAll = async () => {
    try {
        await this.collection.deleteMany({})
    } catch (error) {
        console.warn({class:`class MongoDBContainer`, method:`deleteAll= async()`,description:error})
        throw new Error(error);
    }
    }

    // async addItemInto(containerId, object) {
    // try {
    //     await this.collection.updateOne({ id: containerId }, { $push: { productos: object[0] } })
    // } catch (error) {
    //     throw new Error(`Error adding item into: ${error}`)
    // }
    // }

    // async removeItemFrom(containerId, objectId) {
    // try {
    //     await this.collection.updateOne(
    //     { id: containerId },
    //     {
    //         $pull: {
    //         productos: { id: objectId },
    //         },
    //     }
    //     )
    // } catch (error) {
    //     throw new Error(`Error removing item from: ${error}`)
    // }
    // }

    // async emptyContainer(containerId) {
    //     try {
    //         await this.collection.updateOne(
    //         { id: containerId },
    //         {
    //             $pullAll: {
    //             productos: [{}],
    //             },
    //         }
    //         )
    //     } catch (error) {
    //         throw new Error(`Error removing all items from: ${error}`)
    //     }
    // }
}

//----------* EXPORTS CLASS *----------//
export default MongoDBContainer
