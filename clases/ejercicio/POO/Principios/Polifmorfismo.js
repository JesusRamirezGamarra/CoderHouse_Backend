
// ES5 : ECMAScript 2009, also known as ES5, was the first major revision to JavaScript.
// ES6 : ECMAScript 2015 is also known as ES6 and ECMAScript 6.
// Polymorphism
// Benefits of : 
//      reduces coupling in out application
//      sometimes allow to create more compact code
//      support in PL:
//          overloading
//          parametric polumorphism
//          subtype polymorphism or inclusion polymorphism


//1.Overloading
// Method overloading is providing two separate methods in a class with the same name but different arguments, while the method return type 
// may or may not be different, which allows us to reuse the same method name.
// 1) Method Overloading occurs with in the same
// class
// 2) Since it involves with only one class inheritance is not involved.
// 3) In overloading return type need not be the same 
// 4) Parameters must be different when we do overloading
// program to perform function overloading


function sum_() {
    switch (arguments.length) {
    case 0:
        console.log('You have not passed any argument');
        break;
    case 1:
        console.log('Pass at least two arguments');
        break;
    default:
        let result = 0;
        let length = arguments.length;
    
        for (i = 0; i < length; i++) {  
            result = result + arguments[i];  
        }  
        console.log(result);
        break;
    }
}

sum_();
sum_(5); 
sum_(5, 9);    
sum_(1, 2, 3, 4, 5, 6, 7, 8, 9);
// You have not passed any argument
// Pass at least two arguments
// 14
// 45

function counItems(x){
    return x.toString().length
}

console.log(counItems('10000'))
console.log(counItems(10000))
// 5
// 5

function sum(x=0,y=0,z=0){
    return x + y +z
}

console.log(sum(11,21))
console.log(sum(11,21,31))
// 32
// 63

// Generic

function Stack(){
    this.items = []

    this.push = function(item){
        this.items.push(item)
    }
}

const stack01 = new Stack()
stack01.push('NEW VALUE')
const stack02 = new Stack()
stack02.push(1000)

console.log(stack01)
console.log(stack02)
// Stack { items: [ 'NEW VALUE' ], push: [Function (anonymous)] }
// Stack { items: [ 1000 ], push: [Function (anonymous)] }


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


const user_01 = new User('Jesus','Ramirez') 
const programmmer_01 = new Programmer('Paolo','Pinedo','Python') 
console.log(user_01)
console.log(programmmer_01)
// User { name: 'Jesus', lastname: 'Ramirez', age: null }
// Programmer {
//   name: 'Paolo',
//   lastname: 'Pinedo',
//   age: null,
//   languaje: 'Python'
// }

function writeFullName(T){
    console.log(`${T.name} ${T.lastname} `)
}

writeFullName(user_01)
writeFullName(programmmer_01)
// Jesus Ramirez 
// Paolo Pinedo 