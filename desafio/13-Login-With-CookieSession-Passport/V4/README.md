<p align="center">
  <p align="center">    
    <img src="https://github.com/JesusRamirezGamarra/signature/blob/main/public/img/Logo_Negro.png" alt="BFFs" height="250">    
  </p>
  <p align="center">
       Login With Cokiee Session + Passport
  </p>
</p>


# >> Consigna: 

```
    /login
    /current Bienvenido + user
    /logout
```
Implementar sobre el entregable que venimos realizando un mecanismo de autenticación. Para ello:
* Se incluirá una vista de registro, en donde se pidan email y contraseña. Estos datos se persistirán usando MongoDb, en una (nueva) colección de usuarios, cuidando que la contraseña quede encriptada (sugerencia: usar la librería bcrypt).
* Una vista de login, donde se pida email y contraseña, y que realice la autenticación del lado del servidor a través de una estrategia de passport local.
* Cada una de las vistas (logueo - registro) deberá tener un botón para ser redirigido a la otra.
* Una vez logueado el usuario, se lo redirigirá al inicio, el cual ahora mostrará también su email, y un botón para desolguearse.
* Además, se activará un espacio de sesión controlado por la sesión de passport. Esta estará activa por 10 minutos y en cada acceso se recargará este tiempo.
* Agregar también vistas de error para login (credenciales no válidas) y registro (usuario ya registrado).
* El resto de la funciones, deben quedar tal cual estaban el proyecto original.




Notas : 
    https://es.stackoverflow.com/questions/37930/cual-es-la-diferencia-entre-position-relative-position-absolute-y-position

NOTA : 

La estructura esperara para la el conexion string es  :

 ```
import firebaseConfig from ' JSON conexion string Firebase' assert {type:"json"}
import __dirname from '../utils.js';

export default {
    fileSystem: {
        path: __dirname + '/assets/database/',
    },
    mongodb: {
        cnxStr:' Mongo DB Conexion string MongoDB',
        options : {
            autoIndex: false, // Don't build indexes
            maxPoolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4 // Use IPv4, skip trying IPv6
        }
    },
    PORT: process.env.PORT || 8080,
    firebase: {
        credential : firebaseConfig
    },
}

 ```