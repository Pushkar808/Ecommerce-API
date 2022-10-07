//controller for product API
const ProductScema = require('../../../models/productSchema');

module.exports.createProduct = async (req, res) => {
    try {
        let newProduct = await ProductScema.create({//inserting data into the DB
            name: req.body.name,
            quantity: req.body.quantity
        });
        if (newProduct) {//if the data is inserted the send this response
            return res.status(200).json({
                data: {
                    product: {
                        name: newProduct.name,//displaying only name
                        quantity: newProduct.quantity//and quantity
                    }
                }
            });
        }
    } catch (err) {//if any error occured
        return res.status(500).json({
            message: "Some error occurred",
            suggetion: "Please check name and type of fields"
        });
    }

}

module.exports.showProducts = (req, res) => {//controller to show all the products
    ProductScema.find({}).select('-__v').exec((err, products) => {//.to exclude(__v) we are deselcting it by -__v
        if (err) {//if err in fetching
            return res.status(500).json({
                message: "Some error occurred"
            });
        }
        return res.status(200).json({//else send the result as response
            data: {
                products: products
            }
        });
    })
}

//url: https://localhost:8000/products/:id
module.exports.deleteProduct = (req, res) => {//controller for deleting data
    ProductScema.findByIdAndDelete(req.params.id, (err, product) => {
        if (err) {//if err occuered
            return res.status(500).json({
                data: {
                    message: "Some error occured",
                    suggetion: "Check the id again"
                }
            });
        }
        if (product) {//if product found
            return res.status(200).json({
                data: {
                    message: "product deleted"
                }
            });
        }
        else {//if there is no product found
            return res.status(404).json({
                data: {
                    message: "Product Not Found"
                }
            })
        }
    })

}


//
module.exports.updateQty = (req, res) => {
    console.log(req.query.number)
    if(!req.query.number){//if forgot to add number query
        return res.status(500).json({//if some error occured the show that error
            data: {
                message: "Some error occured",
                suggetion: "please update /?number query parameter"
            }
        });
    }
    ProductScema.findByIdAndUpdate(req.params.id,{quantity:req.query.number}).select('-__v').exec((err,doc)=>{
        if(err){
            return res.status(500).json({//if some error occured the show that error
                data: {
                    message: "Some error occured",
                    suggetion: "Check id again",
                    error:err
                }
            });
        }
        return res.status(200).json({
            data: {//sending data as response
                product:doc,
                message: "updated successfully"
            },
            
        });
    });

}

