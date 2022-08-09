# PRIMERA ENTREGA DEL PROYECTO FINAL


## `APP URL (Glitch)`

Server : 
[https://clammy-lapis-emperor.glitch.me/](https://clammy-lapis-emperor.glitch.me/)
Products :
[https://clammy-lapis-emperor.glitch.me/api/products/](https://clammy-lapis-emperor.glitch.me/api/products/)
Carts :
[https://clammy-lapis-emperor.glitch.me/api/carts/](https://clammy-lapis-emperor.glitch.me/api/carts/)


## Consigna: 
Deberás entregar el estado de avance de tu aplicación eCommerce Backend, que implemente un servidor de aplicación basado en la plataforma Node.js y el módulo express. El servidor implementará dos conjuntos de rutas agrupadas en routers, uno con la url base '/products' y el otro con '/carts'. El puerto de escucha será el 8080 para desarrollo y process.env.PORT para producción en glitch.com

### Aspectos a incluir en el entregable:
#### 1. El router base '/api/products' implementará cuatro funcionalidades:

a. GET: '/:pid?' - Me permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores)

```
http://localhost:8080/API/products/
https://clammy-lapis-emperor.glitch.me/api/products/

```
b. POST: '/' - Para incorporar productos al listado (disponible para administradores)
```
http://localhost:8080/API/products/
https://clammy-lapis-emperor.glitch.me/api/products/

    BODY x-www-Form-urlencoded
        "name":"Weedle N.º013",
        "description":"El aguijón de la cabeza es muy puntiagudo. Se alimenta de hojas oculto en la espesura de bosques y praderas.",
        "code":"13fa3dd3-7c95-4e7f-a90f-ba3a32e3473d",
        "thumbnail":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
        "price":110,
        "stock":53,
        "isAdmin":true

```
c. PUT: '/:pid' - Actualiza un producto por su id (disponible para administradores)
```
http://localhost:8080/API/products/13
https://clammy-lapis-emperor.glitch.me/api/products/13

    BODY x-www-Form-urlencoded
        "name":"Weedle N.º013",
        "description":"El aguijón de la cabeza es muy puntiagudo. Se alimenta de hojas oculto en la espesura de bosques y praderas.",
        "code":"13fa3dd3-7c95-4e7f-a90f-ba3a32e3473d",
        "thumbnail":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
        "price":120,
        "stock":53,
        "isAdmin":true
```
d. DELETE: '/:pid' - Borra un producto por su id (disponible para administradores)

```
http://localhost:8080/API/products/13
https://clammy-lapis-emperor.glitch.me/api/products/13

    BODY x-www-Form-urlencoded
        "isAdmin":true
    
```

#### 2. El router base '/api/carts' implementará tres rutas disponibles para usuarios y administradores:

a. POST: '/' - Crea un carrito y devuelve su id.
```
http://localhost:8080/API/carts/
https://clammy-lapis-emperor.glitch.me/api/carts/

```

b. DELETE: '/:cid' - Vacía un carrito y lo elimina. (SI ELIMINA EL CARRITO)

```
http://localhost:8080/API/carts/1
https://clammy-lapis-emperor.glitch.me/api/carts/1

```

c. GET: '/:cid/products' - Me permite listar todos los productos guardados en el carrito (MUESTRAS LOS PRODUCTOS, NO SOLO SUS IDs)
```
http://localhost:8080/API/carts/2/products
https://clammy-lapis-emperor.glitch.me/api/carts/2/products
```
d. POST: '/:cid/products' - Para incorporar productos al carrito por su id de producto
```
http://localhost:8080/API/carts/2/products
https://clammy-lapis-emperor.glitch.me/api/carts/2/products

    BODY x-www-Form-urlencoded
        "pid":1
        "quantity":10

```
e. DELETE: '/:cid/products/:pid' - Eliminar un producto del carrito por su id de carrito y de producto
```
http://localhost:8080/API/carts/2/products/1
https://clammy-lapis-emperor.glitch.me/api/carts/2/products/1
```

#### 3. Crear una variable booleana administrador, cuyo valor configuraremos más adelante con el sistema de login.

Según su valor (true ó false) me permitirá alcanzar o no las rutas indicadas. En el caso de recibir un request a una ruta no permitida por el perfil, devolver un objeto de error. Ejemplo: { error : -1, descripcion: ruta 'x' método 'y' no autorizada }


#### 4. Un carrito dispondrá de los siguientes campos: 
```
    [
        {
            id:1,
            timestamp::"2012-07-23T18:25:43.511Z",
            products:[]
        }
    ]
```
#### 5. Un producto dispondrá de los siguientes campos:  id, timestamp, name,description, code “3edf34we3s (validar que el producto no se repita), thumbnail (url), price, stock.
```

    [ 
        { 
            id:1, 
            timestamp:"1659739618951",
            name:"Bulbasaur N.º001",
            description:"Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.",
            code:“3edf34we3s"
            thumbnail:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
            price:100
            stock:45
        } 
    ] 

```

#### 6. Realizar la persistencia de productos y del carrito de compras en el filesystem.

El carrito de compras tendrá la siguiente estructura: 
```
    [
        {
            id:1, 
            timestamp::"1659739618951",
            products: [ 
                { 
                     id:1,
                     quantity:3
                },
                { 
                     id:2,
                     quantity:1
                },
                { 
                     id:3,
                     quantity:8
                }                                
            ]
        }
    ]

```

#### 7. El timestamp puede implementarse con Date.now()

```
Date.now();
1659739618951
```

#### 8. Realizar la persistencia de productos y del carrito de compras en el filesystem.



### >>A tener en cuenta:
### 1. Para realizar la prueba de funcionalidad hay dos opciones:

a. Probar con postman cada uno de los endpoints (productos y carrito) y su operación en conjunto.
b. Realizar una aplicación frontend sencilla, utilizando HTML/CSS/JS ó algún framework de preferencia, que represente el listado de productos en forma de cards. En cada card figuran los datos del producto, que, en el caso de ser administradores, podremos editar su información. Para este último caso incorporar los botones actualizar y eliminar. También tendremos un formulario de ingreso de productos nuevos con los campos correspondientes y un botón enviar. Asimismo, construir la vista del carrito donde se podrán ver los productos agregados e incorporar productos a comprar por su id de producto. Esta aplicación de frontend debe enviar los requests get, post, put y delete al servidor utilizando fetch y debe estar ofrecida en su espacio público.

### 2. EEn todos los casos, el diálogo entre el frontend y el backend debe ser en formato JSON. 
El servidor no debe generar ninguna vista.

### 3. En el caso de requerir una ruta no implementada en el servidor
este debe contestar un objeto de error: 
```
 { error : -2, descripcion: ruta 'x' método 'y' no implementada}
```
### 4. La estructura de programación será ECMAScript, separada tres en módulos básicos (router, lógica de negocio/api y persistencia ).
Más adelante implementaremos el desarrollo en capas. Utilizar preferentemente clases, constructores de variables let y const y arrow function.

### 5. Realizar la prueba de funcionalidad completa en el ámbito local (puerto 8080) y en glitch.com
