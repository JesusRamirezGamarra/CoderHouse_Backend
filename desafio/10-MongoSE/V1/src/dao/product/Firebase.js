import FirebaseContainer from '../../middleware/api/FirebaseContainer.js'

class ProductDAOFirebase extends FirebaseContainer {
    constructor() {
        super('products')
    }
}

export default ProductDAOFirebase
