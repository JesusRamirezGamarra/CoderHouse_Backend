<p align="center">
  <p align="center">    
    <img src="https://github.com/JesusRamirezGamarra/signature/blob/main/public/img/Logo_Negro.png" alt="BFFs" height="250">    
  </p>
  <p align="center">
       CoderHouse - Backend
  </p>
</p>

# CoderHouse_Mocks
# >> Consigna 1: 
Sobre el desafío entregable de la clase 8 (sql y node: nuestra primera base de datos), crear una vista en forma de tabla que consuma desde la ruta :
```
‘/api/productos-test’ 
```
del servidor una lista con 5 productos generados al azar utilizando Faker.js como generador de información aleatoria de test (en lugar de tomarse desde la base de datos). 
Elegir apropiadamente los temas para conformar el objeto ‘producto’ : 
```
(nombre, precio y foto)

```



# >> Consigna 2: 
Ahora, vamos a reformar el formato de los mensajes y la forma de comunicación del chat (centro de mensajes).
El nuevo formato de mensaje será:
```
{ 
    author: {
        id: 'mail del usuario', 
        nombre: 'nombre del usuario', 
        apellido: 'apellido del usuario', 
        edad: 'edad del usuario', 
        alias: 'alias del usuario',
        avatar: 'url avatar (foto, logo) del usuario'
    },
    text: 'mensaje del usuario'
}
```

# >> Aspectos a incluir en el entregable: 
1. Modificar la persistencia de los mensajes para que utilicen un contenedor que permita guardar objetos anidados mongodb.
2. El mensaje normalizado se manda en consola o en otro endpoint
3. El array que se devuelve debe estar normalizado con normalizr, conteniendo una entidad de autores. Considerar que el array tiene sus autores con su correspondiente id (mail del usuario), pero necesita incluir para el proceso de normalización un id para todo el array en su conjunto (podemos asignarle nosotros un valor fijo).
Por ejemplo:
```
{ id: ‘mensajes’, mensajes: [ ] }
```
4. El frontend debería poseer el mismo esquema de normalización que el backend, para que este pueda desnormalizar y presentar la información adecuada en la vista.

5. Considerar que se puede cambiar el nombre del id que usa normalizr, agregando un tercer parametro a la función schema.Entity, 
Por ejemplo:
```
const schemaAuthor = new schema.Entity('author',{...},{idAttribute: 'email'});
```
En este schema cambia el nombre del id con que se normaliza el nombre de los autores a 'email'. Más info en la web oficial.  

6. Presentar en el frontend (a modo de test) el porcentaje de compresión de los mensajes recibidos. Puede ser en el título del centro de mensajes.
                                                                                                                            https://stackoverflow.com/questions/23318037/size-of-json-object-in-kbs-mbs

# >> Nota: incluir en el frontend el script de normalizr de la siguiente cdn: https://cdn.jsdelivr.net/npm/normalizr@3.6.1/dist/normalizr.browser.min.js
Así podremos utilizar los mismos métodos de normalizr que en el backend. 
Por ejemplo:  
```
new normalizr.schema.Entity , normalizr.denormalize(...,...,...)
```


<p align="center">
  <p align="center">    
    <img src="https://github.com/JesusRamirezGamarra/CoderHouse_Backend/blob/main/desafio/11-Mocks/public/imagen/All-in-One-Messenger.png" alt="BFFs" height="450">    
  </p>
  <p align="center">
       CoderHouse - Backend
  </p>
</p>

