import React from 'react'
import {images} from '../../constants'
const Subheading = ({title}) => {
  return (
    <div style={{marginBottom: '1rem'}}>
      <h4 className='p__cormorant'>{title}</h4>
      <img src={images.spoon} className="spoon__img" alt='spoon' />
    </div>
    )
}

export default Subheading