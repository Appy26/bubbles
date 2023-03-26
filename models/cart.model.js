const mongoose = require('mongoose');

const cartSchema=mongoose.Schema({
    id:Number,
    name:String,
    price:Number,
    desc:String,
    image:String,
    type:String,
    fragnance:String,
})

const CartModel=mongoose.model("cart",cartSchema)

module.exports={CartModel}