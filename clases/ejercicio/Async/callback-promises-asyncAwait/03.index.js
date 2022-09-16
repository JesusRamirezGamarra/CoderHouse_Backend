//async await
//user
//tasks
//Tasks Completed = true

async function requestHandler(req,res){
    try{
        const user = await User.findById(req.userId)
        const tasks = await Tasks.findById(user.taskId)
        tasks.completed= true
        await tasks.save();
        res.send('Task Completed')
    }catch (err) {
        res.send(err)
    }
    
}



// Example de Promises : Equivalencia

function requestHandler(req,res){
    User.findById(req.userId)
        .then(function(user){
            return Tasks.findById(user.taskId)
        })
        .then(function(tasks){
            tasks.completed =true
            return tasks.save()
        })
        .then(function(){
            res.send('Task Completed')
        })                
        .catch(function(err){
            res.send(err)
        })
}
