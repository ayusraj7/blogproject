import React from 'react'
import { useState } from 'react'
import './about.css'
import image from './photo4.jpg'

const Contact = () => {
    
    const[photo,setphoto]=useState(image)
    
     

   
  return (
    <div className='about'>
        <img src={photo} alt="" />
        <div className='blog'>
          <h1>Blog Website</h1>
        </div>
        <div className='background'>
        <h1>About us</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam suscipit maiores, ipsa veniam maxime ratione ab distinctio dolores in, hic vel, vitae aspernatur. Excepturi vel repellat culpa. Similique sint ad dolore praesentium magni quae eligendi vel, architecto corporis repellendus maiores aperiam odio, assumenda quas quaerat.</p>
        </div>
        <div className='background2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum blanditiis voluptatum quis? Vitae, accusamus!
        </div>
    </div>
  )
}

export default Contact