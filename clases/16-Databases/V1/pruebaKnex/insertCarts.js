import options from './options/mysql.js';
import knex from 'knex';

const database = knex(options);

const cars = [
    {model:'316i',  brand:"bmw" ,color:"Black" , price:2000, year:2019},
    {model:'320',   brand:"bmw" ,color:"Black" , price:3000, year:2018},
    {model:'321',   brand:"bmw" ,color:"Black" , price:4000, year:2021},
    {model:'X3' ,   brand:"bmw" ,color:"Black" , price:5000, year:2022}
]

database('cars').insert(cars)
.then(result => console.log(result))
.catch(error => console.log(error))
.finally(()=> database.destroy());
