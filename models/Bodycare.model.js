const mongoose = require('mongoose');

const bodycareSchema=mongoose.Schema({
    id:Number,
    name:String,
    price:Number,
    desc:String,
    image:String,
    type:String,
    fragnance:String,
})

const BodyCareModel=mongoose.model("Bodycare",bodycareSchema)

module.exports={BodyCareModel}