import server from './services/server.js';
import { DBService } from '../src/api/apiSQL.js';
DBService.init();


import {initMongoDB} from './services/database.js';

const init = async () => {
    const puerto = 8080;
    server.listen(puerto, () => console.log(`SERVER UP ON PORT ${puerto}`));
    // await initMongoDB();
}
init();

// const puerto = 8080;
// server.listen(puerto, () => console.log(`SERVER UP ON PORT ${puerto}`));
//cuando use mongo, estas dos lineas van dentro de init()
