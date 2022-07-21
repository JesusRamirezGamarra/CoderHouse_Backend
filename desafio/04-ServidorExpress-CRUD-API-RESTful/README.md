
<p align="center">
  <p align="center">    
    <img src="https://github.com/JesusRamirezGamarra/CoderHouse_ReactJS/blob/Desafio-07/public/images/Logo_Negro.png" alt="BFFs" height="250">    
  </p>
  <p align="center">
       CoderHouse - Backend
  </p>
</p>

## Demo
---
![alt text](https://github.com/JesusRamirezGamarra/CoderHouse_Backend/blob/main/desafio/04-ServidorExpress-CRUD-API-RESTful/V2/src/public/img/BFFs_API_RESTfulV2.gif)

---

# Título del Proyecto : Desafio 04 - Server Express : API RESTful With Mulder 
_Formato: link a un repositorio en Github y url de proyecto subido a glitch_
_Observación: no incluir la carpeta node_modules_

## Consigna :🚀
_Realizar un proyecto de servidor basado en node.js y express que ofrezca una API RESTful de productos. En detalle, que incorpore las siguientes rutas:_
* GET '/api/productos' -> devuelve todos los productos.
* GET '/api/productos/:id' -> devuelve un producto según su id.
* POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
* PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
* DELETE '/api/productos/:id' -> elimina un producto según su id.

_Cada producto estará representado por un objeto con el siguiente formato._

```
{
    title: (nombre del producto),
    price: (precio),
    thumbnail: (url al logo o foto del producto)
}

```

_Cada ítem almacenado dispondrá de un id numérico proporcionado por el backend, comenzando en 1, y que se irá incrementando a medida de que se incorporen productos. Ese id será utilizado para identificar un producto que va a ser listado en forma individual. _

* Para el caso de que un producto no exista, se devolverá el objeto:
```
{ 
    error : 'producto no encontrado' 
}
```
* Implementar la API en una clase separada, utilizando un array como soporte de persistencia en memoria.
* Incorporar el Router de express en la url base '/api/productos' y configurar todas las subrutas en base a este.
* Crear un espacio público de servidor que contenga un documento index.html con un formulario de ingreso de productos con los datos apropiados.
* El servidor debe estar basado en express y debe implementar los mensajes de conexión al puerto 8080 y en caso de error, representar la descripción del mismo.
* Las respuestas del servidor serán en formato JSON. La funcionalidad será probada a través de Postman y del formulario de ingreso.





_Se utilizo:_
```
_npm install cors_
_npm install axios_
_npm install express_
_npm install multer_
_https://datatables.net/examples/index_

```