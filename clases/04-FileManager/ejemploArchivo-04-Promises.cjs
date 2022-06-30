const fs = require("fs");

const proceso= async() =>{
    try{
        await fs.promises.writeFile('archivoPromesa.txt','Hola desde promises');
        let content = await fs.promises.readFile('archivoPromesa.txt','utf8');
        console.log(content);
    }catch(e){
        console.log(e)
    }
}

proceso();