import User from '../dao/Users.ts'
import { Request, Response } form 'npm:express'

const userService = new User()
const getUsers = async (req:Request,res:Response) => {
    const result = await usersService.getUsers(s)
    res.send({status:'sucess',payload:result})
}

const sveUser = async (req:Request, res:Response) => {
    const{ mame, email ,password } = req.body;
    if( !name|| !email || password ) return res.status(400).send ({ stauts:"error", error:"incompatible email or password"})
    
}


export default {
    getUsers
}