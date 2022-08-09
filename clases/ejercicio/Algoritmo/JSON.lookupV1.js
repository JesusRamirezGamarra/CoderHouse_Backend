function lookup(obj, k) {
    for (var key in obj) {
        var value = obj[key];

        if (k == key) {
            return [k, value];
        }

        if (typeof(value) === "object" && !Array.isArray(value)) 
        {
            var y = lookup(value, k);
            if (y && y[0] == k) return y;
        }
        if (Array.isArray(value)) 
        {
                // for..in doesn't work the way you want on arrays in some browsers
                //
                for (var i = 0; i < value.length; ++i) {
                    var x = lookup(value[i], k);
                    if (x && x[0] == k) return x;
                }
        }
    }

return null;
}

// function type(object) {
//     var stringConstructor = "test".constructor;
//     var arrayConstructor = [].constructor;
//     var objectConstructor = {}.constructor;

//     if (object === null) {
//         return "null";
//     } else if (object === undefined) {
//         return "undefined";
//     } else if (object.constructor === stringConstructor) {
//         return "String";
//     } else if (object.constructor === arrayConstructor) {
//         return "Array";
//     } else if (object.constructor === objectConstructor) {
//         return "Object";
//     } else {
//         return "null";
//     }
// }


// var json = {
// "app": [
// {
//     "Garden": {
//     "Flowers": {
//         "Red flower": "Rose",
//         "White Flower": "Jasmine",
//         "Yellow Flower": "Marigold"
//     }
//     },
//     "Fruits": {
//         "Yellow fruit 1": "Mango",
//         "Green fruit 2": "Guava",
//         "White Flower 3": "groovy"
//     },
//     "Trees": {
//     "label": {
//         "Yellow fruit 2": 
//         [
//             {
//                 "type a": "Pumpkin",
//                 "type b": "Banana"
//             }
//         ],
//         "White Flower 2": [
//             "Bogan 1", 
//             "Bogan 2"
//         ]
//     }
//     }
// }]
// }


// console.log(JSON.stringify(json,null,4));
// console.log(`lookup(json, 'type a')`, lookup(json, 'type a'));
// console.log( `lookup(json, 'White Flower 2') `,lookup(json, 'White Flower 2') );

// console.log( `lookup(json, 'Yellow fruit 2') `,lookup(json, 'Yellow fruit 2') );




let CartsJson = 
    [	
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
            timestamp: 1659759319580,
            products: [
                    {
                        id: 14,
                        quantity: 5
                    },
                    {
                        id: 15,
                        quantity: 100
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
    ]


let itemProduct;
console.log(JSON.stringify(CartsJson,null,4));

// itemProduct = CartsJson.find( item => item.id == 2 ).products.find( item => item.id == 1 ).quantity = 10;
// console.log(`itemProduct`, itemProduct);

itemProduct = CartsJson.find( item => item.id === 2 );
console.log(`find itemProduct => (cart.id===2 ) :  `, itemProduct);
console.log(`find itemProduct => (cart.id===2 ).products :  `, itemProduct.products);

itemProduct = CartsJson.find( item => item.id === 2 ).products.find( item => item.id === 15 );
console.log(`find itemProduct => (cart.id===2 ). (product.id===15) :  `, JSON.stringify(itemProduct,null,4));
console.log(itemProduct.id)
console.log(itemProduct.quantity)



itemProduct = CartsJson.find( item => item.id === 2 ).products.filter ( item => item.id > 1 );
console.log(`find itemProduct => (cart.id===2 ). (product.id>1) :  `, JSON.stringify(itemProduct,null,4));





itemProduct =  lookup(CartsJson, 'products')
console.log(`lookup(json, 'products')`, itemProduct);