const mongoose=require('mongoose');
//mogoose sequence is used to do auto increment other wise we have to do it manually
//if want to do manually refer: https://www.youtube.com/watch?v=fdu0PXKzMo8
const autoIncrement=require('mongoose-sequence')(mongoose);
const ProductScema=new mongoose.Schema({
    _id:{//id of the product
        type:Number
    },
    name:{//name of the product
        type:String,
        required:true
    },
    quantity:{//quantity of the product
        type:Number,
        required:true
    }
});

ProductScema.plugin(autoIncrement);//adding autoincrement pluging to out Schema


const product=mongoose.model('Product',ProductScema);
module.exports=product;