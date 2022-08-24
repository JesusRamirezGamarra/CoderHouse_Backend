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

Create Collection Products
```
// MongoDB Playground
const database = 'eCommerce';
const collectionProducts = 'Products';
// Create a new database.
use(database);
// The prototype form to create a regular collection:
db.createCollection( collectionProducts,
  {
    timestamp: Timestamp,
    name: String,
    description: String,
    code: String,
    thumbnail: String,
    price: Double,
    stock: Number
  }
)
```

Create Collection Messages : 
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


Insert 10 registros sobre la collection Products :
```
// MongoDB Playground
// Select the database to use.
const database = 'eCommerce';
use(database);
// The drop() command destroys all data from a collection.
// Make sure you run it against the correct database and collection.
db.Products.drop();
// Insert a few documents into the sales collection.
db.Products.insertMany([
  { '__id': 1, 'timestamp':new Date('2021-08-23T08:00:00Z'),'tipo':'Planta',  'name': 'Bulbasaur N.º001',  'description': 'Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.',  'code': '15fa3dd3-7c95-4e7f-a90f-ba3a32e3473d', 'thumbnail': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png', 'price': 150,  'stock': 2   },
  { '__id': 2, 'timestamp':new Date('2021-08-20T08:00:00Z'),'tipo':'Planta',  'name': 'Ivysaur N.º002',    'description': 'Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras.', 'code': '25fa3dd3-7c95-4e7f-a90f-ba3a32e3473d', 'thumbnail': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png', 'price': 200,  'stock': 1   },
  { '__id': 3, 'timestamp':new Date('2021-08-22T08:00:00Z'),'tipo':'Planta',  'name': 'Venusaur N.º003',   'description': 'La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol.', 'code': '35fa3dd3-7c95-4e7f-a90f-ba3a32e3473d', 'thumbnail': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png', 'price': 59.9,   'stock': 10  },
  { '__id': 4, 'timestamp':new Date('2021-08-23T08:00:00Z'),'tipo':'Fuego',   'name': 'Charmander N.º004', 'description': 'Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.', 'code': '45fa3dd3-7c95-4e7f-a90f-ba3a32e3473d', 'thumbnail': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png', 'price': 50,   'stock': 20  },
  { '__id': 5, 'timestamp':new Date('2021-08-20T08:00:00Z'),'tipo':'Fuego',   'name': 'Charmeleon N.º005', 'description': 'Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras.', 'code': '55fa3dd3-7c95-4e7f-a90f-ba3a32e3473d', 'thumbnail': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png', 'price': 150,  'stock': 47   },
  { '__id': 6, 'timestamp':new Date('2021-08-22T08:00:00Z'),'tipo':'Fuego',   'name': 'Charizard N.º006',  'description': 'Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer.', 'code': '65fa3dd3-7c95-4e7f-a90f-ba3a32e3473d', 'thumbnail': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png', 'price': 375, 'stock': 53   },
  { '__id': 7, 'timestamp':new Date('2021-08-22T08:00:00Z'),'tipo':'Agua',    'name': 'Squirtle N.º007',   'description': 'Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.', 'code': '75fa3dd3-7c95-4e7f-a90f-ba3a32e3473d', 'thumbnail': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png', 'price': 110, 'stock': 53  },
  { '__id': 8, 'timestamp':new Date('2021-08-20T08:00:00Z'),'tipo':'Agua',    'name': 'Wartortle N.º008',  'description': 'Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón.', 'code': '85fa3dd3-7c95-4e7f-a90f-ba3a32e3473d', 'thumbnail': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png', 'price': 150,  'stock': 53   },
  { '__id': 9, 'timestamp':new Date('2021-08-22T08:00:00Z'),'tipo':'Agua',    'name': 'Blastoise N.º009',  'description': 'Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.', 'code': '95fa3dd3-7c95-4e7f-a90f-ba3a32e3473d', 'thumbnail': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png', 'price': 250.9, 'stock': 93  },
  { '__id': 10,'timestamp':new Date('2021-08-19T08:00:00Z'),'tipo':'Insecto', 'name': 'Caterpie N.º010',   'description': 'Para protegerse, despide un hedor horrible por las antenas con el que repele a sus enemigos.', 'code': '10fa3dd3-7c95-4e7f-a90f-ba3a32e3473d', 'thumbnail': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png', 'price': 180,  'stock': 93   },
]);
db.Products.find()

```

Insert 10 registros sobre la collection Messages :

```
// MongoDB Playground
// Select the database to use.
const database = 'eCommerce';
use(database);
// The drop() command destroys all data from a collection.
// Make sure you run it against the correct database and collection.
db.Messages.drop();
// Insert a few documents into the sales collection.
db.Messages.insertMany([
  { '__id': 1, 'email':'jessurg18@hotmail.com','date':new Date('2021-08-03T08:00:00Z'),messageText:'Hola como estas !!!'},
  { '__id': 2, 'email':'LUCIOJESUSRAMIREZGAMARRA@GMAIL.COM','date':new Date('2021-08-04T08:00:00Z'),messageText:'Bien Gracias y tu Como estas !!! Que tal todo ?'},
  { '__id': 3, 'email':'anonymous@mail.com','date':new Date('2021-08-05T08:00:00Z'),messageText:'Hey.... por aca todo bien!'},
  { '__id': 4, 'email':'jessurg18@hotmail.com','date':new Date('2021-08-06T08:00:00Z'),messageText:'Alguna novedad del Curso de Backend va q va...'},
  { '__id': 5, 'email':'anonymous@mail.com','date':new Date('2021-08-07T08:00:00Z'),messageText:'Bueno ... avanzando el desafio'},
  { '__id': 6, 'email':'anonymous@mail.com','date':new Date('2021-08-08T08:00:00Z'),messageText:'Hasta ahora todo tranquilo'},
  { '__id': 7, 'email':'jessurg18@hotmail.com','date':new Date('2021-08-09T08:00:00Z'),messageText:'Comprendo ... eso es muy bueno'},
  { '__id': 8, 'email':'anonymous@mail.com','date':new Date('2021-08-10T08:00:00Z'),messageText:'Sin embargo aun no termino pero me falta poco.'},
  { '__id': 9, 'email':'LUCIOJESUSRAMIREZGAMARRA@GMAIL.COM','date':new Date('2021-08-11T08:00:00Z'),messageText:'Yo aun no empiezo jejeje, espero hacerlo mas tarde'},
  { '__id': 10,'email':'LUCIOJESUSRAMIREZGAMARRA@GMAIL.COM','date':new Date('2021-08-12T08:00:00Z'),messageText:'Con fe acabo hoy mismo.'},
]);
db.Messages.find();
```
<p align="center">
  <p align="center">    
    <img src="https://github.com/JesusRamirezGamarra/CoderHouse_Backend/blob/main/desafio/09-MongoDB/Public/img/InsertMessages.png" alt="Insert Messages Collections" height="350">    
  </p>
  <p align="center">
       CoderHouse - Backend
  </p>
</p>




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




