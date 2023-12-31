import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div className='wrapper '>
          <div class='center'>
          <div class='blob'></div></div>
         <div className='contactus'>
           <div className='contactusDesc'>
           
            <h1>Contact Us</h1>
            <p>Need to get in touch with us? you can do message us on the given email or can contact us on the phone number, come to the given address of our office </p>
              <img src="https://img.freepik.com/premium-vector/gray-dots-white-background-like-snowflakes-template-social-networking-app-web-newborn_640527-111.jpg?w=740" alt="" />
           </div>
           <div className='contactusform'>
            <p>Email</p>
            <input disabled type="text" placeholder='gagantyagi1@gmail.com' id="" />
            <br />
            <p>Phone no</p>
            <input disabled type="number" placeholder='9710890890' id="" />
            <br />
            <p>Address</p>
            <textarea disabled placeholder='B-289 Sec-71 Gurugram ,Haryana'cols="30" rows="10"></textarea>
            <img id="footerpicture" src="https://img.freepik.com/premium-vector/gray-dots-white-background-like-snowflakes-template-social-networking-app-web-newborn_640527-111.jpg?w=740" alt="" />
            </div>
        </div>
        <div className='footer'>
       
        </div>
       
    </div>
  )
}

export default Contact