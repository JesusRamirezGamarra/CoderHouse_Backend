// Agregacion
// Component > Agregate

const company = {
    name :'BELCORP', 
    employees :[]
}

class Person{
    constructor(name, lastname) {
        this.name = name
        this.lastname = lastname
    }
}

const LucioRamirez = new Person('Lucio', 'Ramirez')
const JesusRamirez = new Person('Jesus', 'Ramirez')

company.employees.push(LucioRamirez)
company.employees.push(JesusRamirez)


console.log({LucioRamirez:LucioRamirez})
console.log({JesusRamirez:JesusRamirez})

console.log(company)


// { LucioRamirez: Person { name: 'Lucio', lastname: 'Ramirez' } }
// { JesusRamirez: Person { name: 'Jesus', lastname: 'Ramirez' } }
// {
//   name: 'BELCORP',
//   employees: [
//     Person { name: 'Lucio', lastname: 'Ramirez' },
//     Person { name: 'Jesus', lastname: 'Ramirez' }
//   ]
// }