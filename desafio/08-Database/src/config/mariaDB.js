module.exports = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'mymariadbpass',
    database: 'ecommerce',
  },
}


// If you want to use a MariaDB instance, you can use the mysql driver.
// http://knexjs.org/