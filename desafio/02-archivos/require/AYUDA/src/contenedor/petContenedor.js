const fs = require('fs');

const path = 'src/files/pets.json';

const pathRoot = require('path') 
const path2 =pathRoot.join(__dirname, '../files/productos.json');


class PetContenedor {//clase contenedora
    getAllPets = async() => {
        try{
            if(fs.existsSync(path)){
                let fileData = await fs.promises.readFile(path,'utf8');
                let pets = JSON.parse(fileData);
                return pets;
            }else{
                return [];//no pets found
            }
        }catch (error) {
            console.log("cannot read file:"+ error)
            }
        }
        addPet = async(pet) =>{
            console.log(path)
            console.log(path2)
            console.log(__dirname)
            try{
                let pets = await this.getAllPets();
                if(pets.length===0){//there are no pets
                pet.id=1;
                pets.push(pet);
                await fs.promises.writeFile(path,JSON.stringify(pets,null,'\t'));   
                }else{
                    pet.id = pets[pets.length-1].id+1;
                    pets.push(pet);
                    await fs.promises.writeFile(path,JSON.stringify(pets,null,'\t'));         
                }                                       
            }catch(error){
                console.log("cannot write file: " +error);
            }     
        }
    }


module.exports = PetContenedor;