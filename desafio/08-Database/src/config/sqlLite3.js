module.exports = {
  client: 'sqlite3',
  connection: {
    filename: process.cwd() + '/src/database/ecommerce.sqlite',
  },
  useNullAsDefault: true,
}
