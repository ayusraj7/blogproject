import React from 'react'
import "./post.css"
import { Link } from 'react-router-dom'
const post = ({post}) => {
  
  const PF="http://localhost:5000/images/"
  return (
    <div className='post'>
        <img className="postImg" src={PF+post.photo} alt="" />
        <div className="postInfo">
          <div className="postCats">
              {
                post.categories.map((cat,index)=>(
                  <span className='postCat' key={index}>{cat.name}</span>
                ))
              }
          </div>
          <Link to={`/post/${post._id}`} className='link'>
            <span className="postTitle">{post.title}</span>
          </Link>
          
          <hr />
          <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='postDesc'>
            {post.desc}
        </p>
    </div>
   
  )
}

export default post