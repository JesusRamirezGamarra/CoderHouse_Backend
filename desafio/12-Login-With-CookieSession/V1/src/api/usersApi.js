import { checkUsernameAvailability, saveUser } from '../persistencia/users.js'
import { createUser } from '../models/usuario.js'

export async function registrateUser(datosUsuario) {
    await checkUsernameAvailability(datosUsuario.username)
    const usuario = await createUser(datosUsuario)
    saveUser(usuario)
    return usuario
}