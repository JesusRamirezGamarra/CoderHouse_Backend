function lookup(obj, k) {
    if(typeof(obj) != 'object') {
        return null;
    }
    var result = null;
    if(obj.hasOwnProperty(k)) {
        return obj[k];
    } else {
        for(var o in obj) {
        result = lookup(obj[o], k);
        if(result == null) continue;
        else break;
        }
    }
    return result;
}
// var json = {
// "app": [
//     {
//     "Garden": {
//         "Flowers": {
//         "Red flower": "Rose",
//         "White Flower": "Jasmine",
//         "Yellow Flower": "Marigold"
//         }
//     },
//     "Fruits": {
//         "Yellow fruit 1": "Mango",
//         "Green fruit 2": "Guava",
//         "White Flower 3": "groovy"
//     },
//     "Trees": {
//         "label": {
//         "Yellow fruit 2": [{"type a":"Pumpkin", "type b": "Banana"}],
//         "White Flower 2": ["Bogan 1", "Bogan 2"] 
//         }
//     }
//     }
// ]
// }


// var rs = lookup(json,'type a');
// console.log(`lookup(json,'type a') : `,rs);

// rs = lookup(json,'Yellow fruit 2');
// console.log(`lookup(json,'Yellow fruit 2') : `,rs);


let json = [	
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

var rs = lookup(json,'timestamp');
console.log(`lookup(json,'timestamp') : `,rs);


var rs = lookup(json,'id');
console.log(`lookup(json,'id') : `,rs);

rs = lookup(json,'Yellow fruit 2');
console.log(`lookup(json,'products') : `,rs);
