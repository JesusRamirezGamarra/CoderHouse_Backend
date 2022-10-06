// export  const config = {
//     PORT : process.env.PORT,
//     MONGODB:{
//         MONGO_PORT:process.env.PORT||3000,
//         MONGO_USER:process.env.USER,
//     }
// }



// export default config

export  default  {
    
    APP:{
        MODE:process.env.MODE||'PRODUCCION',
        PORT : process.env.PORT||8080,
        // DEBUG : process.env.DEBUG|| TRUE,
    },
    MONGODB:{
        MONGO_PORT:process.env.MONGO_URL,
        MONGO_USER:process.env.MONGO_USER,
    }
}
