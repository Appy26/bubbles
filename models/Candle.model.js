const mongoose = require('mongoose');

const candleSchema=mongoose.Schema({
    id:Number,
    name:String,
    price:Number,
    desc:String,
    image:String,
    type:String,
    fragnance:String,
})

const CandleModel=mongoose.model("Candle",candleSchema)

module.exports={CandleModel}