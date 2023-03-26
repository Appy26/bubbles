const mongoose = require('mongoose');
const express = require('express');
const { AirFreshnerModel } = require('../Models/Airfreshner.model');


const AirFreshnerRoute=express.Router()

AirFreshnerRoute.post("/add",async (req,res)=>{
const payload=req.body;
try {
   const airfreshner=new AirFreshnerModel(payload)
   airfreshner.save()
  res.send({"msg":"Successfully added"})
} catch (error) {
    res.send({"msg":error.message})
}
})


AirFreshnerRoute.get("/get",async (req,res)=>{
    try {
        const AirFreshner=await AirFreshnerModel.find()
        console.log(AirFreshner)
        res.send({"data":AirFreshner})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

module.exports={AirFreshnerRoute}