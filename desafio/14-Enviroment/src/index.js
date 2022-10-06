//import config from './config/index.js';
import config from './config/config.js';
import Server from './services/server.js';
import { initDb } from './services/db.js'

const PORT = config.PORT || 3000;

const init = async () => {
  await initDb()
  console.log('Conectado a la DB');

  const server = Server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
  server.on('error', (error) => console.log(`Error en servidor: ${error}`));
  
}
init()