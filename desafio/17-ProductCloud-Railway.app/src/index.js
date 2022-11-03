import config from './config/config.js';
import Server from './services/server.js';
import { initDB_CallBack } from './services/db.js'


import cluster from 'cluster'
import minimist from 'minimist';
import os from 'os'

const numCPUs = os.cpus().length;
// console.log(config.init.MODO)

if(config.init.MODO === 'CLUSTER' && cluster.isPrimary){
  // console.log('MODO CLUSTER');

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }
  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} died at ${Date()}`);
    cluster.fork();
  });
}
else {
  const init = async () => {
    // console.log('MODO FORK');
    
    initDB_CallBack()

    // console.log(config.init)
    // console.log({'config.init.MODE':config.init.MODE})
    // console.log({'config.init.PORT':config.init.PORT})
    // console.log({'config.init.MODO':config.init.MODO})

    const server = Server.listen(config.init.PORT, () => {
      console.log(`Servidor escuchando en el puerto ${config.init.PORT} - worker process with ${process.pid} started , ready : http://localhost:${config.init.PORT}/`);
    });
    // console.log(`worker process with ${process.pid} started`)
    server.on('error', (error) => console.log(`Error en servidor: ${error}`));
  }
  init()

}


