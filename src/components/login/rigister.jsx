import React, {useState} from "react";
import loginImg from "../../login.svg";
import axios from "axios";

 

export function Register (props) {
  
  const[username,setUsername]=useState("")
  const[mobilenumber,setMobilenumber]=useState("")
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("")
  const[role,setRole]=useState("")
  const[rigisterStatus,setRegisterStatus]=useState("");
  
    
     const rigister=(e)=>{
      e.preventDefault();
      axios.post("http://localhost:4000/rigister",{
      username:username,
      email:email,
      mobilenumber:mobilenumber,
      password:password,
      role:role,
      }).then((response)=>{
        if(response.data.message){
          setRegisterStatus(response.data.message);
        }
        else{
          setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
        }
      })


     }
    return (
      <div className="base-container" ref={props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">User name</label>
              <input type="text" name="username" onChange={(e)=>{setUsername(e.target.value)}}placeholder="User name" />
            </div>
            <div className="form-group">
              <label htmlFor="mobile-number">Mobile number</label>
              <input className=" number-to-text"type="number" name="number" onChange={(e)=>{setMobilenumber(e.target.value)}} placeholder="Mobile number" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}}placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="what are you" id="role">What are you?</label>
              <select htmlFor="Role" id="optionrole" onChange={(e)=>{setRole(e.target.value)}}>
              <option value="librarian">Librarian</option>
              <option value="student">Student</option>
              </select>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={rigister}>
            Register
          </button>
        </div>
      </div>
    );
  }


export default Register