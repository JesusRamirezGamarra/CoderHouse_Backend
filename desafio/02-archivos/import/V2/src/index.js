import { Contenedor }  from './managers/FileManager.js';

(   async () => {
    const productos = [
        {               
            title:'Escuadra',
            price:123.45,        
            thumbnail:'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'
        },
        {
            title:'Calculadora',
            price:234.56,
            thumbnail:'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png'
        } ,   
        {
            title:'Globo Terráqueo',
            price: 345.67,
            thumbnail:'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png'
        }
    ];


    // const pathRoot = require('path') 
    // const path =pathRoot.join(__dirname, '../files/pets.json');
    // const oContenedor = new Contenedor('path');
    // const oContenedor = new Contenedor('src/files/productos.txt');

    const oContenedor = new Contenedor();

    for (const oProducto of productos) {
        
        console.log(" await save (object= ", oProducto, ")   ", await oContenedor.save(oProducto) ?? '' );    
        // await oContenedor.save_FormaII(oProducto)
        // await oContenedor.save_FormaIII(oProducto)
    }
    console.log('\n====================================================================================\n')
        console.log(" await deleteById (object= ", productos.length, ")  ", await oContenedor.deleteById(productos.length)??'');
    console.log('\n====================================================================================\n')
    for (let i=1; i<=productos.length; i++) {
        const oProducto = await oContenedor.getById(i) 
        if(oProducto)console.log(" async getById (idNumber= ", i, ") \nreturn :  ", oProducto);
    }
    console.log('\n====================================================================================\n')
        console.log(`await oContenedor.deleteAll() ${await oContenedor.deleteAll()?? ''}`);
    console.log('\n====================================================================================\n')
    const oProducto = await oContenedor.getAll();
    console.log(" async getAll () \nreturn :  ", oProducto);

    }
)();