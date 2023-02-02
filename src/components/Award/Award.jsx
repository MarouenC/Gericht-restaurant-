import React from 'react'
import './Award.css'
const Award = ({image,title,sub}) => {
  return (
    <div className='gericht__award'>
        <div className='gericht__award-image'>
            <img src={image}  alt="awards" />
        </div>
        <div className='gericht__award-content'>
            <h6 className='p__cormorant'>{title}</h6>
            <p className='p__opensans'>{sub}</p>
        </div>
    </div>
  )
}

export default Award