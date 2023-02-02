import React from 'react'
import './SpecialMenu.css'
import {images,data} from '../../constants'
import { Subheading , MenuItem} from '../../components'

const SpecialMenu = () => {
  return (
    <div className='gericht__specialMenu flex__center section__padding' id ="Menu">
      <div className='gericht__specialMenu-heading flex__center'>
        <Subheading title="Menu that fits you palatte" />
        <h1 className='headtext__cormorant'>Today’s Special</h1>
      </div>
      <div className='gericht__specialMenu-content'>
        <div className='gericht__specialMenu-content_wine'>
          <h2 className='headtext__cormorant flex__center'>Wine & Beer</h2>
          {data.wines.map((item, index)=>(
            <MenuItem title={item.title} price={item.price} tag={item.tags} key ={index + item.title} />
          ))}
        </div>
        <div className='gericht__specialMenu-content_image'>
          <img src={images.menu} alt="beer" />
        </div>
        <div className='gericht__specialMenu-content_cocktails'>
           <h2 className='headtext__cormorant flex__center' >Coktails</h2>
           {data.cocktails.map((item, index)=>(
            <MenuItem title={item.title} price={item.price} tag={item.tags} key ={index + item.title} />
          ))}
        </div>
      </div>
      <button type='button' className='gericht__specialMenu-button custom__button'>View More</button>
    </div>
  )
}

export default SpecialMenu