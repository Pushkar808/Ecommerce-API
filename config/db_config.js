const mongoose=require("mongoose");
// mongoose.connect("mongodb://localhost:27017/EcommerceAPI");//localhostDB
mongoose.connect("mongodb+srv://ProductCnAPI:JJEk94sultaGbrTK@cluster0.0psqzzm.mongodb.net/test");//Online DB

const DB=mongoose.connection;

DB.on('error',err=>{logError(err);});
DB.once('open',()=>{
    console.log("Connected to MongoDB");
})