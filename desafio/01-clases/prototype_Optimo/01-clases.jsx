// >> Consigna: 
// 1) Declarar una clase Usuario
// 2) Hacer que Usuario cuente con los siguientes atributos:
//      nombre: String
//      apellido: String
//      libros: Object[]
//      mascotas: String[]
// Los valores de los atributos se deberán cargar a través del constructor, al momento de crear las instancias.
// 3) Hacer que Usuario cuente con los siguientes métodos:
//      getFullName(): String.          Retorna el completo del usuario. Utilizar template strings.
//      addMascota(String): void.       Recibe un nombre de mascota y lo agrega al array de mascotas.
//      ountMascotas(): Number.         Retorna la cantidad de mascotas que tiene el usuario.
//      addBook(String, String): void.  Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
//      getBookNames(): String[].       Retorna un array con sólo los nombres del array de libros del usuario.
// 4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.

// >> Ejemplos:
// countMascotas: Suponiendo que el usuario tiene estas mascotas: ['perro', 'gato'] usuario.countMascotas() debería devolver 2.
// getBooks: Suponiendo que el usuario tiene estos libros: 
//      [   {nombre: 'El señor de las moscas',autor: 'William Golding'}, 
//          {nombre: 'Fundacion', autor: 'Isaac Asimov'}     ] 
//      usuario.getBooks() debería devolver ['El señor de las moscas', 'Fundacion'].
// getFullName: Suponiendo que el usuario tiene: nombre: 'Elon' y apellido: 'Musk' usuario.getFullName() deberia devolver 'Elon Musk'


function Usuario(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
}
Usuario.prototype._getFullName = () => `${this.nombre} ${this.apellido}`
Usuario.prototype._addMascota = (mascota) => mascotas.push(mascota)
Usuario.prototype._countMascota = () => mascotas.length
Usuario.prototype._addBook = (nombre, autor, nroPaginas ) => libros.push(nombre,autor,nroPaginas)
Usuario.prototype._getBookNames = () =>  libros.map( item =>  item.nombre )

const nombre = 'Lucio Jesus'
const apellido = 'Ramirez Gamarra'
const mascotas = []
const libros = []
const usuario = new Usuario(nombre,apellido,[],[])
console.log('0.Carga de datos :')
console.table(usuario)
console.log('1.Metodo: _getFullName() : string')
console.log(usuario._getFullName());

console.log('2.Metodo: _addMascota(mascota) : void')
usuario._addMascota('Gata: Michi')
usuario._addMascota('Perra: Dishy')
usuario._addMascota('Torguta: Pancha')
usuario._addMascota('Conejo: Bugs')

console.log('3.Metodo: _countMascota() : number')
console.log(usuario._countMascota());

console.log('4.Metodo: _addBook(nombre, autor) : void')
usuario._addBook('REST', 'ALEX SOOJUNG-KIM PANG',450)
usuario._addBook('CURSO DE JAVASCRIPT', 'ASTOR DE CASO PARRA',289)
usuario._addBook('JAVASCRIPT: GUIA COMPLETA', 'ALESSANDRA SALVAGGIO GUALTIERO TESTA',589)

console.log('5.Metodo: _getBookNames() : string[]')
console.table(usuario._getBookNames());