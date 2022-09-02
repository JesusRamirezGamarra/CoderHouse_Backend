import { normalize,denormalize, schema } from 'normalizr';
import empresa from './empresa.json' assert {type:"json"}


//console.log(empresa)

const empleado = new schema.Entity('employees')
const company = new schema.Entity('empresas',{
    gerente:empleado,
    encargado:empleado,
    empleados:[empleado]
})

const normalizedData = normalize(empresa,company)
console.log(JSON.stringify(normalizedData,null,'\t'))

const denormalizedData = denormalize(normalizedData.result,company,normalizedData.entities)
console.log(JSON.stringify(denormalizedData,null,'\t'))