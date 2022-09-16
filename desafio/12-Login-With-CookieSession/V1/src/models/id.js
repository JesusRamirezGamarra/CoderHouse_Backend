import { getAll } from "../persistencia/users.js";

export const createId = async () =>{
    const allUsers = await getAll();
    return !allUsers.length ? 1 : parseInt(allUsers[allUsers.length - 1].id) + 1
}