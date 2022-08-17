import options from './options/mysql.js';
import knex from 'knex';

const database = knex(options);

// database.schema.hasTable('cars')
// .then(async (exists) => {
//     if (!exists) {
//         if (this.items === 'cars') {
//             await this.knex.schema.createTable('cars', (table) => {
//             table.increments('id').primary()
//             table.string('model',30).notNullable();
//             table.string('brand',30);
//             table.string('color',25);
//             table.float('price').notNullable();
//             table.integer('year').notNullable();            
//             })
//             await this.knex(this.items).insert(initialProducts)
//         } else {
//             return this.knex.schema.createTable('cars', (table) => {
//                 table.increments('id').primary()
//                 table.string('email', 80).notNullable()
//                 table.string('date', 50).notNullable()
//                 table.string('messageText', 1000).notNullable()
//             })
//         }
//     }
// }).catch(error => console.log(error));



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


