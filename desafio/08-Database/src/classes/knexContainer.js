const knex = require('knex')
const initialProducts = require('../database/initialProducts')

class SqlClient {
  constructor(config, items) {
    this.knex = knex(config)
    this.items = items
  }

  createTable() {
    console.error('createTable',items);
    try {
      this.knex.schema.hasTable(this.items).then(async (exists) => {
        if (!exists) {
          if (this.items === 'products') {
            await this.knex.schema.createTable(this.items, (table) => {
              table.increments('id').primary()
              table.string('title', 200).notNullable()
              table.float('price').notNullable()
              table.string('thumbnail', 4000)
            })
            await this.knex(this.items).insert(initialProducts)
          } else {
            return this.knex.schema.createTable(this.items, (table) => {
              table.increments('id').primary()
              table.string('email', 100).notNullable()
              table.string('date', 50).notNullable()
              table.string('messageText', 4000).notNullable()
            })
          }
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  async getAll() {
    try {
      return this.knex(this.items).select('*')
    } catch (error) {
      console.error(error)
    }
  }

  async getById(id) {
    try {
      return this.knex(this.items).select('*').where({ id: id })
    } catch (error) {
      console.error(error)
    }
  }

  async addItem(object) {
    try {
      return this.knex(this.items).insert(object)
    } catch (error) {
      console.error(error)
    }
  }

  async editById(id, field, data) {
    try {
      return this.knex.from(this.items).where('id', id).update(field, data)
    } catch (error) {
      console.error(error)
    }
  }

  async deleteById(id) {
    try {
      return this.knex.from(this.items).where('id', id).del()
    } catch (error) {
      console.error(error)
    }
  }

  async deleteAll() {
    try {
      return this.knex.from(this.items).del()
    } catch (error) {
      console.error(error)
    }
  }
//https://stackoverflow.com/questions/54999115/where-to-destroy-knex-connection
  close() {
    this.knex.destroy()
  }
}

module.exports = SqlClient
