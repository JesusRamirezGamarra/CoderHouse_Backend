import knex from 'knex';

let db = knex({
    client: 'mysql' ,
    connection: {
        host:"p3nlmysql19plsk.secureserver.net",
        user:"rootCoderHouse",
        password:"1i4G@3ge",
        port:'3306',
        database:'RamirezGamarra_knex',
        ssl: false      
    }
})
try{
    let exists = await db.schema.hasTable('pets');
    if( exists ){
        await db('pets').del();
    }
    else{
        await db.schema.createTable('pets',(table)=>{
            table.primary('id');
            table.increments('id');            
            table.string('name',30).nullable(false);
            table.string('specie',20);
            table.integer('age');
        })
    }
}
catch(error){
    console.log(error);
}

export default db;
