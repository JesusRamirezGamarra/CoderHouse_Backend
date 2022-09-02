import { normalize,denormalize, schema } from 'normalizr';
import holding from './holding.json' assert {type:"json"}

//console.log(holding)


const empleado = new schema.Entity('employees')
const company = new schema.Entity('empresas',{
    gerente:empleado,
    encargado:empleado,
    empleados:[empleado]
})
const holdingSchema = new schema.Entity('holdings',{
    companys:[company]
})

const normalizedData = normalize(holding,holdingSchema)
console.log(JSON.stringify(normalizedData,null,'\t'))


const denormalizedData = normalize(normalizeddata.result,holdingSchema,normalizedData.entities)
console.log(JSON.stringify(denormalizedData,null,'\t'))
