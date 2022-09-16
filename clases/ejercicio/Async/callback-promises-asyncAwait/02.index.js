// Example de Promises
//user
//tasks
//Tasks Completed = true

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

// Example de Callback Hell : Equivalencia

function requestHandler(req,res){
    user.findById(req.userId,function(err,user){
        if(err){
            res.send(err)
        }
        else{
            taks.findById(user.taskId,function(err,task){
                if(err){
                    res.send(err)
                }
                else{
                    tasks.completed = true
                    tasks.save(function(err){
                        if(err){
                            return res.send(err)
                        }
                        else{
                            res.send('Task Completed')
                        }
                    })
                }
            })
        }
            
    })
    // whatever code 
}
