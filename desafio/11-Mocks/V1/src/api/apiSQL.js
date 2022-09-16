import knex from 'knex';
import dbConfig from '../../knexfile.js';

class DB {
  constructor() {
    const environment = process.env.NODE_ENV || 'development';
    console.log(`SETTING ${environment} DB`);
    const options = dbConfig[environment];
    this.connection = knex(options);
  }

  init() {
    ///////////////MENSAJES////////////////
    this.connection.schema.hasTable('mensajes')
      .then((exists) => { 
        if (exists) return;
        console.log('Creamos la tabla mensajes!');

        return this.connection.schema.createTable(
              'mensajes',
              async (mensajesTable) => {
                mensajesTable.increments();
                mensajesTable.string('nombre').notNullable();
                mensajesTable.string('mensaje').notNullable();
                mensajesTable.timestamps(true, true);
          }
        )
      })

    ///////////////////PRODUCTOS/////////////////////////
    this.connection.schema.hasTable('productos')
      .then((exists) => { 
        if (exists) return;
        console.log('Creamos la tabla productos!');

        return this.connection.schema.createTable(
              'productos',
              async (productosTable) => {
                  productosTable.increments();
                  productosTable.string('nombre').notNullable();
                  productosTable.integer('precio');
                  productosTable.string('thumbnail').notNullable();
                  productosTable.timestamps(true, true);
          }
        )
      })
  }

////////////////////////////////MÉTODOS/////////////////////
  async get(tableName,id) {
    if (id) return this.connection(`${tableName}`).where('id', id);

    return this.connection(`${tableName}`).select('*')
  }

  async post(tableName, data) {

    return await this.connection(`${tableName}`)
      .insert(data)
      //.then(row => {return row[0]})
      //.then(() => console.log('Data inserted!'))
      
        // .returning('*')
        // .then(data=>{
        //   return {data}
        // })
      .catch((err) => {
        console.log('There was an error inserting table productos');
        console.log(err);
      })
  }


  async update(tableName, id, data) {
    return await this.connection(`${tableName}`).where('id', id).update(data);
  }

  delete(tableName, id) {
    this.connection(`${tableName}`).del() .where('id', id) 
    .then(() => { console.log(`Element deleted`); })
  }
}
export const DBService = new DB();
