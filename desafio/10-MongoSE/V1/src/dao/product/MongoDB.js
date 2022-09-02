import MongoDBContainer from '../../middleware/api/MongoDBContainer.js'

export class ProductDAOMongoDB extends MongoDBContainer {
    constructor() {
        super('products', {
            id: { type: Number, required: true },
            timestamp: {type: Number, required: true },
            name: { type: String, required: true },
            description: { type: String, required: true },
            code: { type: String, required: true },
            thumbnail: { type: String, required: false },
            price: { type: Number, required: true },
            stock: { type: Number, required: true },
        })
    }
}
// timestamp: {type: Timestamp, required: true },

export default ProductDAOMongoDB
