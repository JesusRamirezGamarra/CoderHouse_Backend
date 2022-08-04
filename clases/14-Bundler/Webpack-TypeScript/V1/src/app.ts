import express from 'express';
import Person from './Person';
import { getTime} from './lib/utils';



const app = express();
const PORT = 8080;

//const person01 = new Person('Juan', 'Perez');
const person01: Person = new Person("Coder", "House");

// app.get('/', (req:Request, res:Response)=>{
//     res.send({
//         time:getTime(),
//         name:person01.getFullName()
//         })
//     })
app.get("/", (req, res) => {
    res.send({
        time: getTime(),
        name: person01.getFullName(),
    });
});



app.listen(PORT,()=> console.log(`Server running on port ${PORT}`));
