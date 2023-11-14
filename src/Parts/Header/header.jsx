import React from 'react'
import './header.css'
import TWOBUT from './TWOBUT.jsx'
import ME from '../../Files/Images/me.png'
import Socials from './Socials.jsx'



const header = () => {
  return (
    <header>
        <div className='container header__container'>
            <h3>Welcome to my Personal Website</h3>
            <h5>I am</h5>
            <h1>Shayyan Asim</h1>
            <h5 className='light-Text'>Software Engineering Student</h5>
            <TWOBUT />
            <Socials/>

            <div className='me'>
                <img src={ME} alt="My Picture"></img>
             </div>

            <a href='#contact' className='godown'>Scroll Down</a>



        </div>
  </header>
 )
}

export default header






