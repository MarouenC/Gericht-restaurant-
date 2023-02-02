import React from 'react'
import { Subheading } from '../../components'
import {images} from '../../constants'
import './findUs.css'
const FindUs = () => {
  return (
    <div className='gericht__findUs section__padding app__bg app__wrapper' id="Contact">
        <div className='gericht__findUs-content app__wrapper_info'>
          <Subheading title="Contact" />
          <h1 className='headtext__cormorant ' >Find Us</h1>
          <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
          <div className='gericht__findUs-content_openingHours'>
             <h4 className='p__cormorant'>Opening Hours</h4>
             <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
             <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
          </div>
          <button type='button' className='custom__button'>Visit Us</button>
        </div>
        <div className='gericht__findUs_image app__wrapper_img'>
          <img src={images.findus} alt="find Us" />
        </div>
    </div>
  )
}

export default FindUs