let result =''

// let allCarts = [	
//     {
//         "id": 1,
//         "timestamp": 1659759319579,
//         "products": [
//                 {
//                     "id": 14,
//                     "quantity": 5
//                 },
//                 {
//                     "id": 15,
//                     "quantity": 1
//                 }        
//             ]
//     },
//     {
//         "id": 2,
//         "timestamp": 1659759319579,
//         "products": [
//                 {
//                     "id": 14,
//                     "quantity": 5
//                 },
//                 {
//                     "id": 15,
//                     "quantity": 1
//                 },
//                 {
//                     "id": 9,
//                     "quantity": 5
//                 },
//                 {
//                     "id": 1,
//                     "quantity": 10
//                 }          
//             ]
//     }
// ];



// result = allCarts.find( ({id}) => id === 1)
// console.log(result)

// result = allCarts.find( ({id}) => id === 1 &&  
//                                     id.products.find( ({id}) => id === 14)
//                                     )
// console.log(result)


let allCarts2 = [	
    {
        id: 1,
        timestamp: 1659759319579,
        products: [
                {
                    id: 14,
                    quantity: 5
                },
                {
                    id: 15,
                    quantity: 1
                }        
            ]
    },
    {
        id: 2,
        timestamp: 1659759319579,
        products: [
                {
                    id: 14,
                    quantity: 5
                },
                {
                    id: 15,
                    quantity: 1
                },
                {
                    id: 9,
                    quantity: 5
                },
                {
                    id: 1,
                    quantity: 10
                }          
            ]
    }
];


console.log(allCarts2)
console.log(`1er Nivel`)
result = allCarts2.find( (item) => item.id === 1)
console.log(result)


console.log(`2do Nivel`)
// result = allCarts2.find( (item) =>  
//             item.id === 1  &&  
//             item.products.find( (item) => item.id === 14) .id === 14
//             )
result = allCarts2.find( (item) =>  
            item.id === 14
            )
console.log(result)

// console.log(allCarts2)
// console.log(`1er Nivel`)
// result = allCarts2.find( ({id}) => id === 1)
// console.log(result)
// console.log(`2do Nivel`)
// console.log(result.products)
// result = result.products.find( ({id}) => { 
//                         id === 14
//                     })
// console.log(result)




// let allProducts = [	
//     {
//         "id": 14,
//         "timestamp": 1659759319579,
//         "name": "Weedle N.º013",
//         "description": "El aguijón de la cabeza es muy puntiagudo. Se alimenta de hojas oculto en la espesura de bosques y praderas.",
//         "code": "12fa3dd3-7c95-4e7f-a90f-ba3a32e3473d",
//         "thumbnail": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
//         "price": "12",
//         "stock": "100"
//     },
//     {
//         "id": 15,
//         "timestamp": 1659759385022,
//         "name": "Weedle N.º013",
//         "description": "El aguijón de la cabeza es muy puntiagudo. Se alimenta de hojas oculto en la espesura de bosques y praderas.",
//         "code": "12fa3dd3-7c95-4e7f-a90f-ba3a32e3473d",
//         "thumbnail": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
//         "price": "12",
//         "stock": "100"
//     }
// ];



// result = allProducts.find( ({code}) => code === '12fa3dd3-7c95-4e7f-a90f-ba3a32e3473d')
// console.log(result)

// const inventory = [
//     {name: 'apples', quantity: 2},
//     {name: 'cherries', quantity: 8},
//     {name: 'bananas', quantity: 0},
//     {name: 'cherries', quantity: 5},
//     {name: 'cherries', quantity: 15}
    
// ];

// result = inventory.find( ({ name }) => name === 'cherries' );
// console.log(result)