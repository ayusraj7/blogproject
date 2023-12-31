import React from 'react'
import "./header.css"
import background from '../../../src/background.jpg'

const header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src={background} alt="" />
    </div>
  )
}

export default header