import React, { useRef } from 'react'
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
import { Subheading } from '../../components'
import {images} from '../../constants'
import "./Gallery.css"

const pictures =[
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04
]
const Gallery = () => {
  
  const scrollref= useRef()
  const scroll =(direction) =>{
    const {current}  = scrollref;

    if (direction === "left"){
      current.scrollLeft -= 300;
    }else{
      current.scrollLeft += 300;
    }
  }
  return (
    <div className='gericht__gallery flex__center '>
      <div className='gericht__gallery-content'>
        <Subheading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className='custom__button'>View More</button>
      </div>
      <div className='gericht__gallery-images'>
        <div className='gericht__gallery-images_container' ref={scrollref}>
            {pictures.map((pic, index)=>(
                <div className='gericht__gallery-images_card flex__center' key={`gallery_image-${index+1}`}>
                    <img src={pic}  alt='gallery' />
                    <BsInstagram className='gallery__image-icon'/>
                </div> 
            ))}
        </div>
        <div className='gericht__gallery-images_arrows'>
          <BsArrowLeftShort className='Gallery__gallery-icon' onClick={()=>scroll("left")} />
          <BsArrowRightShort className='Gallery__gallery-icon' onClick={()=>scroll("right")} />
        </div>
      </div>
    </div>
  )
}

export default Gallery