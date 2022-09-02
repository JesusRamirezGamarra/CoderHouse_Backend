import FirebaseContainer from '../../middleware/api/FirebaseContainer.js'

export class CartDAOFirebase extends FirebaseContainer {
    constructor() {
        super('carts')
    }
}
export default CartDAOFirebase
