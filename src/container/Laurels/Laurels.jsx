import React from 'react'
import { Subheading, Award } from '../../components'
import {images, data} from '../../constants'
import './Laurels.css'
const Laurels = () => {
  return (
    <div className='gericht__laurels app__bg app__wrapper section__padding' id='Awards'>
      <div className='gericht__laurels-content app__wrapper-info'>
        <Subheading  title="Awards & recognition" />
        <h1 className='headtext__cormorant'>Our Laurels</h1>
        <div className='gericht__laurels-content_awards'>
          {data.awards.map((award , index) =>(
            <Award image={award.imgUrl} title={award.title} sub={award.subtitle} key ={index} />
          ))}
        </div>
      </div>
      <div className='gericht_laurels-image app__wrapper_img ' >
          <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  )
}

export default Laurels