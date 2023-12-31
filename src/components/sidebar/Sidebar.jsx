import axios from 'axios';
import {useState,useEffect } from 'react'
import {Link} from 'react-router-dom'

import "./sidebar.css" 


const Sidebar = () => {
  const[cat,setcat]=useState([]);
  
  useEffect(()=>{
    const fetchCat=async()=>{
      const res=await axios.get('http://localhost:5000/api/categories/');
      setcat([res.data][0]);
      
    }
    fetchCat();
  },[])

  
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="sideBarImage" src="https://images.unsplash.com/photo-1618832479592-21f8974d0c4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=964&q=80" alt="" />
            <p>Loores amet placeat fugadae in sint ex magni repreeriores qui temporibus exercitationem. Nesciunt, dolores.</p>
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
             {
                cat.map((c,index)=>(
                 
                    <li key={index} className='sidebarListItem'>{c.name}</li>
                
               ))
             }
           
            </ul>

        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
           <i className=" sidebarIcon fa-brands fa-square-facebook"></i>
           <i className=" sidebarIcon fa-brands fa-twitter"></i>
           <i className=" sidebarIcon fa-brands fa-pinterest-square"></i>
           <i className=" sidebarIcon fa-brands fa-instagram-square"></i>
          </div>
        </div>
        
    </div>
  )
}

export default Sidebar