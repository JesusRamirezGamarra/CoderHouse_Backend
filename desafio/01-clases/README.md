
<p align="center">
  <p align="center">    
    <img src="https://github.com/JesusRamirezGamarra/CoderHouse_ReactJS/blob/Desafio-07/public/images/Logo_Negro.png" alt="BFFs" height="250">    
  </p>
  <p align="center">
       CoderHouse - Backend
  </p>
</p>




# Desafio 01 - Clases

1) Declarar una clase Usuario

2) Hacer que Usuario cuente con los siguientes atributos:
- [X] nombre: String
- [X] apellido: String
- [X] libros: Object[]
- [X] mascotas: String[]

Los valores de los atributos se deberán cargar a través del constructor, al momento de crear las instancias.

3) Hacer que Usuario cuente con los siguientes métodos:

- [X] getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
- [X] addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
- [X] countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
- [X] addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
- [X] getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.

4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.

>> Ejemplos:

- [X] countMascotas: Suponiendo que el usuario tiene estas mascotas: ['perro', 'gato'] usuario.countMascotas() debería devolver 2.
- [X] getBooks: Suponiendo que el usuario tiene estos libros: [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}] usuario.getBooks() debería devolver ['El señor de las moscas', 'Fundacion'].
- [X] getFullName: Suponiendo que el usuario tiene: nombre: 'Elon' y apellido: 'Musk' usuario.getFullName() deberia devolver 'Elon Musk'


<i class="icon-cog"></i>**Dependencias del proyecto:**

-   ninguna,


**<i class="icon-cog"> Navegabilidad / Componentes**
- [X] Manejo de clases.
- [X] Javascript.
---
