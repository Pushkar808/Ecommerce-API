//product API V1
const express=require('express');
const Router=express.Router();//router to route the requested API calls
const productApiCont=require('../controller/api/v1/product_api');

Router.use('/products',require('./api/v1/product'));//routing to the api

module.exports=Router;