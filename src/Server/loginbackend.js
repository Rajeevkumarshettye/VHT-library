const express =require("express");

const router=express.Router();

const connection=require('./db');


router.post('/',(req,res)=>{
  
    const username=req.body.username;   
    const password=req.body.password;

    
  
    connection.query("SELECT * FROM library.user_data WHERE username = ? AND userpassword =?",[username,password],
    (err,result)=>{
      if(err){
        req.setEncoding({err:err});
      }
      else{
        if(result.length>0){
          res.send(result);   
        }else{
        res.send({message:"WRONG USERNAME OR PASSWORD"})
      }
    }
    }
    );
    console.log(username);
    console.log(password);
    
  }) 

  module.exports=router