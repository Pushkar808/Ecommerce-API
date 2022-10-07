const express=require('express');
const bodyParser = require('body-parser');
const app=express();
const DBconfig=require('./config/db_config');//database configuration
//port to connect with port
const port=8000;
//converts request body to JSON, it also carries out some other functionalities like: converting form-data to JSON etc.
app.use(express.urlencoded({ extended: true }));
//including middleware for router to route all types of calls
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/',require('./routes'));


app.listen(port,(err)=>{
    if(err)
    console.log("Some error occured while connecting to server");
    console.log("Connected to server at port: "+port);
})