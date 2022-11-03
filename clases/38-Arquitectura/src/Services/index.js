import MemoryDao from "../DAO/memory.dao.js";
import UserService from "./users.service.js"

const dao = new MemoryDao();
export const userService = new UserService(dao);
