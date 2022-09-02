let cartDAO

//switch (process.env.DB_ENV) {
switch ('firebase') {    
    case 'json':
        const { default: CartDAOFileSystem } = await import('./FileSystem.js')
        cartDAO = new CartDAOFileSystem('carts')
        console.log('Set FileSystem as Database for Carts!')
        break
    case 'mongodb':
        const { default: CartDAOMongoDB } = await import('./MongoDB.js')
        cartDAO = new CartDAOMongoDB()
        console.log('Set MongoDB as Database for Carts!')
        break
    case 'firebase':
        const { default: CartDAOFirebase } = await import('./Firebase.js')
        cartDAO = new CartDAOFirebase()
        console.log('Set Firebase as Database for Carts!')
        break
    default:
        const { default: CartDAOMemory } = await import('./Memory.js')
        cartDAO = new CartDAOMemory()
        cartDAO.getPopulate('carts')
        console.log('Set Internal Memory as Database for Carts!')
        break
}

export { cartDAO }
