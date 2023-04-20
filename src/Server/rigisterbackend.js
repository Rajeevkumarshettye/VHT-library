const express =require("express");
//const bodyParser=require("body-parser")

const router = express.Router()

const connection=require('./db');

router.post('/',(req,res)=>{
  
  const username=req.body.username;
  const email=req.body.email;
  const Mobile_number=req.body.mobilenumber;
  const userpassword=req.body.userpassword;
  const role=req.body.role;

  connection.query("INSERT INTO `library`.`user_data` ( `username`, `email`, `mobilenumber`, `userpassword`, `role`) VALUES (?,?,?,?,?)",[username,email,Mobile_number,userpassword,role],
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



