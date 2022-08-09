// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);
// // expected output: 10

// console.log(b);
// // expected output: 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log(rest);
// // expected output: Array [30,40,50]


let products =  [
    {
		"id": 11,
		"timestamp": "1659739618951",
		"name": "Metapod N.º011",
		"description": "Como en este estado solo puede endurecer su coraza, permanece inmóvil a la espera de evolucionar",
		"code": "11fa3dd3-7c95-4e7f-a90f-ba3a32e3473d",
		"thumbnail": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
		"price": 180,
		"stock": 90
	},
	{
    "id": 12,
    "timestamp": "1659739618951",
    "name": "Butterfree N.º012",
    "description": "Aletea a gran velocidad para lanzar al aire sus escamas extremadamente tóxicas",
    "code": "12fa3dd3-7c95-4e7f-a90f-ba3a32e3473d",
    "thumbnail": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    "price": 180,
    "stock": 93
    }
]

let object = {id:12,quantity:10}
let item = products.find((item) => (item.id === object.id ))

let { stock, ...itemRest } = item;
console.log(stock)
console.log(itemRest)
stock = stock - object.quantity
console.log(stock)
//let { stock, ... rest }  =  item//{ item.stock - object.quantity, ...item };
//{id,timestamp,name,description,code,thumbnail,price, stock} = {...item,item.stock-object.quantity}

//console.log(`item:`,item)
let data = products.map((item) => (item.id !== object.id ? item : {...itemRest,stock }    ))
// products.map((item) => (item.id !== object.id ? item : object))
console.log(data)





// https://carlosescorche.com/blog/desestructuracion-de-objetos-en-javascript