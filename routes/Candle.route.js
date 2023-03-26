const mongoose = require('mongoose');
const express = require('express');
const {CandleModel}=require("../Models/Candle.model")


const CandleRoute=express.Router()

CandleRoute.post("/add",async (req,res)=>{
const payload=req.body;
try {
  const candle=new CandleModel(payload)
  candle.save()
    res.send({"msg":"Successfully added"})
} catch (error) {
    res.send({"msg":error.message})
}
})

CandleRoute.get("/get",async (req,res)=>{
    try {
        const candle=await CandleModel.find()
        res.send({"data":candle})
    } catch (error) {
        res.send({"msg":error.message})
    }
})


module.exports={CandleRoute}