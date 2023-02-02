import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import { FooterOverlay, NewsLetter, Subheading } from '../../components';
import './Footer.css'
const Footer = () => {
  return (
    <div className='gericht__footer section__padding'>
      <FooterOverlay />
      <NewsLetter />
      <div className='gericht__footer-ending'>
          <div className='gericht__footer-ending_contact'>
            <h5 className='p__cormorant'>Contact Us</h5>
            <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
            <p className='p__opensans'>+1 212-344-1230 <br /> +1 212-344-1230</p>
          </div>
          <div className='gericht__footer-ending_quote'>
            <h1 className="headtext__cormorant">Gerícht</h1>
            <p className='p__opensans'> "The best way to find yourself is to lose yourself in the service of others.”</p>
            <Subheading />
            <div className='gericht__footer-ending_quote-icons'>
                <FiFacebook fontSize={27} />
                <FiTwitter fontSize={27} />
                <FiInstagram fontSize={27} />
            </div>
          </div>
          <div className='gericht__footer-ending_hours' >
          <h5 className='p__cormorant'>Working Hours</h5>
            <p className='p__opensans'>Monday-Friday: <br />08:00 am -12:00 am</p>
            <p className='p__opensans'>Saturday-Sunday: <br />07:00am -11:00 pm</p>
          </div>
      </div>
      <p className='p__opensans'>2021 Gerícht. All Rights reserved.</p>
    </div>
  )
}

export default Footer