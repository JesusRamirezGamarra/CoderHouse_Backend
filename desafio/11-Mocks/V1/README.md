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

### Detalles Tecnicos Pendientes 

Si se quiere probar la persistencia en memoria y archivo cambiar las importaciones en la carpeta controllers y sus respectivos llamados a las funciones. 
En la carpeta services, modificar la importación del archivo socket Y en el archivo index.js de SRC comentar la función initDB

ENDPOINTS DE PRODUCTOS PARA POSTMAN:
```
  GET||   localhost:8080/api/productos      =>  TODOS LOS PRODUCTOS
  GET||   localhost:8080/api/productos/:id  =>  UN PRODUCTO POR ID
  POST||  localhost:8080/api/productos      =>  CREA UN PRODUCTO
```
=>  FORMATO DEL OBJETO:
```
  GET||   localhost:8080/api/productos/:id  =>   UN PRODUCTO POR ID
  POST||  localhost:8080/api/productos      =>  CREA UN PRODUCTO
```
=>  FORMATO DEL OBJETO:
```
  {
      "name": "Nombre del producto",
      "price": 100,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/plane-paper-toy-science-school-128.png"
  }
```
```
PUT||   localhost:8080/api/productos/:id   => EDITA UN PRODUCTO POR ID
```
=>  FORMATO DEL OBJETO:
```
{
    "name": "Nombre del producto",
    "price": 100,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/plane-paper-toy-science-school-128.png"
}
```

```
DELETE||    localhost:8080/api/productos/:id    => ELIMINA UN PRODUCTO POR ID
```

ENDPOINTS DE MENSAJES PARA POSTMAN:
```
GET||   localhost:8080/api/mensajes/:id         =>   TRAE TODOS LOS MENSAJES
POST||  localhost:8080/api/mensajes             =>  CREA UN MENSAJE
```

=>  FORMATO DEL OBJETO:
```
{
    "nombre": "Jesus Ramirez",
    "mensaje": "Hola! que tal como te va?"
}
```

sudo service mongodb status for checking the status of your database. You should see a [Fail] response if no database is running.
sudo service mongodb start to start running your database. You should see a [Ok] response.
sudo service mongodb stop to stop running your database. 
https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database

avatar : https://www.iconfinder.com/search?q=avatar

- https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/girl_female_young_people_woman_teenager_avatar-512.png
- https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/adult_people_avatar_man_male_employee_tie-128.png
- https://cdn2.iconfinder.com/data/icons/avatars-60/5985/40-School_boy-512.png
- https://cdn2.iconfinder.com/data/icons/avatars-60/5985/12-Delivery_Man-512.png
- https://cdn2.iconfinder.com/data/icons/avatars-60/5985/30-Scientist-512.png
- https://cdn2.iconfinder.com/data/icons/avatars-60/5985/1-Girl-512.png
- https://cdn2.iconfinder.com/data/icons/avatars-60/5985/2-Boy-512.png
- https://cdn2.iconfinder.com/data/icons/avatars-60/5985/36-Grandfather-512.png
- https://cdn2.iconfinder.com/data/icons/avatars-60/5985/22-Wife-512.png
- https://cdn2.iconfinder.com/data/icons/avatars-60/5985/25-Researcher-512.png
- https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/man_adult_mustache_people_woman_father_avatar-512.png
- https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/male_glasses_hacker_people_man_programmer_avatar-512.png
  

Command tips :

* lsof -i tcp:8080
* kill -9 <PID>