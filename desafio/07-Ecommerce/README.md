# PRIMERA ENTREGA DEL PROYECTO FINAL


## `APP URL (Glitch)`

[https://cedar-acoustic-felidae.glitch.me/](https://cedar-acoustic-felidae.glitch.me/)


## Consigna: 
Deberás entregar el estado de avance de tu aplicación eCommerce Backend, que implemente un servidor de aplicación basado en la plataforma Node.js y el módulo express. 
El servidor implementará dos conjuntos de rutas agrupadas en routers, uno con la url base '/api/productos' y el otro con '/api/carrito'. El puerto de escucha será el 8080 para desarrollo y process.env.PORT para producción en glitch.com

### Aspectos a incluir en el entregable:
#### 1. El router base '/api/productos' implementará cinco funcionalidades:

a. GET: '/' - Me permite listar todos los productos disponibles (disponible para todes)
```
http://localhost:8080/API/productos/
https://cedar-acoustic-felidae.glitch.me/API/productos/
```
b. GET: '/:id' - Me permite listar un producto por su id (disponible para todes)
```
http://localhost:8080/API/productos/1
https://cedar-acoustic-felidae.glitch.me/API/productos/1
```
c. POST: '/' - Para incorporar productos al listado (disponible solo para administradores)
```
http://localhost:8080/API/productos/
https://cedar-acoustic-felidae.glitch.me/API/productos/

    Form-encode
    nombre : Squirtle N.º007
    descripcion : Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.
    foto : https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png
    precio : 90
    stock : 12

```
d. PUT: '/:id' - Actualiza un producto por su id (disponible solo para administradores)
```
http://localhost:8080/API/productos/7
https://cedar-acoustic-felidae.glitch.me/API/productos/7

    Form-encode
    nombre : Squirtle N.º007
    descripcion : Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.
    foto : https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png
    precio : 90
    stock : 11
```
e. DELETE: '/:id' - Borra un producto por su id (disponible solo para administradores)
```
    http://localhost:8080/API/productos/7
    https://cedar-acoustic-felidae.glitch.me/API/productos/7
```

#### 2. El router base '/api/carritos' implementará cinco rutas, disponibles para usuarios y administradores:

a. POST: '/' - Crea un carrito y devuelve su id.
```
    http://localhost:8080/API/carritos/
    https://cedar-acoustic-felidae.glitch.me/API/carritos/

```
b. POST: '/:id/productos/:id_prod' - Para incorporar productos al carrito por su id de producto 

```
e.g Version v1 y v2
http://localhost:8080/API/carritos/1/productos/1
https://cedar-acoustic-felidae.glitch.me/API/carritos/1/productos/1

e.g Version v3
http://localhost:8080/API/carritos/1/productos
https://cedar-acoustic-felidae.glitch.me/API/carritos/1/productos

    Form-encode
    nombre : Squirtle N.º007
    descripcion : Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.
    foto : https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png
    precio : 90
    cantidad : 1

```
c. GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito
```
http://localhost:8080/API/carritos/1/productos
https://cedar-acoustic-felidae.glitch.me/API/carritos/1/productos
```
d. DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto
```
http://localhost:8080/API/carritos/1/productos/1
https://cedar-acoustic-felidae.glitch.me/API/carritos/1/productos/1
```
e. DELETE: '/:id' - Vacía un carrito.
```
http://localhost:8080/API/carritos/1
https://cedar-acoustic-felidae.glitch.me/API/carritos/1
```

#### 3. Crear una variable booleana administrador, cuyo valor configuraremos más adelante con el sistema de login. 

Según su valor (true ó false) me permitirá alcanzar o no las rutas indicadas. En el caso de recibir un request a una ruta no permitida por el perfil, devolver un objeto de error. Ejemplo: { error : -1, descripcion: ruta 'x' método 'y' no autorizada }


#### 4. Un producto dispondrá de los siguientes campos: 
```
    id, nombre, descripcion, foto (url), precio, stock.
```
#### 5. El carrito de compras tendrá la siguiente estructura:
```
    { id, productos: [ { id, nombre, descripcion, foto (url), precio, stock } ] }
```
ó
```
    { id, productos: [ idProd, … ] }
```
#### 6. Realizar la persistencia de productos y del carrito de compras en el filesystem.

### >>A tener en cuenta:
### 1. Para realizar la prueba de funcionalidad hay dos opciones:

a. Probar con postman cada uno de los endpoints (productos y carrito) y su operación en conjunto.
b. Realizar una aplicación frontend sencilla, utilizando HTML/CSS/JS ó algún framework de preferencia, que represente el listado de productos en forma de tarjetas. En cada tarjeta figuran los datos del producto, que, en el caso de ser administradores, podremos editar su información. Para este último caso incorporar los botones actualizar y eliminar.
También tendremos un formulario de ingreso de productos nuevos con los campos correspondientes y un botón enviar. Asimismo, construir la vista del carrito donde se podrán ver los productos agregados e incorporar productos a comprar por su id de producto. Esta aplicación de frontend debe enviar los requests get, post, put y delete al servidor utilizando fetch y debe estar ofrecida en su espacio público.

### 2. En todos los casos, el diálogo entre el frontend y el backend debe ser en formato JSON. 
El servidor no debe generar ninguna vista.

### 3. En el caso de requerir una ruta no implementada en el servidor
Este debe contestar un objeto de error: 
```
 { error : -2, descripcion: ruta 'x' método 'y' no implementada}
```
### 4. La estructura de programación será ECMAScript, separada tres en módulos básicos router,lógica de negocio/api y persistencia ). 
Más adelante implementaremos el desarrollo en capas.
Utilizar preferentemente clases, constructores de variables let y const y arrow function.

### 5. Realizar la prueba de funcionalidad completa en el ámbito local (puerto 8080) y en glitch.com
