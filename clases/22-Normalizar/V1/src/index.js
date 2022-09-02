import { normalize, schema } from 'normalizr';

const blogpost = {
    id:"1",
    title:"Normalizr en la semana chill",
    description:"Un tema mas para pasar chill la semanita :)",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis",
    author:{
        id:"1",
        name:"John Doe"
    },
    comments:[
        {
            id:"1",
            author:{
                id:"2",
                name:"Paco Jones"
            },
            content:"!odio Normalizr...!"
        },
        {
            id:"2",
            author:{
                id:"1",
                name:"John Doe"
            },
            content:"Ya se :( pero es un tema chill . Si no papa con queso!"
        },
        {
            id:"3",
            author:{
                id:"3",
                name:"Esteban Dido"
            },
            content:"Buen Post :) . Mas papa con queso no mas ..."
        },
        {
            id:"4",
            author:{
                id:"1",
                name:"John Doe"
            },
            content:"Gracias Esteban."
        }             
    ]
}

////////////Entities -- > Estandar definidos como plurales
// console.log(blogpost)

const author = new schema.Entity('authors');
const comment = new schema.Entity('comments',{
    author:author
})
const blog = new schema.Entity('posts',{
    author:author,
    comments:[comment]
})

const normalizedData = normalize(blogpost,blog)

console.log(JSON.stringify(blogpost).length);
console.log(JSON.stringify(normalizedData,null,'\t'));
