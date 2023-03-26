const express = require('express');
require("dotenv").config()
const{connection}=require("./configs/db");
const { authenticate } = require('./middleware/authenticate');
const { AirFreshnerRoute } = require('./routes/AirFreshner.route');
const { BDRoute } = require('./routes/BodyCare.route');
const { CandleRoute } = require('./routes/Candle.route');
const { CartRoute } = require('./routes/cart.route');
const { HandShopRoute } = require('./routes/HandShop.Route');
const{UserRoute}=require("./routes/user.route")
const cors = require('cors');

const app=express()
app.use(cors())

app.use(express.json())

app.use("/user",UserRoute)
 

app.use("/bodycare",BDRoute)
app.use("/candle",CandleRoute)
app.use("/airfreshner",AirFreshnerRoute)
app.use("/handshop",HandShopRoute)
// app.use(authenticate)
app.use("/cart",CartRoute)




app.listen(process.env.PORT,async ()=>{
    try {
        await connection
        console.log("connected db")
    } catch (error) {
        console.log(error.message)
    }
    console.log("Server 8080")
})