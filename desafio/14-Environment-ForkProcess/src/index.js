import config from './config/config.js';
import Server from './services/server.js';
import { initDb } from './services/db.js'

// const PORT = config.init.PORT || 3000;

const init = async () => {
  
  initDb()

  console.log('Conectado a la DB');
  const server = Server.listen(config.init.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${config.init.PORT}`);
  });
  server.on('error', (error) => console.log(`Error en servidor: ${error}`));
  
}
init()