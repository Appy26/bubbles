const mongoose = require('mongoose');

const handshopSchema=mongoose.Schema({
    id:Number,
    name:String,
    price:Number,
    desc:String,
    image:String,
    type:String,
    fragnance:String,
})

const HandShopModel=mongoose.model("Handshop",handshopSchema)

module.exports={HandShopModel}