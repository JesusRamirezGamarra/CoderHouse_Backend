import options from './options/mysql.js';
import knex from 'knex';

const database = knex(options);

database('cars').where('price','>','400').delete()
.then(result => console.log(result)) // Retorna # de registros eliminados
.catch(err => console.log(error))
.finally(()=> database.destroy());