
const persistence = "MONGODB";
let usersService;
switch(persistence){
    case "MEMORY":
        const {default:MemUser} = await import('./MemoryDAO/Users.js.js.js');
        usersService = new MemUser();
        break;
    case "MONGODB":
        const {default:MongoUser} = await import('./MongoDAO/Users.js.js');
        usersService = new MongoUser();
        break;
}

const services = {
    usersService,
}

export default services