import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
export const ___dirname = path.dirname(__dirname);

export const createHash = password => bcrypt.hashSync(password,bcrypt.genSaltSync(10));
export const isValidPassword = (user,password ) => bcrypt.compareSync(password,user.password);

export default __dirname;
