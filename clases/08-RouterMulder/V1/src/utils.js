import multer from 'multer';


// import path from 'path';
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


//Pensar dónde se almacenará
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"src/public/img")
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname)
    }
})

const uploader = multer({storage:storage})


export default uploader;