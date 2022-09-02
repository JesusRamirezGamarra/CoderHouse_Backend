import FileSystemContainer from '../../middleware/api/FileSystemContainer.js'

export class ProductDAOFileSystem extends FileSystemContainer {
    constructor(fileName) {
        super(fileName)
    }
}

export default ProductDAOFileSystem
