//import {promisify} from 'es6-promisify';
//const util = require('util');
// import promisify from 'es6-promisify';


//const sleep = promisify(setTimeout) // convierte el callback de un SetTimeOut en forma de Promesa
// setTimeOut(function(){
// })

const sleep = (ms) => {
    //return new Promise(resolve => setTimeout(resolve, ms));
    new Promise(resolve => setTimeout(resolve, ms));
}

// module.exports = {
    export const taskOne = async() =>{
        await sleep(400)
        return 'ONE VALUE'
    }
    export const taskTwo = async() =>{
        await sleep(200)
        return 'TWO VALUE'
    }
    export const taskThree = async()=>{
        throw new Error('Some Problem')
        await sleep(2000)
        return 'THREE VALUE'
    }
    export const taskFour = async()=>{
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
// }

// export {taskOne,taskTwo,taskThree,taskFour}