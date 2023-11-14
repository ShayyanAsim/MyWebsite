import React from 'react'
import CV from '../../Files/Images/Shayyan_Asim_Resume.pdf'

const TWOBUT = () => {
  return (
    <div className='twobut'>
        <a href={CV} download className='button'>Download CV</a>
        <a href='#contact' className='button button-primary'>Let's Talk</a>
    </div>
  )
}

export default TWOBUT