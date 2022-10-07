const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/EcommerceAPI");
const DB=mongoose.connection;

DB.on('error',err=>{logError(err);});
DB.once('open',()=>{
    console.log("Connected to MongoDB");
})