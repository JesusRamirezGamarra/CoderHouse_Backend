import admin from 'firebase-admin';
import firebaseConfig from './firebasekeytest.json' assert {type:"json"}
//console .log(firebaseConfig);
// admin.initializeApp({
//     credential: admin.credential.cert(firebaseConfig),
//     databaseURL:'https://coderhouse-backend-ljrg.firebaseio.com'
// })

import fs from 'fs';
const environment = async() => {
    let data = await fs.promises.readFile('./firebasekeytest.json','utf-8')
    const firebaseConfig = JSON.parse(data)
    //console.log(firebaseConfig)

    admin.initializeApp({
        credential: admin.credential.cert(firebaseConfig),
        databaseURL:'https://coderhouse-backend-ljrg.firebaseio.com'
    })
    
}
environment()

