import MemoryContainer from './MemoryContainer.js';
import faker from 'faker';

export default class Users extends MemoryContainer {
    constuctor(){
        //super(...arguments);
        Super();
    }
    populate = (quantity=2) => {
        for(let i=0; i<quantity; i++){
            this.data.push({
                    name: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    color: faker.vehicle.color(),
                    phone: faker.phone.phoneNumber('11-####-####'),
                    email: faker.internet.email(),           
                    music : faker.music.genre(),
                })
        }
        return true;
    }


}
