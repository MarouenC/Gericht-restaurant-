import React from 'react'
import { Subheading } from '../../components'
import {images} from '../../constants'
import './Header.css'
const Header = () => {
  return (
    <div className='gericht__header app__wrapper section__padding' id="home">
      <div className='gericht__header-info app__wrapper_info '>
        <Subheading title="Chase the new Flavour" /> 
        <h1>The key to Fine dining</h1>
        <p className='p__opensans' style={{margin: "2rem 0"}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        <button className='custom__button'>Explore Menu</button>
      </div>
      <div className='geritch__header-img app__wrapper_img'>
        <img src={images.welcome} alt="welcome" />
      </div>
    </div>
  )
}

export default Header