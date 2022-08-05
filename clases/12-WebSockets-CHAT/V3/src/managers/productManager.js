import fs from 'fs';
import { __dirname } from '../utils.js'

class ProductManager {
    constructor(){
        this.path = __dirname + '/files/products.json';
    }
 
    getAll = async() =>{
        try{
            if(fs.existsSync(this.path)){
                let fileData = await fs.promises.readFile(this.path,'utf-8');
                let products = JSON.parse(fileData);
                return products;
                
            }else{
                return [];
            }
 
        }catch(error){
            console.log("Error: " + error);
        }
    }

    getById = async (idNumber) =>{
        try{
            const fileData = await this.getAll();
            let product = fileData.find(prod => prod.id == idNumber);
            return product;

        }catch(error){
            console.log("Error: " + error)
        }
    }

    addProduct = async(newProd, oldProd) =>{
        try{
            let fileData = await this.getAll();

            if(oldProd){
                fileData[oldProd.id-1] = newProd;
                newProd.id = oldProd.id;
                await fs.promises.writeFile(this.path, JSON.stringify(fileData, null, '\t'));
                return `El producto ${oldProd.title} ha sido reemplazado por ${newProd.title}.`

            }else if(fileData.length === 0){
                newProd.id = 1;
                fileData.push(newProd);
                await fs.promises.writeFile(this.path, JSON.stringify(fileData, null, '\t'));
                return newProd

            }else{
                newProd.id = fileData[fileData.length-1].id + 1;
                fileData.push(newProd);
                await fs.promises.writeFile(this.path, JSON.stringify(fileData, null, '\t'));
                return newProd
            } 

        }catch(error){
            console.log("Error: " + error)
        }
    }

    deleteById = async (idNumber) =>{
        try {
            const fileData = await this.getAll();
            let product = fileData.find(prod => prod.id == idNumber)
            let productIndex = fileData.indexOf(product);
            fileData.splice(productIndex, 1);
            await fs.promises.writeFile(this.path, JSON.stringify(fileData, null, '\t'));
            return fileData;

        }catch(error){
            console.log("Error: " + error)
        }
    }

    deleteAll = async () =>{
        try{
            let fileData = await this.getAll();
            fileData = []
            await fs.promises.writeFile(this.path, JSON.stringify(fileData, null, '\t'));

        }catch(error){
            console.log("Error: " + error)
        }
    }

}

export {ProductManager};