import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"src/public/img")
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname)
    }
})

export const uploader = multer({storage:storage})


const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);


//export default __dirname;
