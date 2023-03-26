const express = require('express');

const { UserModel } = require('../Models/user.model');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');



const UserRoute=express.Router()


UserRoute.post("/register", async(req,res)=>{
   const{email,password,name}=req.body
  try {
    
      bcrypt.hash(password, 5, async(err, hash) =>{
        // Store hash in your password DB.
        if(err){
            res.send({"msg":"Enter valid email and password"})
        }
        else
        { 
            const user=new UserModel({email,password:hash,name})
            user.save()
            res.send({"msg":"successfully registereed"})
        }
    });
    
    
  } catch (error) {
    res.send({"msg":error.message})
  }
 
})



UserRoute.post("/login",async (req,res)=>{
 const{email,password}=req.body;
try {
    const author=await UserModel.find({email})
  if(author.length>0){
    bcrypt.compare(password, author[0].password, function(err, result) {
        if(result){
            var token = jwt.sign({ author: author[0]._id }, 'book',{expiresIn:"12h"})
            res.send({"msg":"Login Successfull","token":token})
        }
        else
        {
            res.send({"msg":"wrong password"})
        }
    })
  }
  else
  {
    res.send({"msg":"wrong email"})
  }
    
} catch (error) {
    res.send({"msg":error.message})
}
})

module.exports={UserRoute}