
// ES5 : ECMAScript 2009, also known as ES5, was the first major revision to JavaScript.

function user(){
    this.name = ''
    this.lastname = ''
}

function programmer(){
    this.name = ''
    this.lastname = ''
    this.languaje = ''
}

programmer.prototype = new user() 

console.log(programmer)
console.log(user)
// [Function: programmer]
// [Function: user]


const programmer01 = new programmer()
console.log(programmer01)
// user { name: '', lastname: '', languaje: '' }

const programmer02 = new programmer()
programmer02.name = 'Jesus'
programmer02.lastname = 'Ramirez'
programmer02.language = 'Javascript'
console.log(programmer02)
// user {
//     name: 'Jesus',
//     lastname: 'Ramirez',
//     languaje: '',
//     language: 'Javascript'
//   }

const user01 = new user()
user01.name = 'Paolo'
user01.lastname = 'Pinedo'
console.log(user01)
// user { name: 'Paolo', lastname: 'Pinedo' }


// ES6 : ECMAScript 2015 is also known as ES6 and ECMAScript 6.

class User{
    constructor(name,lastname){
        this.name = name
        this.lastname = lastname
        this.age = null
    }
}

class Programmer extends User{
    constructor(name,lastname,languaje){
        super(name,lastname)
        this.languaje = languaje
    }
}


const user_01 = new User() 
console.log(user_01)
// User { name: undefined, lastname: undefined }

const programmmer_01 = new Programmer() 
console.log(programmmer_01)
// Programmer {
//     name: undefined,
//     lastname: undefined,
//     languaje: undefined
//   }

const user_02 = new User('Jesus','Ramirez') 
console.log(user_02)
// User { name: 'Jesus', lastname: 'Ramirez' }
const programmmer_02 = new Programmer('JavaScript') 
console.log(programmmer_02)
// Programmer {
//     name: undefined,
//     lastname: undefined,
//     languaje: 'JavaScript'
//   }
const programmmer_03 = new Programmer('Paolo','Pinedo','Python') 
console.log(programmmer_03)
// Programmer {
//     name: 'Paolo',
//     lastname: 'Pinedo',
//     age: null,
//     languaje: 'Python'
//   }