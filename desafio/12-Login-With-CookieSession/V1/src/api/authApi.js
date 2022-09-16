import { getByName } from "../persistencia/users.js";

export const authenticate = async (username, password) =>{
    let usuario
    try {
        usuario = await getByName(username)
    } catch (error) {
        throw new Error('error de autenticacion')
    }
    if (usuario.password !== password) {
        throw new Error('error de autenticacion')
    }
    return usuario
}