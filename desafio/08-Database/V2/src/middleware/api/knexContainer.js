import knex from 'knex';
import initialProducts from '../../database/initialProducts.js';

export class SqlClient {
    constructor(config, items) {
      this.knex = knex(config)
      this.items = items
    }
  
    createTable = async() => {
      try {
        let message;
        this.knex.schema.hasTable(this.items)
        .then( async(exists) => {
          // console.log({exists:exists})
          if (!exists) {
            if (this.items === 'products') {
              message = `Table products created successfully with initial products`;
              console.log({Method:'createTable()',Description:message})
              await this.knex.schema.createTable(this.items, (table) => {
                table.increments('id').primary()
                table.string('title', 200).notNullable()
                table.float('price').notNullable()
                table.string('thumbnail', 4000)
              })
              
            } 
            else {
              message = `Table messages created successfully`;
              console.log({Method:'createTable()',Description:message})
              await this.knex.schema.createTable(this.items, (table) => {
                table.increments('id').primary()
                table.string('email', 100).notNullable()
                table.string('date', 50).notNullable()
                table.string('messageText', 4000).notNullable()
              })
            }
          }
        })
        .then(()=> console.log({Method:'createTable()',Description:message}))
        .catch(error => console.log({Method:'createTable()',Server: error}))
        .finally(()=> this.knex.destroy());

        // this.knex.insert(initialProducts).into('products')
        // .catch(error => console.log({Method:'createTable() - insert',Server: error}))

      } catch (error) {
        console.log({Method:'createTable()',Server: error})
      }
    }

    createInitialProducts = async() => {
      try {
        this.knex.insert(initialProducts).into('products')
          .then(()=> console.log({Method:'createInitialProducts()',Description:`Table ${this.items} insert successfully`}))
          .catch(error => console.log({Method:'createInitialProducts()',Server: error}))
          .finally(()=> this.knex.destroy());
      } catch (error) {
        console.log({Method:'createInitialProducts()',Server: error})
      }
    }

    save= async(object) =>{
      try {
        return this.knex(this.items).insert(object)
                .then(()=> console.log({Method:'save= async(object) ',Description:`Table ${this.items} insert successfully`}))
                .catch(error => console.log({Method:'save= async(object) ',Server: error}))
                .finally(()=> this.knex.destroy());        
      } catch (error) {
        console.log({Method:'save= async(object) ',Server: error})
      }
    }

    getById= async(id) =>{
      try {
        return this.knex(this.items).select('*').where({ id: id })
                .then((result)=> {
                    console.log({Method:'getById(id)',Description:`Table ${this.items} select successfully`})
                    return result
                })
                .catch(error => {
                    console.log({Method:'getById(id)',Server: error})
                    return []
                })
                .finally(()=> this.knex.destroy());
      } catch (error) {
        console.log({Method:'getById(id)',Server: error})
      }
    }
  
    getAll= async()=> {
      try {
        return this.knex(this.items).select('*')
                .then((result)=> {
                    console.log({Method:'getAll()',Description:`Table ${this.items} select successfully`})
                    return result
                })
                .catch(error => {
                  console.log({Method:'getAll()',Server: error})
                  return []
                })
                .finally(()=> this.knex.destroy());
      } catch (error) {
        console.log({Method:'getAll()',Server: error})
      }
    }
  
    deleteById = async(id) => {
      try {
        return this.knex.from(this.items).where('id', id).del()
                .then(()=> console.log({Method:'deleteById(id)',Description:`Table ${this.items} delete successfully`}))
                .catch(error => console.log({Method:'deleteById(id)',Server: error}))
                .finally(()=> this.knex.destroy());      
      } catch (error) {
        console.log({Method:'deleteById(id)',Server: error})
      }
    }
  
    deleteAll = async() => {
      try {
        return this.knex.from(this.items).del()
                .then(()=> console.log({Method:'deleteAll()',Description:`Table ${this.items} delete successfully`}))
                .catch(error => console.log({Method:'deleteAll()',Server: error}))
                .finally(()=> this.knex.destroy());             
      } catch (error) {
        console.log({Method:'deleteAll()',Server: error})
      }
    }









  
    async addItem(object) {
      try {
        return this.knex(this.items).insert(object)
                .then(()=> console.log({Method:'addItem(object)',Description:`Table ${this.items} insert successfully`}))
                .catch(error => console.log({Method:'addItem(object)',Server: error}))
                .finally(()=> this.knex.destroy());        
      } catch (error) {
        console.log({Method:'addItem(object)',Server: error})
      }
    }
  
    async editById(id, field, data) {
      try {
        return this.knex.from(this.items).where('id', id).update(field, data)
                .then(()=> console.log({Method:'editById(id, field, data)',Description:`Table ${this.items} update successfully`}))
                .catch(error => console.log({Method:'editById(id, field, data)',Server: error}))
                .finally(()=> this.knex.destroy());           
      } catch (error) {
        console.log({Method:'editById(id, field, data)',Server: error})
      }
    }
  

  //https://stackoverflow.com/questions/54999115/where-to-destroy-knex-connection
    close() {
      this.knex.destroy()
        .then(()=> console.log({Method:'close()',Description:`destroy() connection for Table ${this.items} successfully`}))
    }
  }

export default SqlClient;