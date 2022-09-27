import Server from './services/server.js';

const PORT = 8080;

const server = Server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

server.on('error', (error) => console.log(`Error en servidor: ${error}`));
