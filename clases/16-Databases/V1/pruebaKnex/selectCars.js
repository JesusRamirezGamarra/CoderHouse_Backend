import options from './options/mysql.js';
import knex from 'knex';

const database = knex(options);


database('cars').select('*')
.then(result => { console.log(result[0]) ; return result  })
.then(result => { console.log(JSON.parse(JSON.stringify(result[0]))) ; return result })
.then(result =>   console.log(JSON.parse(JSON.stringify(result ))) )
.catch(error => console.log(error))
.finally(()=> database.destroy());


// const styles = [
//     'color:green',
//     'background: yellow',
//     'font-size: 30px',
//     'boder: 4px solid black',
//     'text-shadow: 2px 2px 2px black',
//     'padding: 10px',
// ].join(';')

// console.log('%cHello There', styles);
// console.log("%cThis is a %cConsole.log", "background:black ; color: white", "color: red; font-size:25px");