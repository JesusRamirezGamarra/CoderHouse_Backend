import mongoose from 'mongoose';
//mongodb+srv://CoderHouse:Mishina2000@cluster0.eze7xzo.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://coderuser:123@clustercitoconquesoypap.jfmpome.mongodb.net/testAtlas?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://CoderHouse:Mishina2000@cluster0.eze7xzo.mongodb.net/testAtlas?retryWrites=true&w=majority',err=>{
    if(err) console.log(err);
    else console.log("Base conectada a Atlas");
});
