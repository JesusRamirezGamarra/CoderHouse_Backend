import mongoose from 'mongoose'
import config from '../config/config.js'

// //----------* MONGOOSE CONNECTION *----------//


export const initDB_Event =  () => {
    
    const optionConnect = {
        autoIndex: false, // Don't build indexes
        maxPoolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        family: 4, // Use IPv4, skip trying IPv6
        keepAlive: true, // Keep
        // userNewUrlParser:true,
        useUnifiedTopology: true //
    }
    
    mongoose.connect(
        config.mongo.MONGO_URL,
        optionConnect
    )

    // CONNECTION EVENTS
    // When successfully connected
    mongoose.connection.on('connected',()=>{
        console.log(`Mongoose is connected ! worker process with ${process.pid} started`)
    })

    // If the connection throws an error
    mongoose.connection.on('error', (err)=> { 
        console.log('Mongoose default connection error: ' + err);
    }); 

    // When the connection is disconnected
    mongoose.connection.on('disconnected',  () =>{ 
        console.log('Mongoose default connection disconnected'); 
    });

    // If the Node process ends, close the Mongoose connection 
    process.on('SIGINT', ()=> {   
    mongoose.connection.close( ()=> { 
        console.log('Mongoose default connection disconnected through app termination'); 
        process.exit(0); 
        }); 
    }); 

    
}




export const initDB_Promise = async () => {
    
    const optionConnect = {
        autoIndex: false, // Don't build indexes
        maxPoolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        family: 4, // Use IPv4, skip trying IPv6
        keepAlive: true, // Keep
        // userNewUrlParser:true, deprecated
        useUnifiedTopology: true //

    }

    return mongoose.connect(
        config.mongo.MONGO_URL,
        optionConnect
    )
    .then((db)=> console.log(`Mongoose is connected ! worker process with ${process.pid} started`))       
    .catch((err)=> console.error('Mongoose could not connect.',err) )        
}


///When you connect you can pick up the error in the callback:
export const initDB_CallBack = () => {
    
        const optionConnect = {
            autoIndex: false, // Don't build indexes
            maxPoolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4, // Use IPv4, skip trying IPv6
            keepAlive: true, // Keep
            // userNewUrlParser:true,
            useUnifiedTopology: true //

        }

        return mongoose.connect(
            config.mongo.MONGO_URL,
            optionConnect,
            (err) =>{
                if(err){
                    console.log('Mongoose could not connect.',err)         
                }else{
                    console.log(`Mongoose is connected ! worker process with ${process.pid} started` )
                }
            }
        )        
}


export const initDB_TryCatch = () => {
    try{
        const optionConnect = {
            autoIndex: false, // Don't build indexes
            maxPoolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4, // Use IPv4, skip trying IPv6
            keepAlive: true, // Keep
            // userNewUrlParser:true,
            useUnifiedTopology: true //
        }

        return mongoose.connect(
            config.mongo.MONGO_URL,
            optionConnect,
            () =>{
                console.log(`Mongoose is connected ! worker process with ${process.pid} started` )
            }
        )        
    }
    catch(err){
        console.log('Mongoose could not connect.',err)
    }
}
