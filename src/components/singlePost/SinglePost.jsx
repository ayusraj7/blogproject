import React, { useState, useContext, useEffect } from 'react'
import "./SinglePost.css"
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/Appcontext'
import axios from 'axios';
export const SinglePost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const PF = "https://backend-1ucg.onrender.com/images/"
  const { user } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.split('/')[2];



  const [post, setPost] = useState('');
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('https://backend-1ucg.onrender.com/api/posts/' + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    }
    getPost();
  }, [path])


  const handleDelete = async () => {
    try {
      await axios.delete(`https://backend-1ucg.onrender.com/api/posts/${path}`, {
        data: { username: user?.username },
      });
      navigate('/');
    } catch (error) {
      console.log('error', error);
    }

  }

  const handleUpdate = async () => {
    try {
      await axios.put(`https://backend-1ucg.onrender.com/api/posts/${path}`, {
        username: user?.username,
        title,
        desc
      });
      window.location.reload();
      //or you can use navigate(0);
    } catch (error) {
      console.log('error', error);
    }
  }



  return (
    <div className='singlepost'>
      <div className="singlePostWrapper">
        <img src={PF + post.photo} alt="image" className="singlePostImg" />
        {
          updateMode ? <input className='singlePostTitleInput' autoFocus type="text" value={title} onChange={(e) => setTitle(e.target.value)} /> :
            (<h1 className="singlePostTitle">{title}
              {
                post.username === user?.username && (
                  <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                    <i className='singlePostIcon far fa-trash-alt' onClick={handleDelete}></i>
                  </div>
                )
              }
            </h1>)
        }

        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author:
            <Link className='link' to={`/?user=${post.username}`}>
              <b>{post.username} </b>
            </Link></span>
          <span className='singlePostDate'> 1 hour ago </span>
        </div>
        {
          updateMode ? (<textarea className='singlePostDescInput' value={desc}
            onChange={(e) => setDesc(e.target.value)}></textarea>)
            : (<p className='singlePostDesc'>{desc}</p>)
        }
        {updateMode && <button className='singlePostButton' onClick={handleUpdate}>Update</button>}

      </div>
    </div>
  )
}
