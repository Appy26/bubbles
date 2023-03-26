const mongoose = require('mongoose');
const express = require('express');
const { HandShopModel } = require('../Models/HandShop.model');


const HandShopRoute=express.Router()

HandShopRoute.post("/add",async (req,res)=>{
const payload=req.body;
try {
    const handshop=new HandShopModel(payload)
    handshop.save()
    res.send({"msg":"Successfully added"})
} catch (error) {
    res.send({"msg":error.message})
}
})


HandShopRoute.get("/get",async (req,res)=>{
    try {
        const HandShop=await HandShopModel.find()
        res.send({"data":HandShop})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

module.exports={HandShopRoute}