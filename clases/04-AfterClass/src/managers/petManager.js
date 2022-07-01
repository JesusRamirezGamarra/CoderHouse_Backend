const fs = require('fs');
 //const path ='src/files/pets.json';
const pathRoot = require('path') 
const path =pathRoot.join(__dirname, '../files/pets.json');

class PetManager { // class Contenedora
    // constructor(path){
        // NO todas las clases necesitan un constructor.
        // this.path = path;
    // }
    getAllPets = async() => {
        try{
            if(fs.existsSync(path)){
                let fileData = await fs.promises.readFile(path,'utf8')
                let pets = JSON.parse(fileData)
                // console.log(fileData);
                return pets;
            }else{
                return[]; // there are no pets
            }
        }
        catch(e){
            console.log('Cannot read File : ' + e);
        }
        
    }

    addPet = async(pet) => {
        try{
            let pets = await this.getAllPets();
            if (pets.length===0) { // there are no pets
                pet.id = 1;
                pets.push(pet);
                // console.log(path);
                await fs.promises.writeFile(path,JSON.stringify(pets,null,'\t'));
            }
            else{
                console.log(pets[pets.length-1].id + 1);
                pet.id = pets[pets.length-1].id + 1;
                pets.push(pet);
                // console.log(pets);
                await fs.promises.writeFile(path,JSON.stringify(pets,null,'\t'));                
            }
        }
        catch(e){
            console.log('Cannot Write File:'+ e);
        }
        
    }

}

module.exports = PetManager;
// 1 :  Instancia sirve para gestionar Multiples pets


// if (pets.length) {
//     const oPet= await { ...object, id: data[pets.length-1].id+1 };
//     pets.push(oPet);
// } else {
//     const oPet = await { ...object, id: 1 };
//     pets.push(oPet);
// }
// return await this.saveData(data) 