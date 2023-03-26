const mongoose = require('mongoose');
const express = require('express');
const { BodyCareModel } = require('../Models/Bodycare.model');


const BDRoute=express.Router()

BDRoute.post("/add",async (req,res)=>{
const payload=req.body;
try {
   const bodycare=new BodyCareModel(payload)
   bodycare.save()
    res.send({"msg":"Successfully added"})
} catch (error) {
    res.send({"msg":error.message})
}
})


BDRoute.get("/get",async (req,res)=>{
    try {
        const BodyCare=await BodyCareModel.find()
        res.send({"data":BodyCare})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

module.exports={BDRoute}