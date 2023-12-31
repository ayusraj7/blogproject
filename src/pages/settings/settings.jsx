import {useState,useContext} from 'react'
import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import {AppContext} from '../../context/Appcontext'
import axios from 'axios';
const settings = () => {
  
  const[file,setFile]=useState(null);
  const[username,setUsername]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[success,setSuccess]=useState(false);
  const PF='http://localhost:5000/images/'
  const {user,logout}=useContext(AppContext);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const updatedUser={
      userId:user._id,
      username,email,
        password,
    }
   
    if(file){
      const data=new FormData();
      const filename=Date.now()+file.name;
      data.append('name',filename);
      data.append('file',file);
      console.log('data',data);
      updatedUser.profilePic=filename;
      user.profilePic=updatedUser.profilePic;
      localStorage.setItem('user',JSON.stringify(user));
      try{
       await axios.post('http://localhost:5000/api/upload',data);
      
      }catch(err)
      {
        console.log('erorr-->',err);
      }
    }
    try{
      console.log('updatedUser',updatedUser);
      const response=await axios.put(`http://localhost:5000/api/user/${user._id}`,updatedUser);
      window.location.reload()
      console.log('response',response);
      setSuccess(true);
    }catch(error)
    {
      console.log('error-->',error);
    }
  }
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/user/${user._id}`, {
        data: { userId:user._id },
      });
      logout();
    } catch (error) {
      console.log('error', error);
    }

  }
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingDeleteTitle" onClick={handleDelete}>Delete Account</span>
            </div>
            <form onSubmit={handleSubmit} className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src={file?URL.createObjectURL(file):PF+user.profilePic } alt="" />
                    <label htmlFor="fileInput">
                        <i className='settingsPPIcon far fa-user-circle'></i>
                    </label>
                    <input type="file" name="" id="fileInput" style={{display:'none'}} onChange={(e) =>setFile(e.target.files[0])}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder={user.username} onChange={(e)=>setUsername(e.target.value)}/>
                <label>Email</label>
                <input type="text" placeholder={user.email} onChange={(e)=>setEmail(e.target.email)}/>
                <label>Password</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
                <button className='settingsSubmit' type='submit'>Update</button>
              {success && <span className='pp'> Profile has been Updated</span>}
            </form>

        </div>
        <Sidebar/>
    </div>
  )
}

export default settings