function get(data, key) {
    let str = JSON.stringify(data);
    let r = new RegExp(`${key}":"([^"]{1,})"`);
    
    let res = r.exec(str);
    
    return res && res.pop() || null;
}

var data = {
"app": [
    {
    "Garden": {
        "Flowers": {
        "Red flower": "Rose",
        "White Flower": "Jasmine",
        "Yellow Flower": "Marigold"
        }
    },
    "Fruits": {
        "Yellow fruit 1": "Mango",
        "Green fruit 2": "Guava",
        "White Flower 3": "groovy"
    },
    "Trees": {
        "label": {
        "Yellow fruit 2": [
            {
            "type a": "Pumpkin",
            "type b": "Banana"
            }
        ],
        "White Flower 2": [
            "Bogan 1",
            "Bogan 2"
        ]
        }
    }
    }
]
};


console.log('EXE get(data, "type a") : ', get(data, "type a"));
console.log('EXE White Flower 3: ', get(data, "White Flower 3"));
console.log('EXE Yellow Flower: ', get(data, "Yellow Flower"));
console.log('EXE Yellow fruit 2: ', get(data, "Yellow fruit 2"));


//https://stackoverflow.com/questions/38805134/search-key-in-nested-complex-json