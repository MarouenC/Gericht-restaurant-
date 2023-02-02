import React from 'react'
import Subheading from '../Subheading/Subheading'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='gericht__footer-NewsLetter section__padding'>
      <div className='gericht__footer-NewsLetter_heading'>
        <Subheading title='Newsletter' />
        <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
        <p className='p__opensans'>And never miss latest Updates!</p>
        <div className='gericht__footer-NewsLetter_input'>
          <input type='email' placeholder="Email Address" />
          <button type='button' className='custom__button'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter