const util = require('util');

const sleep = util.promisify(setTimeout) // convierte el callback de un SetTimeOut en forma de Promesa
// setTimeOut(function(){
// })

module.exports = {
    async taskOne(){
        await sleep(400)
        return 'ONE VALUE'
    },
    async taskTwo(){
        await sleep(200)
        return 'TWO VALUE'
    },
    async taskThree(){
        throw new Error('Some Problem')
        await sleep(2000)
        return 'THREE VALUE'
    },
    async taskFour(){
        try
        {
            await sleep(300)
            throw new Error('Some Problem')            
            return 'FOUR VALUE'
        }
        catch(err){
            console.log(err)
            return 'FOUR VALUE but WITH ERROR'
        }
    }

}