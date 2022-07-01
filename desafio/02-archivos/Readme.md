
<p align="center">
  <p align="center">    
    <img src="https://github.com/JesusRamirezGamarra/CoderHouse_ReactJS/blob/Desafio-07/public/images/Logo_Negro.png" alt="BFFs" height="250">    
  </p>
  <p align="center">
       CoderHouse - Backend
  </p>
</p>




# Desafio 01 - Manejo de Archivos

Consigna: Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:

- [X] save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
- [X] getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
- [X] getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
- [X] deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
- [X] deleteAll(): void - Elimina todos los objetos presentes en el archivo.


>> Aspectos a incluir en el entregable: 
- [X] El método save incorporará al producto un id numérico, que deberá ser siempre uno más que el id del último objeto agregado (o id 1 si es el primer objeto que se agrega) y no puede estar repetido.
- [X] Tomar en consideración el contenido previo del archivo, en caso de utilizar uno existente.
- [X] Implementar el manejo de archivos con el módulo fs de node.js, utilizando promesas con async/await y manejo de errores.
- [X] Probar el módulo creando un contenedor de productos, que se guarde en el archivo: “productos.txt”
- [X] Incluir un llamado de prueba a cada método, y mostrando por pantalla según corresponda para verificar el correcto funcionamiento del módulo construído. 
- [X] El formato de cada producto será :
---
{
    title: {Nombre del producto},
    price: {precio},
    thumbnail : {url de la foto del producto}
}
---
<i class="icon-cog"></i>**Dependencias del proyecto:**

-   ninguna,


**<i class="icon-cog"> Navegabilidad / Componentes**
- [X] Manejo de clases.
- [X] Javascript.
---
