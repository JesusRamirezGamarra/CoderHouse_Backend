const Contenedor = require('./Contenedor/contenedor.js')

const servicioProductos = new Contenedor();
const aplicacion = async() =>{
    console.log("Getting Producs")
    let lista = await servicioProductos.getAll();
    //console.log(lista);

    console.log("Adding Produc")
    let producto = {
        title: "teclado",
        prices: "52500400",
        thumbnail: "www.thumbnail.com/Teclado/"
    }
    //await servicioProductos.save(producto)
    await servicioProductos.deleteById(2)
        
}
//servicioProductos.getAll()
//servicioProductos.getById(6);
aplicacion()
