//const fs = require('fs');
import fs from 'fs';
//const path = 'src/files/productos.json';
import {__dirname} from '../../utils.js';

//class Contenedor {
    export class Contenedor {
        constructor(nombreArchivo) { 
            this.path = __dirname + '/database/files/' + nombreArchivo;
            // console.log('Contenedor path : ' , nombreArchivo);
        }

        save= async(object)  =>{   
            let data = await this.getAll();
            let oProducto = await [{ visitas: 1 }];
            if (data.length) {
                oProducto = await [{ visitas: data[data.length-1].visitas+1 }];
            } 
            data = oProducto;
            // console.log('oProducto : ' , oProducto);
            return await this.saveData(data) 
        }

        getAll= async()=> {
            return  await this.getData();
        }

        // getCount = async()=> {
        //     return await this.getAll().visitas;
        // }

        //////////////////////////////// Metodos Factorizados.
        getData= async()=> {
            try{
                if(fs.existsSync(this.path)){
                    const data = await fs.promises.readFile(this.path, 'utf-8');
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
                await fs.promises.writeFile(this.path, JSON.stringify(data, null, '\t'));
            }
            catch(e){
                console.warn(`Fix : ${e}`)
            }
        }  
    } 
//module.exports = Contenedor