const fs = require('fs')

try{
    fs.writeFileSync('fyh.txt',new Date().toLocaleString() );
}catch(e){
    console.log(e)
}

try{
    let content = fs.readFileSync('fyh.txt','utf8');
    console.log(content);
}catch(e){
    console.log('Error',e)
}