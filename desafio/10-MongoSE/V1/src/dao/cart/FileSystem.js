import FileSystemContainer from '../../middleware/api/FileSystemContainer.js'

export class CartDAOFileSystem extends FileSystemContainer {
    constructor(fileName) {
        super(fileName)
    }
}

export default CartDAOFileSystem
