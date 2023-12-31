import React from 'react'
import './register.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const Register = () => {
  const navigate=useNavigate();
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState(false);
  const handleSubmit = async(e)=>{
    e.preventDefault();
    setError(false);
    try{
      
      const res=await axios.post('http://localhost:5000/api/auth/register',{
     username,
     email,
     password
    })
    navigate('/login');
    console.log('res',res);
    }catch(error)
    {
      console.log('error-->',error);
      setError(true);
    }
  }

  
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form onSubmit={handleSubmit} className="registerForm">
            <label>Username</label>
            <input type="text" className="registerInput" 
            placeholder="Enter your username..." onChange={(e)=>setUsername(e.target.value)}/>
            <label>Email</label>
            <input type="text" className="registerInput" 
            placeholder="Enter your email..." onChange={(e)=>setEmail(e.target.value)}/>
            <label>Password</label>
            <input type="Password" className="registerInput" 
            placeholder="Enter your password..." onChange={(e)=>setPassword(e.target.value)}/>
            <button className="registerButton" type="submit">Register</button>
          { error && <span style={{color:"red",marginTop:"10px"}}>Something went wrong</span>}
        </form>

        <Link to='/login' className='link'><button className="registerLoginButton">Login</button></Link>
            

    </div>
  )
}

export default Register