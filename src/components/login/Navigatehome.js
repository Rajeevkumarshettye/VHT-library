import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navigatehome() {
    const navigate=useNavigate();
  return (
    <div className="footer">
    <button type="button" className="btn" onClick={()=>navigate("/home")} >
      Login
    </button>
  </div>
  )
}

export default Navigatehome



