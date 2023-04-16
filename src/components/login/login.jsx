import React,{useState} from "react";
import loginImg from "../../login.svg";
import { Navigate } from "react-router-dom";
import Navigatehome from "./Navigatehome";

import axios from "axios";
 

export function Login (props) {
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const[loginStatus,setLoginStatus]=useState("");

  const login=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:4000/login",{
    username:username,
    password:password,
  }).then((response)=>{
    if(response.data.message){
      setLoginStatus(response.data.message);
    }
    else{
      setLoginStatus(response.data[0].email);
    }
  })
}

  
    return (
      <div className="base-container" ref={props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div> 
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={login}>
            Login
          </button>
        </div>
       
        <Navigatehome/>
      </div>
    );
  }


export default Login