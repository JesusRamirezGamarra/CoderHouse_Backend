const company = {
    name:'BELCORP',
    employees:[],
    sortEmployees:function(){}
}

////////////// TEST 01
// company.sortEmployees = 'Modificando ....' 
// company.sortEmployees() //TypeError: company.sortEmployees is not a function


// NO se debe adar acceso total a las propiedades o Metodos del objeto

function Company(name){
    let employees = []
    this.name = name

    this.getEmployees = function(){
        return employees
    }

    this.addEmployee =  function(employee){
        employees.push(employee)
    }
}

const company01 = new Company('Belcorp')
const company02 = new Company('UNIQUE')
console.log(company01)
console.log(company02)

// Company { name: 'Belcorp' }
// Company { name: 'UNIQUE' }


console.log(company01.getEmployees())
console.log(company02.getEmployees())
// []
// []

// Ocultamos el acceso a la let employees , el acceso es solo x el metodo.
console.log(company01.employees)
console.log(company02.employees)
// undefined
// undefined

company01.addEmployee({name:'Jose Martin'})
company01.addEmployee({name:'Washintong Arroyo'})

console.log(company01.getEmployees())
console.log(company02.getEmployees())
// [ { name: 'Jose Martin' }, { name: 'Washintong Arroyo' } ]
// []