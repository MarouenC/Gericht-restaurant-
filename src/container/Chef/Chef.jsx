import React from 'react'
import { Subheading } from '../../components'
import {images} from '../../constants'
import './Chef.css'
const Chef = () => {
  return (
    <div className='gericht__chef app__bg flex__center section__padding' >
        <div className='gericht__chef-image app__wrapper_img app__wrapper_img-reverse'>
          <img src={images.chef} alt ="chef" />
        </div>
        <div className='gericht_chef-content app__wrapper_info'>
          <Subheading title="Chef’s Word" />
          <h1 className='headtext__cormorant'>What we believe in</h1>
          <p className='p__opensans'><img className="gericht__chef-content_quote" src={images.quote} al="quote" /> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
          <h3 className='p__cormorant'>Kevin Luo</h3>
          <p className='p__opensans'>Chef & Founder</p>
          <img className="gericht__chef-content_singImage" src={images.sign} alt="sign" />
        </div>
    </div>
  )
}

export default Chef