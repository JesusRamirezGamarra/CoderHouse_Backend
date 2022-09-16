import mongoose from 'mongoose';
import booksService from './models/Books.js';
import petService from './models/Pets.js';
import usersService from './models/Users.js';

const connection = mongoose.connect('mongodb+srv://coderhouse:Mishina2000@coderhouse-cluster-ljrg.qaohzev.mongodb.net/CoderHouse-Population?retryWrites=true&w=majority')


const environment = async() =>{


    if(false) // True solo para crear los registros .
    {
        const resultUsers = await usersService.insertMany([
            {name:"Mauricio",email:"correomau@correo.com",pets:[]},
            {name:"Diego",email:"corrediego@correo.com",pets:[]}
        ])

        const resultPets = await petService.insertMany([
            {name:"Patas",specie:"fish"},
            {name:"Orejas", specie:"bird"}
        ])
        console.log('Users ->',resultUsers);
        console.log('Pets ->',resultPets);
    }

    /////// Resultado
    // Users -> [
    //     {
    //         name: 'Mauricio',
    //         email: 'correomau@correo.com',
    //         pets: [],
    //         _id: new ObjectId("631e9c7bd14fd4656855ddcb"),
    //         __v: 0
    //     },
    //     {
    //         name: 'Diego',
    //         email: 'corrediego@correo.com',
    //         pets: [],
    //         _id: new ObjectId("631e9c7bd14fd4656855ddcc"),
    //         __v: 0
    //     }
    //     ]
    // Pets -> [
    //     {
    //         name: 'Patas',
    //         specie: 'fish',
    //         adopted: false,
    //         _id: new ObjectId("631e9c7ed14fd4656855ddcf"),
    //         __v: 0
    //     },
    //     {
    //         name: 'Orejas',
    //         specie: 'bird',
    //         adopted: false,
    //         _id: new ObjectId("631e9c7ed14fd4656855ddd0"),
    //         __v: 0
    //     }
    // ]

    if(false) // actualizacion en las collections : Users y Pets agregando las REF
    {
        // //Adopción
        // Diego adopta a Patas : 
        let user = await usersService.findById("631e9c7bd14fd4656855ddcc")
        let pet = await petService.findById("631e9c7ed14fd4656855ddcf")
        console.log('User ->',user);
        console.log('Pet ->',pet);

        // Update al user
        user.pets.push(pet._id);
        await usersService.updateOne({_id:user._id},{$set:user});
        // Update a la pet
        pet.adopted=true;
        pet.owner= user._id;
        await petService.updateOne({_id:pet._id},{$set:pet});
    }

    /////// Resultado
    // User -> {
    //     _id: new ObjectId("631e9c7bd14fd4656855ddcc"),
    //     name: 'Diego',
    //     email: 'corrediego@correo.com',
    //     pets: [],
    //     __v: 0
    //   }
    //   Pet -> {
    //     _id: new ObjectId("631e9c7ed14fd4656855ddcf"),
    //     name: 'Patas',
    //     specie: 'fish',
    //     adopted: false,
    //     __v: 0
    //   }

    if(false) // User Populate pets
    {
        // //Adopción
        let user = await usersService.findById("631e9c7bd14fd4656855ddcc")
        let userWithPopulate = await usersService.findById("631e9c7bd14fd4656855ddcc").populate('pets')

        console.log('User ->',user);
        console.log('User ->',userWithPopulate);

    }

    /////// Resultado
    // User -> {
    //     _id: new ObjectId("631e9c7bd14fd4656855ddcc"),
    //     name: 'Diego',
    //     email: 'corrediego@correo.com',
    //     pets: [ new ObjectId("631e9c7ed14fd4656855ddcf") ],
    //     __v: 0
    //   }
    /////// Populate : .populate('pets')
    //User -> {
    //     _id: new ObjectId("631e9c7bd14fd4656855ddcc"),
    //     name: 'Diego',
    //     email: 'corrediego@correo.com',
    //     pets: [
    //       {
    //         _id: new ObjectId("631e9c7ed14fd4656855ddcf"),
    //         name: 'Patas',
    //         specie: 'fish',
    //         adopted: true,
    //         __v: 0,
    //         owner: new ObjectId("631e9c7bd14fd4656855ddcc")
    //       }
    //     ],
    //     __v: 0
    //   }

    if(false) // User Populate pets
    {

        let pet = await petService.findById("631e9c7ed14fd4656855ddcf")
        let petWithPopulate = await petService.findById("631e9c7ed14fd4656855ddcf").populate('owner');
        console.log('pet ->',pet);
        console.log('pet ->',petWithPopulate);
        

    }

    /////// Resultado
    // pet -> {
    //     _id: new ObjectId("631e9c7ed14fd4656855ddcf"),
    //     name: 'Patas',
    //     specie: 'fish',
    //     adopted: true,
    //     __v: 0,
    //     owner: new ObjectId("631e9c7bd14fd4656855ddcc")
    //   }
    /////// Populate : .populate('owner')
    //pet -> {
    //     _id: new ObjectId("631e9c7ed14fd4656855ddcf"),
    //     name: 'Patas',
    //     specie: 'fish',
    //     adopted: true,
    //     __v: 0,
    //     owner: {
    //       _id: new ObjectId("631e9c7bd14fd4656855ddcc"),
    //       name: 'Diego',
    //       email: 'corrediego@correo.com',
    //       pets: [ new ObjectId("631e9c7ed14fd4656855ddcf") ],
    //       __v: 0
    //     }
    //   }
    
    if(false) 
    {
        let user = await usersService.findById("631e9c7bd14fd4656855ddcc")
        let pet = await petService.findById("631e9c7ed14fd4656855ddd0")
        console.log('User ->',user);
        console.log('Pet ->',pet);

        // Update al user
        user.pets.push(pet._id);
        await usersService.updateOne({_id:user._id},{$set:user});
        // Update a la pet
        pet.adopted=true;
        pet.owner= user._id;
        await petService.updateOne({_id:pet._id},{$set:pet});
        console.log('User ->',user);
        console.log('Pet ->',pet);
    }
    /////// Resultado
    // User -> {
    //     _id: new ObjectId("631e9c7bd14fd4656855ddcc"),
    //     name: 'Diego',
    //     email: 'corrediego@correo.com',
    //     pets: [
    //       new ObjectId("631e9c7ed14fd4656855ddcf"),
    //       new ObjectId("631e9c7ed14fd4656855ddd0")
    //     ],
    //     __v: 0
    //   }
    //   Pet -> {
    //     _id: new ObjectId("631e9c7ed14fd4656855ddd0"),
    //     name: 'Orejas',
    //     specie: 'bird',
    //     adopted: true,
    //     __v: 0,
    //     owner: new ObjectId("631e9c7bd14fd4656855ddcc")
    //   }
    //   User -> {
    //     _id: new ObjectId("631e9c7bd14fd4656855ddcc"),
    //     name: 'Diego',
    //     email: 'corrediego@correo.com',
    //     pets: [
    //       new ObjectId("631e9c7ed14fd4656855ddcf"),
    //       new ObjectId("631e9c7ed14fd4656855ddd0")
    //     ],
    //     __v: 0
    //   }
    //   Pet -> {
    //     _id: new ObjectId("631e9c7ed14fd4656855ddd0"),
    //     name: 'Orejas',
    //     specie: 'bird',
    //     adopted: true,
    //     __v: 0,
    //     owner: new ObjectId("631e9c7bd14fd4656855ddcc")
    //   }



    if(false){
        let result = await booksService.create({title:"libro1",author:"autor"})
        console.log(result);


    }

    // {
    //     title: 'libro1',
    //     author: 'autor',
    //     _id: new ObjectId("631fa9c41e8147be8e1e88c3"),
    //     __v: 0
    //   }    

    if(false){
        let user = await usersService.findById("631e9c7bd14fd4656855ddcc")
        user.books.push({book:"631fa9c41e8147be8e1e88c3",quantity:2});
        await usersService.updateOne({_id:user._id},{$set:user});
        console.log('User ->',user);
    }


    if(true)
    {
        let user = await usersService.findById("631e9c7bd14fd4656855ddcc").populate('pets').populate('books.book');
        await usersService.updateOne({_id:user._id},{$set:user});
        console.log('User ->',user);
        console.log('User ->',JSON.stringify( user,null,'\t'));
    }

    // User -> {
    //     _id: new ObjectId("631e9c7bd14fd4656855ddcc"),
    //     name: 'Diego',
    //     email: 'corrediego@correo.com',
    //     pets: [
    //       {
    //         _id: new ObjectId("631e9c7ed14fd4656855ddcf"),
    //         name: 'Patas',
    //         specie: 'fish',
    //         adopted: true,
    //         __v: 0,
    //         owner: new ObjectId("631e9c7bd14fd4656855ddcc")
    //       },
    //       {
    //         _id: new ObjectId("631e9c7ed14fd4656855ddd0"),
    //         name: 'Orejas',
    //         specie: 'bird',
    //         adopted: true,
    //         __v: 0,
    //         owner: new ObjectId("631e9c7bd14fd4656855ddcc")
    //       }
    //     ],
    //     __v: 0,
    //     books: [
    //       {
    //         book: null,
    //         quantity: 2,
    //         _id: new ObjectId("631faa9b3d9142d1409eee8d")
    //       }
    //     ]
    //   }
    //User -> {
    //           "_id": "631e9c7bd14fd4656855ddcc",
    //           "name": "Diego",
    //           "email": "corrediego@correo.com",
    //           "pets": [
    //                   {
    //                           "_id": "631e9c7ed14fd4656855ddcf",
    //                           "name": "Patas",
    //                           "specie": "fish",
    //                           "adopted": true,
    //                           "__v": 0,
    //                           "owner": "631e9c7bd14fd4656855ddcc"
    //                   },
    //                   {
    //                           "_id": "631e9c7ed14fd4656855ddd0",
    //                           "name": "Orejas",
    //                           "specie": "bird",
    //                           "adopted": true,
    //                           "__v": 0,
    //                           "owner": "631e9c7bd14fd4656855ddcc"
    //                   }
    //           ],
    //           "__v": 0,
    //           "books": [
    //                   {
    //                           "book": null,
    //                           "quantity": 2,
    //                           "_id": "631faa9b3d9142d1409eee8d"
    //                   }
    //           ]
    //   }
      
      
    mongoose.disconnect();
}

environment();