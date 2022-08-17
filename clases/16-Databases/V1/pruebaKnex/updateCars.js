import options from './options/mysql.js';
import knex from 'knex';

const database = knex(options);

database('cars').where('price','5000').update({price:15000})
.then(()=> console.log('Updated'))
.catch(err => console.log(error))
.finally(()=> database.destroy());
