const express = require('express');
require("dotenv").config()
const{connection}=require("./Configs/db");
const { authenticate } = require('./Middleware/authenticate');
const { AirFreshnerRoute } = require('./Routes/AirFreshner.route');
const { BDRoute } = require('./Routes/BodyCare.route');
const { CandleRoute } = require('./Routes/Candle.route');
const { CartRoute } = require('./Routes/cart.route');
const { HandShopRoute } = require('./Routes/HandShop.Route');
const{UserRoute}=require("./Routes/user.route")
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