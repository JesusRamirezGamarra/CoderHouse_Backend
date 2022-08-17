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
// })
// .catch(error => console.log(error));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// database.schema.createTable('cars', table => {
//     table.increments('id');
//     table.primary('id');
//     table.string('model',30);
//     table.string('brand',30);
//     table.string('color',25);
//     table.float('price');
//     table.integer('year');
// })
// .then(()=> console.log('Table created successfully'))
// .catch(error => console.log(error))
// .finally(()=> database.destroy());


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const cars = [
    {model:'316i',  brand:"bmw" ,color:"Black" , price:2000, year:2019},
    {model:'320',   brand:"bmw" ,color:"Black" , price:3000, year:2018},
    {model:'321',   brand:"bmw" ,color:"Black" , price:4000, year:2021},
    {model:'X3' ,   brand:"bmw" ,color:"Black" , price:5000, year:2022}
]



database.schema.hasTable('cars')
.then( (exists) => {
    console.log({exists:exists})
    if (!exists) {  
        database.schema.createTable('cars', table => {
            table.increments('id');
            table.primary('id');
            table.string('model',30);
            table.string('brand',30);
            table.string('color',25);
            table.float('price');
            table.integer('year');
        })
    }
})
// .then(result => console.log(result))
.then(()=> console.log('Table created successfully'))
// .then(()=> database.destroy())
// .then(()=> database('cars').insert(cars))
// .then(()=> console.log('Insert Table successfully'))
// .then(()=> database.destroy())
.catch(error => console.log(error))
.finally(()=> database.destroy());


database('cars').insert(cars)
.then(result => console.log(result))
.catch(error => console.log(error))
.finally(()=> database.destroy());


database('cars').schema.createtabkeIfNotExists('cars', table => {
    table.increments('id');
    table.primary('id');
    table.string('model',30);
    table.string('brand',30);
    table.string('color',25);
    table.float('price');
    table.integer('year');
}