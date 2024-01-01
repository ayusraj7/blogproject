import React, { useState ,useContext} from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import axios from 'axios';
import {AppContext} from '../../context/Appcontext'
import toast from 'react-hot-toast'


const Login = () => {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const{fetch,loginstart,loginsuccess,loginfailure}=useContext(AppContext);
  const loginSubmit=async(e)=>{
    e.preventDefault();
    loginstart();
    try{
      
      const response=await axios.post('https://backend-1ucg.onrender.com/api/auth/login',{
        email,
        password
      })
     
      
      
      localStorage.setItem('user',JSON.stringify(response.data));
      loginsuccess();
      
      toast.success('login successfully',{duration: 4000,
  position: 'top-right'});
    }catch(error)
    {
      toast.error('login failed');
      loginfailure();
      console.log('error',error);
    }
  }
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form onSubmit={ loginSubmit} className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder="Enter your email..." onChange={(e)=>setEmail(e.target.value)} />
            <label>Password</label>
            <input type="Password" className="loginInput" placeholder="Enter your password..."  onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit' className="loginButton" disabled={fetch} >Login</button>
        </form>

        <Link className='link' to='/register'>
          <button className="loginRegisterButton">Register</button>
        </Link>
            

    </div>
  )
}

export default Login
