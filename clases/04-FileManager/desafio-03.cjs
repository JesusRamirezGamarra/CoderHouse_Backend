const fs = require('fs');

const proceso= async() =>{
    try{
        let content =await fs.promises.readFile('package.json','utf8');
        // console.log(content);
        let objeto = JSON.parse(content);
        // console.log(objeto);
        objeto.name='papa';
        await fs.promises.writeFile('package.json',JSON.stringify(objeto,null,'\t'));
        console.log(objeto);
        // await fs.promises.writeFile('package.json',JSON.stringify([objeto]],null,'\t'));
        // let content = await fs.promises.readFile('archivoPromesa.txt','utf8');
        
    }catch(e){
        console.log(e)
    }
}

proceso();
