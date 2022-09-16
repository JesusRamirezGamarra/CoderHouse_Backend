const {taskOne,taskTwo,taskThree,taskFour} = require('./tasks')


function main(){
    console.time('Measuring time main')
    let valueOne = taskOne()
    let valueTwo = taskTwo()
    console.timeEnd('Measuring time main')

    console.log('Task One returned',valueOne)
    console.log('Task Two returned',valueTwo)
    
}

async function mainAsync(){
    console.time('Measuring time mainAsync')
    let valueOne = await taskOne()
    let valueTwo = await taskTwo()
    console.timeEnd('Measuring time mainAsync')

    console.log('Task One returned',valueOne)
    console.log('Task Two returned',valueTwo)
    
}

async function mainAsyncError(){
    
    try{
        console.time('Measuring time mainAsyncError')
        let valueOne = await taskOne()
        let valueTwo = await taskTwo()
        let valueThree = await taskThree()
        console.timeEnd('Measuring time mainAsyncError')
        console.log('Task One returned',valueOne)
        console.log('Task Two returned',valueTwo)
        console.log('Task Three returned',valueThree)        
    }
    catch(err){
        console.log(err)
    }
}

async function mainAsyncErrorTryCatch(){
    console.time('Measuring time mainAsyncErrorTryCatch')
    let valueOne = await taskOne()
    let valueTwo = await taskTwo()
    let valueFour= await taskFour()
    console.timeEnd('Measuring time mainAsyncErrorTryCatch')

    console.log('Task One returned',valueOne)
    console.log('Task Two returned',valueTwo)
    console.log('Task Four returned',valueFour)
}


async function mainAsyncParallel(){
    console.time('Measuring time mainAsyncParallel')
    const results = await Promise.all([taskOne(),taskTwo(),taskFour()])
    console.timeEnd('Measuring time mainAsyncParallel')

    console.log('Task One returned',results[0])
    console.log('Task Two returned',results[1])
    console.log('Task Four returned',results[2])
}

// Finaliza al encontrar un error , se cancela las promesas en proceso( las finaliza)
async function mainAsyncParallelError(){
    console.time('Measuring time mainAsyncParallel')
    const results = await Promise.all([taskOne(),taskTwo(),taskThree()])
    console.timeEnd('Measuring time mainAsyncParallel')

    console.log('Task One returned',results[0])
    console.log('Task Two returned',results[1])
    console.log('Task Three returned',results[2])
}



// main()
// mainAsync()
// mainAsyncError()
//mainAsyncErrorTryCatch()
//mainAsyncParallel()
mainAsyncParallelError()

