// Asociacion
class Person{
    constructor(name, lastname) {
        this.name = name
        this.lastname = lastname
    }
}

const LucioRamirez = new Person('Lucio', 'Ramirez')
const JesusRamirez = new Person('Jesus', 'Ramirez')

JesusRamirez.parent = LucioRamirez

console.log({LucioRamirez:LucioRamirez})
console.log({JesusRamirez:JesusRamirez})



// { LucioRamirez: Person { name: 'Lucio', lastname: 'Ramirez' } }
// {
//   JesusRamirez: Person {
//     name: 'Jesus',
//     lastname: 'Ramirez',
//     parent: Person { name: 'Lucio', lastname: 'Ramirez' }
//   }
// }