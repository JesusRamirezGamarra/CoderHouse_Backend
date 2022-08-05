import fs from 'fs';
import { __dirname } from '../utils.js'

class ChatManager {
    constructor(){
        this.path = __dirname + '/files/messages.json';
    }
 
    getAll = async() =>{
        try{
            if(fs.existsSync(this.path)){
                let fileData = await fs.promises.readFile(this.path,'utf-8');
                let messages = JSON.parse(fileData);
                return messages;         
            }else{
                return [];
            }
 
        }catch(error){
            console.log("Error: " + error);
        }
    }

    addMessage = async(newMessage) =>{
        try{
            let fileData = await this.getAll();
            fileData.push(newMessage);
            await fs.promises.writeFile(this.path, JSON.stringify(fileData, null, '\t'));

        }catch(error){
            console.log("Error: " + error)
        }
    }
}

export {ChatManager};