import React from 'react'
import "./topbar.css"
import {Link} from 'react-router-dom'
import {AppContext} from '../../context/Appcontext'
import {useContext} from 'react'
import toast from 'react-hot-toast';

const topbar = () => {
  let PF='https://backend-1ucg.onrender.com/images/'
  const {user,logout}=useContext(AppContext);
   
   const logoutHandler=()=>{
     logout();
     toast.success('logged out');
     window.location.replace('/');
   
   }
  return (
    <div className='top'>
      
        <div className="topleft">
        <i className=" topIcon fa-brands fa-square-facebook"></i>
        <i className=" topIcon fa-brands fa-twitter"></i>
        <i className=" topIcon fa-brands fa-pinterest-square"></i>
        <i className=" topIcon fa-brands fa-instagram-square"></i>
        </div>
        <div className="topCenter">
           <ul className="topList">
               <Link className='link' to='/'><li className='topListItem'>HOME</li></Link>
               <Link  className='link' to='/about'><li className='topListItem'>ABOUT</li></Link>
               <Link className='link' to='/contact'><li className='topListItem'>CONTACT</li></Link>
               <Link className='link' to='/write'><li className='topListItem'>WRITE</li></Link>
               <li className='topListItem' onClick={logoutHandler}>
                 {user && 'LOGOUT'}
               </li>
           </ul>
        </div>
        <div className="topRight">
             {
               user?( 
                 <Link to='/settings'>
                   <img className='topImage' src={PF+user.profilePic} alt="" />
                 </Link>
                 ):
               (
               <div className='logReg'>
                 <Link className='link' to='/login'>LOGIN</Link>
                 <Link className='link' to='/register'>REGISTER</Link>
               </div>)
             }
             <i className=" topSearchIcon fas fa-search"></i>
        </div>
    </div>
  )
}

export default topbar