const express = require('express');
const jwt=require("jsonwebtoken")


const authenticate=(req,res,next)=>{
    const token=req.headers.authorization
    try {
        jwt.verify(token, 'book', function(err, decoded) {
           // console.log(decoded)
            // req.body.author=decoded.author 
            if(decoded){
                next()
            }
            else
            {
                res.send({"msg":"Please Login"})
            }
          });  
    } catch (error) {
        res.send({"msg":"Wrong Authentication Token Please Verify it"})
    }
    
}

module.exports={authenticate}