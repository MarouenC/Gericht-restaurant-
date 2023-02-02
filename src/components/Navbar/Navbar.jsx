import React, { useState } from 'react'
import './Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import images from '../../constants/images'

const Menu = ({setToggleScreen}) =>{
  return(
    <>
      <li className='p__opensans'> <a href='#home' onClick={()=>setToggleScreen(false)}>Home</a> </li>
      <li className='p__opensans'> <a href='#About' onClick={()=>setToggleScreen(false)}>About</a> </li>
      <li className='p__opensans'> <a href='#Menu' onClick={()=>setToggleScreen(false)}>Menu</a> </li>
      <li className='p__opensans'> <a href='#Awards' onClick={()=>setToggleScreen(false)}>Awards</a> </li>
      <li className='p__opensans'> <a href='#Contact' onClick={()=>setToggleScreen(false)}>Contact</a> </li>
    </>
  )
}
const Navbar = () => {
  const [toggleScreen, setToggleScreen] = useState(false);
  return (
    <nav className='gericht__navbar'>
      <div className='gericht__navbar-logo'>
        <img src={images.gericht} alt="gericht logo" />
      </div>
      <ul className='gericht__navbar-links'>
        <Menu setToggleScreen={setToggleScreen} />
      </ul>
      <div className='gericht__navbar-sign'>
        <a href='#login' className='p__opensans'>Log in / registration</a>
        <div />
        <a className='p__opensans'>Book Table</a>
      </div>
      <div className='gericht__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>setToggleScreen(true)} />
        {toggleScreen &&(
        <div className='gericht__navbar-smallscreen_overlay flex__center slide-bottom'> 
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=>setToggleScreen(false)} />
          <ul className='gericht__navbar-smallscreen_links'>
            <Menu setToggleScreen={setToggleScreen} />
          </ul>
        </div>
        )}
      </div>
    </nav> 
  )
}

export default Navbar