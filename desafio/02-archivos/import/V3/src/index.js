import { Contenedor }  from './managers/FileManager.js';

const productService=  new Contenedor();


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

const environment = async() =>{

    for (const oProducto of productos) {
        
        console.log(" await save (object= ", oProducto, ")   ", await productService.save(oProducto) ?? '' );    
        // await productService.save_FormaII(oProducto)
        // await productService.save_FormaIII(oProducto)
    }
    console.log('\n====================================================================================\n')
        console.log(" await deleteById (object= ", productos.length, ")  ", await productService.deleteById(productos.length)??'');
    console.log('\n====================================================================================\n')
    for (let i=1; i<=productos.length; i++) {
        const oProducto = await productService.getById(i) 
        if(oProducto)console.log(" async getById (idNumber= ", i, ") \nreturn :  ", oProducto);
    }
    console.log('\n====================================================================================\n')
        console.log(`await deleteAll() ${await productService.deleteAll()?? ''}`);
    console.log('\n====================================================================================\n')
    const oProducto = await productService.getAll();
    console.log(" async getAll () \nreturn :  ", oProducto);
}

environment();