const express =require("express");
//const bodyParser=require("body-parser")

const router = express.Router()

const connection=require('./db');

router.post('/',(req,res)=>{
  
  const username=req.body.username;
  const email=req.body.email;
  const Mobile_number=req.body.mobilenumber;
  const password=req.body.password;
  const role=req.body.role;

  connection.query("INSERT INTO `library`.`user_data` ( `username`, `email`, `mobilenumber`, `password`, `role`) VALUES (?,?,?,?,?)",[username,email,Mobile_number,password,role],
  (err,result)=>{
    if(result){
      res.send(result)
    }
    else{
      console.log(err);
      res.send({message:"ENTER CORRECT ASKED DETAILS!"})
    }
  });
  
}) 

module.exports=router



