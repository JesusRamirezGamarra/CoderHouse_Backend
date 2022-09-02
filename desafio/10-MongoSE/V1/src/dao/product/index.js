let productDAO

// switch (process.env.DB_ENV) {
switch ('firebase') {    
    case 'json':
        const { default: ProductDAOFileSystem } = await import('./FileSystem.js')
        productDAO = new ProductDAOFileSystem('products')
        console.log('Set FileSystem as Database for Products!')
        break
    case 'mongodb':
        const { default: ProductDAOMongoDB } = await import('./MongoDB.js')
        productDAO = new ProductDAOMongoDB()
        console.log('Set MongoDB as Database for Products!')
    break
    case 'firebase':
        const { default: ProductDAOFirebase } = await import('./Firebase.js')
        productDAO = new ProductDAOFirebase()
        console.log('Set Firebase as Database for Products!')
    break
    default:
        const { default: ProductDAOMemory } = await import('./Memory.js')
        productDAO = new ProductDAOMemory()
        productDAO.getPopulate('products')
        console.log('Set Internal Memory as Database for Products!')
    break
}

export { productDAO }
