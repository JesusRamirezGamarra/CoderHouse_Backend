import MongoDBContainer from '../../middleware/api/MongoDBContainer.js'

export class CartDAOMongoDB extends MongoDBContainer {
    constructor() {
        super('carts', {
            id: { type: Number, required: true },
            timestamp: {type: Number, required: true },
            products: { type: Array, required: false },
        })
    }
}
// timestamp: {type: Timestamp, required: true },
export default CartDAOMongoDB