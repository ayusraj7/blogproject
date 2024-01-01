import React, { useEffect, useState } from 'react'
import "./Home.css"
import Header from '../../components/header/header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/Sidebar'
import axios from 'axios';
import { useLocation,Link } from 'react-router-dom'
const Home = () => {
  const[posts,setPosts]=useState([]);
  const {search}=useLocation();
  useEffect(()=>{
    const getData=async()=>{
      const response=await axios.get('https://backend-1ucg.onrender.com/api/posts' + search )
      setPosts(response.data);
     
    }
    getData();
  },[])
  return (
   <>
     <Header/>
    <div className='home'>
        <Posts posts={posts}/>
        <SideBar/>
        
    </div>
   </>
  )
}

export default Home
