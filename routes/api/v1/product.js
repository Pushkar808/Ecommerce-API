//product API V1
const express=require('express');
const Router=express.Router();//router to route the requested API calls
const productApiCont=require('../../../controller/api/v1/product_api');

Router.post('/create',productApiCont.createProduct);//to insert data to DB using POST
Router.get('/',productApiCont.showProducts);//to show all products
Router.delete('/:id',productApiCont.deleteProduct);//to delete the product acc. to id
Router.post('/:id/update_quantity/',productApiCont.updateQty);//to insert data to DB using POST


module.exports=Router;