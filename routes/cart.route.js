const express = require('express');
const { CartModel } = require('../Models/cart.model');

const CartRoute=express.Router()


CartRoute.get("/get",async (req,res)=>{
    try {
       const cart= await CartModel.find()
       res.send({"data":cart})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

CartRoute.post("/add",async (req,res)=>{
const payload=req.body
try {
    const cart=new CartModel(payload)
    cart.save()
    res.send({"msg":"Added to cart"})
} catch (error) {
    res.send({"msg":error.message})
}
})

CartRoute.delete("/delete/:id", async (req,res)=>{
    const Id=req.params.id
    try {
        await CartModel.findByIdAndDelete({_id:Id})
        res.send({"msg":"Successfully Deleted"})
    } catch (error) {
        res.send({"msg":error.message})
    }
})


CartRoute.delete("/deleteall", async (req,res)=>{
    try {
        await CartModel.deleteMany({})
        res.send({"msg":"Successfully Placed Order"})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

module.exports={CartRoute}