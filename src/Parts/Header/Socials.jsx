import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/shayyan-asim-670a10271/" target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/ShayyanAsim'target='_blank'><BsGithub/></a>
    </div>
  )
}

export default Socials