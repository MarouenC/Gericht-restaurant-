import React from 'react'
import { Subheading } from '../../components'
import {images} from '../../constants'
import './AboutUs.css'
const AboutUs = () => {
  return (
    <div className='gericht__aboutus section__padding app__bg flex__center' id="About">
      <div className='gericht__aboutus-overlay flex__center'>
        <img src={images.G} alt="G" />
      </div>
      <div className='gericht__aboutus-content flex__center'>
        <div className='gericht__aboutus-content_intro'>
          <h1 className='headtext__cormorant'>About us</h1>
          <Subheading />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button className='custom__button'>Know More</button>
        </div>
        <div className='gericht__aboutus-content_image flex__center'>
          <img src={images.knife} alt="knife" />
        </div>
        <div className='gericht__aboutus-content_history'>
          <h1 className='headtext__cormorant'>History</h1>
          <Subheading/>
          <p className='p__opensans'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
          <button className='custom__button'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs