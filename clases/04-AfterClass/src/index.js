// const { Console } = require('console');
const PetManager = require('./managers/petManager.js')

const petService = new PetManager();
//petService.getAllPets()
const environment = async() =>{
    console.log('Getting Pets')
    let pets = await petService.getAllPets(); // Espera promesa de todo el metodo export / import + Termine operaciones
    console.log(pets); // Empty

    console.log('Adding a pet')
    let pet = {
        name:'orejitas Reloaded',
        specie:'fish'

    }
    await petService.addPet(pet);


    pets = await petService.getAllPets();
    // console.log(pets); // Empty
}

environment();