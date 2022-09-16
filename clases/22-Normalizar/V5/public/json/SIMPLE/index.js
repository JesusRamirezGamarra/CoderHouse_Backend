import { normalize,denormalize, schema } from 'normalizr';
import chat from '../public/json/original.json' assert {type:"json"}
import {__dirname,___dirname} from './utils.js.js';
import fs from 'fs';

////////////Entities -- > Estandar definidos como plurales
// console.log(blogpost)

const author = new schema.Entity('author',
    {},
    {
        idAttribute: 'email'
    }
)

const textMessage = new schema.Entity('textMessage',{
    author:author
    }
)

const msge = new schema.Entity('message',{
    author:author,
    textMessage : [textMessage]
    },
    { idAttribute: '_id' }
)
const msgesSchema = new schema.Array(msge);




const outputPath = ___dirname + '/public/json/normalizr.json';
const normalizedData = normalize(chat,msgesSchema)
const denormalizedData = denormalize(normalizedData.result,msgesSchema,normalizedData.entities)

fs.writeFileSync(outputPath, JSON.stringify(normalizedData,null,'\t'));



console.log({OrignalFile:JSON.stringify(chat).length});
console.log({normalizedData:JSON.stringify(normalizedData).length});
console.log({denormalizedData:JSON.stringify(denormalizedData).length});
console.log('**********************************************************************')
console.log(JSON.stringify(normalizedData,null,'\t'));
// console.log(JSON.stringify(denormalizedData,null,'\t'));

const NormalizrFile = (new TextEncoder().encode(JSON.stringify(normalizedData))).length
const originalFile  = (new TextEncoder().encode(JSON.stringify(denormalizedData))).length

console.log({NormalizrFile:NormalizrFile})
console.log({originalFile:originalFile})