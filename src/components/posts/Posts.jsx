import React from 'react'
import "./posts.css"
import Post from '../post/post'

const posts = ({posts}) => {
 
  return (
    <div className='posts'>
        {
          posts.map((element,index)=>(
            <Post post={element} key={index}/>
          ))
        }
        
    </div>
  )
}
export default posts