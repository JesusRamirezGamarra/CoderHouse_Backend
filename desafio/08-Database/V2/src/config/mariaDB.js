
export const mariaDBOptions = {
    client:'mysql',
    connection:{
        host:"p3nlmysql19plsk.secureserver.net",
        user:"rootCoderHouse",
        password:"1i4G@3ge",
        port:'3306',
        database:'RamirezGamarra_knex',
        ssl: false        
    }
}

export default mariaDBOptions;


// http://knexjs.org/
// If you want to use CockroachDB or Redshift instance, you can use the pg driver.
// If you want to use a MariaDB instance, you can use the mysql driver.