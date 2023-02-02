import React from 'react'
import './MenuItem.css'
const MenuItem = ({title, price,tag} ) => {
  return (
    <div className='gericht__MenuItem flex__center'>
      <div className='gericht__MenuItem-title'>
        <h5 className='p__cormorant'>{title}</h5>
        <div className='gericht__MenuItem-price'>
          <div />
          <h5 className='p__cormorant'>{price}</h5>
        </div>
      </div>
      <div className='gericht__MenuItem-tag'>
        <p className='p__opensans'>{tag}</p>
      </div>
    </div>
  )
}

export default MenuItem