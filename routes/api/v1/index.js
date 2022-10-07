//index API V1

const express=require('express');
const Router=express.Router();//router to route the requested API calls

Router.use('/products',require('./product'));//route all /product calls to product.js

module.exports=Router;