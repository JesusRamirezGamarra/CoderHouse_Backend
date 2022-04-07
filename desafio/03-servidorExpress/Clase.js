const fs = require('fs');
// import fs from 'fs';

class Contenedor {
    constructor(nombreArchivo) {
        this.archivo = nombreArchivo
    }
    
    async getById (idNumber) {
        const data = await this.getAll();
        return data.find((element) => element.id == idNumber);
    }
    
    async getAll() {
        return  await this.getData();
    }
    


    async getData() {
        try{
            const data = await fs.promises.readFile(this.archivo, 'utf-8');
            return JSON.parse(data)
        }
        catch(e){
            console.warn(`Fix : ${e}`)
            return[];
        }
    }
} 
module.exports = Contenedor




