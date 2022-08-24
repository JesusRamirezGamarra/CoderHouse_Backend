<p align="center">
  <p align="center">    
    <img src="https://github.com/JesusRamirezGamarra/CoderHouse_ReactJS/blob/Desafio-07/public/images/Logo_Negro.png" alt="BFFs" height="250">    
  </p>
  <p align="center">
       CoderHouse - Backend
  </p>
</p>



# MONGODB
## Consigna: Utilizando Mongo Shell, crear una base de datos llamada ecommerce que contenga dos colecciones: mensajes y productos.

1. Agregar 10 documentos con valores distintos a las colecciones mensajes y productos. El formato de los documentos debe estar en correspondencia con el que venimos utilizando en el entregable con base de datos MariaDB. 
```
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
const database = 'eCommerce';
const collectionMessages = 'Messages';
// Create a new database.
use(database);
// Create a new collection.
//db.createCollection(collection);
// The prototype form to create a regular collection:
db.createCollection( collectionMessages,
  {
    email: String,
    date: Timestamp,
    messageText: String
  }
)

```
2. Vamos a tener una colección de productos, donde hay que poner valores al campo precio entre los 100 y 5000 pesos (eligiendo valores intermedios, ej: 120, 580, 900, 1280, 1700, 2300, 2860, 3350, 4320, 4990).
3. Listar todos los documentos en cada colección.
4. Mostrar la cantidad de documentos almacenados en cada una de ellas.
5. Realizar un CRUD sobre la colección de productos:
    - a. Agregar un producto más en la colección de productos.
    - b. Realizar una consulta por nombre de producto específico:
        - [I]   Listar los productos con precio menor a 1000 pesos.
        - [II]  Listar los productos con precio entre los 1000 a 3000 pesos.
        - [III] Listar los productos con precio mayor a 3000 pesos.
        - [IV]  Realizar una consulta que traiga sólo el nombre del tercer producto más barato.
    - c. Hacer una actualización sobre todos los productos, agregando el campo stock a todos ellos con un valor de 100.
    - d. Cambiar el stock a cero de los productos con precios mayores a 4000 pesos. 
    - e. Borrar los productos con precio menor a 1000 pesos.


  ```
$and : Realiza operación AND -> sintaxis: {$and: [ {},{} ] }
$or : Realiza operación OR -> sintaxis: {$or: [ {},{} ] }
$lt : Coincide con valores que son menores que un valor especificado.
$lte : Coincide con valores menores o iguales a un valor especificado.
$gt : Coincide con valores mayores a un valor especificado.
$gte : Coincide con valores mayores o iguales a un valor especificado.
$ne : Coincide con valores que no son iguales a un valor especificado.
$eq : Selecciona los documentos que son iguales a un valor especificado.
$exists : Selecciona los documentos según la existencia de un campo.
$in : Selecciona los documentos especificados en un array. 
sintaxis: {key:{$in: [array of values] } }
$nin : Coincide con ninguno de los valores especificados en un array.
$size : Coincide con el número de elementos especificados.
$all : Coincide con todos los valores definidos dentro de un array.
$elemMatch : Coincide con algún valor definido dentro del query.

https://docs.mongodb.com/manual/reference/operator/query/

db.coll.distinct( val )
devuelve un array con los distintos valores que toma un determinado campo en los documentos de la colección.

db.coll.find({doc.subdoc:value})
Se utiliza para filtrar subdocumentos.

db.coll.find({name: /^Max$/i})
filtra utilizando expresiones regulares

```




