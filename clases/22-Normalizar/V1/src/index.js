import { normalize,denormalize, schema } from 'normalizr';

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
                name:"Paco Jones",
                age: "24",
                alias: "Paco taco",
                avatar: "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/adult_people_avatar_man_male_employee_tie-128.png"                
            },
            content:"!odio Normalizr...!"
        },
        {
            id:"2",
            author:{
                id:"1",
                name:"John Doe",
                age: "25",
                alias: "John",
                avatar: "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/adult_people_avatar_man_male_employee_tie-128.png"                                
            },
            content:"Ya se :( pero es un tema chill . Si no papa con queso!"
        },
        {
            id:"3",
            author:{
                id:"3",
                name:"Esteban Dido",
                age: "50",
                alias: "tban",
                avatar: "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/adult_people_avatar_man_male_employee_tie-128.png"                                
            },
            content:"Buen Post :) . Mas papa con queso no mas ..."
        },
        {
            id:"4",
            author:{
                id:"1",
                name:"John Doe",
                age: "25",
                alias: "John",
                avatar: "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/adult_people_avatar_man_male_employee_tie-128.png"                                
            },
            content:"Gracias Esteban."
        },
        {
            id:"5",
            author:{
                id:"1",
                name:"John Doe",
                age: "25",
                alias: "John",
                avatar: "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/adult_people_avatar_man_male_employee_tie-128.png"                                
            },
            content:"Gracias Esteban."
        },
        {
            id:"6",
            author:{
                id:"1",
                name:"John Doe",
                age: "25",
                alias: "JeJohnssus",
                avatar: "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/adult_people_avatar_man_male_employee_tie-128.png"                                
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
const denormalizedData = denormalize(normalizedData.result,blog,normalizedData.entities)

console.log({OrignalFile:JSON.stringify(blogpost).length});
console.log({normalizedData:JSON.stringify(normalizedData).length});
console.log({denormalizedData:JSON.stringify(denormalizedData).length});
console.log('**********************************************************************')
console.log(JSON.stringify(normalizedData,null,'\t'));
// console.log(JSON.stringify(denormalizedData,null,'\t'));

const NormalizrFile = (new TextEncoder().encode(JSON.stringify(normalizedData))).length
const originalFile  = (new TextEncoder().encode(JSON.stringify(denormalizedData))).length

console.log({NormalizrFile:NormalizrFile})
console.log({originalFile:originalFile})