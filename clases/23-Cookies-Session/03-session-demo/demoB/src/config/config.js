//import firebaseConfig from '../coderhouse-ecommerce-ljrg-firebase.json' assert {type:"json"}
import __dirname from '../utils.js';

export default {
    fileSystem: {
        path: __dirname + '/assets/database/',
    },
    mongodb: {
        cnxStr:'mongodb+srv://coderhouse:Mishina2000@coderhouse-cluster-ljrg.qaohzev.mongodb.net/CoderHouse-Login?retryWrites=true&w=majority',
        options : {
            autoIndex: false, // Don't build indexes
            maxPoolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4 // Use IPv4, skip trying IPv6
        }
    }//,
    // firebase: {
    //     credential : firebaseConfig
    // },
}
