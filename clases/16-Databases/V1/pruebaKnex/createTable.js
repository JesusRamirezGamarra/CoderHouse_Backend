import options from './options/mysql.js';
import knex from 'knex';

const database = knex(options);
database.schema.createTable('cars', table => {
    table.increments('id');
    table.primary('id');
    table.string('model',30);
    table.string('brand',30);
    table.string('color',25);
    table.float('price');
    table.integer('year');
})
.then(()=> cosole.log('Table created successfully'))
.catch(error => console.log(error))
.finally(()=> database.destroy());

console.log('Funciona');