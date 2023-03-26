const mongoose = require('mongoose');

const airfreshnerSchema=mongoose.Schema({
    id:Number,
    name:String,
    price:Number,
    desc:String,
    image:String,
    type:String,
    fragnance:String,
})

const AirFreshnerModel=mongoose.model("Airfreshner",airfreshnerSchema)

module.exports={AirFreshnerModel}