
import UserService_ from '../services/users.service.js'
import  MmoryDao from '../DAO/memory.dao.js'
const dao = new MmoryDao()
const service = new UserService_(dao)

/// Una instancia x cada solicitud
const getAllUsers_ = async(req,res)=>{
    try{
        let users = await service.getUsers(); 
        res.send({status:"success",payload:users })
    }
    catch(err){
        console.log(err);
        res.send({status:"error",err})
    }
}

import { userService } from '../Services/index.js'
/// getAllUsers : isntancia unica , pattern Repository
const getAllUsers = async(req,res)=>{
    try{
        let users = await userService.getUsers();
        res.send({status:"success",payload:users })
    }
    catch(err){
        console.log(err);
        res.send({status:"error",err})
    }
}




export default {
    getAllUsers,
    getAllUsers_
}