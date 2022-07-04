const PetContenedor = require('./contenedor/petContenedor.js');
//Importar una clase, no significa que la estoy instanciando

const petService = new PetContenedor();
const environment = async() =>{
    console.log("Getting pets");
    let pets = await petService.getAllPets();
    console.log(pets);

    console.log("adding a pet");
    let pet ={
        name:"orejitas",
        especie:"fish"
    }
    await petService.addPet(pet);
}

environment();