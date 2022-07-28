import fs from 'fs';
import {__dirname} from '../../utils.js';
const path = __dirname + '/database/products.json';

//class Contenedor {
    export class Contenedor {
        save= async(object)  =>{   
            const data = await this.getAll();
            if (data.length) {
                const oProducto= await { ...object, id: data[data.length-1].id+1 };
                data.push(oProducto);
            } else {
                const oProducto = await { ...object, id: 1 };
                data.push(oProducto);
            }
            return await this.saveData(data) 
        }
        getById= async(idNumber) => {
            const data = await this.getAll();
            return data.find((element) => element.id == idNumber);
        }
        getAll= async()=> {
            return  await this.getData();
        }
        deleteById= async(idNumber)=> {
            const data = await this.getAll();
            const nuevoArray = data.filter( oProduto => oProduto.id != idNumber);
            await this.saveData(nuevoArray);
        }
        deleteAll= async()=> {
            const arrayVacio = []
            await this.saveData(arrayVacio);
        }
    
        //////////////////////////////// Metodos Factorizados.
        getData= async()=> {
            try{
                if(fs.existsSync(path)){
                    const data = await fs.promises.readFile(path, 'utf-8');
                    return JSON.parse(data)
                }else{
                    return [];
                }
            }
            catch(e){
                console.warn(`Fix : ${e}`)
                return[];
            }
        }
        saveData= async(data)=> {
            try{
                await fs.promises.writeFile(path, JSON.stringify(data, null, '\t'));
            }
            catch(e){
                console.warn(`Fix : ${e}`)
            }
        }
    
        //////////////////////////////// Metodo para preguntar al tutor x rendimiento 
        save_FormaII=async(product)=> {   
            const productos = await this.getAll();
            let id;
            if (productos.length === 0) id = 1;
            else id = productos[productos.length - 1].id + 1
            const productoNuevo = {
                id: id,
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail
            };
            productos.push(productoNuevo)
            await this.saveData(productos) 
            return productoNuevo.id      
        }
    
        save_FormaIII=async(product) =>{   
            const productos = await this.getAll();
    
            id = (productos.length === 0) ? 1 : productos[productos.length - 1].id + 1;
            const productoNuevo = {id:id,title:product.title,price: product.price,thumbnail: product.thumbnail}
    
            productos.push(productoNuevo)
            await this.saveData(productos) 
            return productoNuevo.id      
        }    
    } 
//module.exports = Contenedor




