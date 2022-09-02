class Persistencia {
    constructor(){
        // this.persistence=persistence
        // console.log('Persistencia')
    }
    usersService;    
    // constructor(){

    // }
    
    getPersistencia= async(persistence)=>{
        console.log('switch-persistence')
        switch(persistence){
            case "MEMORY":
                const {default:MemUser} = await import('./Memory/Users.memory.js');
                this.usersService = new MemUser();
                // console.log(this.usersService)
                break;
            case "MONGODB":
                const {default:MongoUser} = await import('./MongoDB/Users.mongodb.js');
                this.usersService = new MongoUser();
                // console.log(this.usersService)
                break;
        }
        // console.log(this.usersService)
        return this.usersService
    }

	// getPersistencia() {
	// 	return this.usersService;
	// }

}

export default Persistencia

// const instancia = new Persistencia();
// export default instancia.getPersistencia();

// const instancia = new Persistencia('MEMORY');
// export default instancia.getPersistencia();
// export default Persistencia
// export default Persistencia



// export let persistence = "";
// let usersService;

// switch(persistence){

//     case "MEMORY":
//         const {default:MemUser} = await import('./Memory/Users.memory.js');
//         usersService = new MemUser();
//         console.log(persistence)
//         break;
//     case "MONGODB":
//         const {default:MongoUser} = await import('./MongoDB/Users.mongodb.js');
//         usersService = new MongoUser();
//         console.log(persistence)
//         break;
//     // default:
//     //     const {default:MongoUserDB} = await import('./MongoDB/Users.mongodb.js');
//     //     usersService = new MongoUserDB();
//     //     console.log(persistence)
//     //     break;
// }
// export const services = {
//     usersService,
// }

// export default services



