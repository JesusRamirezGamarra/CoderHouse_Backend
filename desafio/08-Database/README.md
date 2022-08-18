<p align="center">
  <p align="center">    
    <img src="https://github.com/JesusRamirezGamarra/CoderHouse_ReactJS/blob/Desafio-07/public/images/Logo_Negro.png" alt="BFFs" height="250">    
  </p>
  <p align="center">
       CoderHouse - Backend
  </p>
</p>

Server : 
[https://vine-equatorial-beetle.glitch.me/](https://vine-equatorial-beetle.glitch.me/)

# WEBSOCKETS WITH SQL DATABASES

## Consigna : Tomando como base las clases Contenedor en memoria y en archivos. 

Desarrollar un nuevo contenedor con idénticos métodos pero que funcione sobre bases de datos, utilizando Knex para la conexión. Esta clase debe recibir en su constructor el objeto de configuración de Knex y el nombre de la tabla sobre la cual trabajará. Luego, modificar el desafío entregable de la clase 11”Chat con Websocket”, y:


* cambiar la persistencia de los mensajes de filesystem a base de datos SQLite3.
* cambiar la persistencia de los productos de memoria a base de datos MariaDB.

Desarrollar también un script que utilizando knex cree las tablas necesarias para la persistencia en cuestión (tabla mensajes en sqlite3 y tabla productos en mariaDb).

## >> Notas:
Definir una carpeta DB para almacenar la base datos SQLite3 llamada ecommerce

_Se utilizo:_
```
    "express": "^4.18.1",
    "express-handlebars": "^6.0.6",
    "ejs": "^3.1.8",
    "pug": "^3.0.2"
    "socket.io": "^4.5.1",
    "knex": "^2.2.0",
    "mariadb": "^3.0.1",
    "mssql": "^9.0.0",
    "mysql": "^2.18.1",
    "sqlite3": "^5.0.11"    
```