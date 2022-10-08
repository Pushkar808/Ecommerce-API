# Ecommerce-API
Ecommerce API Design for an ecommerce platform admin to manage product inventory.

## Use postman tool to view and send request or response respectively.
#### link for postman: https://www.postman.com/downloads/ 

## Tools Used

1. Heroku : It is a free hosting platform for our node.js API
2. cloud.mongodb : It is used so that our DB can be used by our online application 
3. Postman: As stated above it is used to view and send request or response respectively.

## Setup Project on Localhost
  1. Uncomment code inside /config/db_config.js for localhost and comment the online DB configuration
  2. Install the required dependencies/modules using <code>npm install modulename</code> specified inside package.json
  3. Run the localhost server on the port:8000 and the you can do below steps 


## Using API 

### to use the API online use the <code>https://product-api-cn.herokuapp.com</code> and for localhost use <code>http://localhost:8000</code> after that add below things to view and send different types of data

#### To view all the products use <code> <REQUIRED URL>/products </code> and use <b>GET</b> request for this in the postman tool.

#### To create a new data on DB use <code> <REQUIRED URL>/products/create </code> and use <b>POST</b> request for this in the postman tool and to send the data goto Body > select Raw > then select JSON from dropdown inside .

#### To delete a product from DB use <code> <REQUIRED URL>/products/:id </code> where id is the id of the product to be deleted and use <b>DELETE</b> request for this in the postman tool.

#### To update a the product quantity use <code> <REQUIRED URL>/products/:id/update_quantity/?number=<newQuantity> </code> where newQuantity will be the new quanity for the product :id and use <b>POST</b> request for this in the postman tool.


:grinning::grinning::grinning::grinning::innocent::innocent::innocent:

  



