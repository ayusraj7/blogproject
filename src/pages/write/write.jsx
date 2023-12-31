import {useContext,useState} from 'react'
import './write.css';
import axios from 'axios';
import {AppContext} from '../../context/Appcontext'
const write = () => {
  const[title,setTitle]=useState("");
  const[desc,setDesc]=useState("");
  const[file,setFile]=useState("");
  
  
  const {user}=useContext(AppContext);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const newPost={
      username:user.username,
      title,desc,
      file
    }
   
    if(file){
      const data=new FormData();
      const filename=Date.now()+file.name;
      data.append('name',filename);
      data.append('file',file);
      console.log('data',data);
      newPost.photo=filename;
      
      try{
       const response=await axios.post('http://localhost:5000/api/upload',data);
      }catch(err)
      {
        console.log('erorr-->',err);
      }
    }
    try{
      const res=await axios.post('http://localhost:5000/api/posts',newPost);
      window.location.replace('/post/' + res.data._id);
      
    }catch(error)
    {
      console.log('error-->',error);
    }
  }
  return (
    <div className='write'>
      {
        file && <img className='writeImg' src={URL.createObjectURL(file)} alt="" />
      }
      
      <form onSubmit={handleSubmit} className='writeForm'>
        
        <div className="writeFormGroup">
          <label htmlFor="fileInput"><i className="writeIcon fas fa-plus"></i></label>
          <input type="file" name="" id="fileInput"  style={{display:"none"}}
            onChange={(e)=>setFile(e.target.files[0])}/>
          <input type="text" placeholder="Title" className='writeInput' 
          autoFocus={true} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="writeFormGroup">
          <textarea placeholder='tell your story...' type='text' className='writeInput writeText' onChange={(e)=>setDesc(e.target.value)}></textarea>
        </div>
        <button type="submit" className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}

export default write