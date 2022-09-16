// Example de Callback Hell
//user
//tasks
//Tasks Completed = true

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