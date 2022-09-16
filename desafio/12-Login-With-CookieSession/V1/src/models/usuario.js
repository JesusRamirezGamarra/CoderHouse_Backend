import { createId } from "./id.js"


export async function createUser(datos) {
    if (!datos.username) throw new Error(`MISSING_ARGS: el campo 'username' es obligatorio`)
    if (!datos.password) throw new Error(`MISSING_ARGS: el campo 'password' es obligatorio`)

    return {
        id: await createId(),
        username: datos.username,
        password: datos.password,
    }
}