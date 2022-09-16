// Update with your config settings.
import {__dirname,___dirname} from './src/utils.js';

// console.log(___dirname)

const dbConfig = {
  development: {
    client: 'sqlite3',
    connection: { filename: __dirname + '/db/myDB.sqlite' },
    useNullAsDefault: true,
  },

  production: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      database: 'mocks',
    },
  },
};


export default dbConfig