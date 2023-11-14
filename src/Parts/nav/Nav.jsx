import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiContactsBook2Fill} from 'react-icons/ri'
import { useState } from 'react'


const Nav = () => {
  const[activeNow, setActive] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActive('#')}   className={activeNow==='#' ? 'selected' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActive('#about')} className={activeNow==='#about' ? 'selected' : ''} ><SiAboutdotme/></a>
      <a href='#experience' onClick={()=>setActive('#experience')} className={activeNow==='#experience' ? 'selected' : ''}  ><BiBook/></a>
      <a href='#projects' onClick={()=>setActive('#projects')} className={activeNow==='#projects' ? 'selected' : ''}  ><RiServiceLine/></a>
      <a href='#contact' onClick={()=>setActive('#contact')} className={activeNow==='#contact' ? 'selected' : ''}   ><RiContactsBook2Fill/></a>
    
    </nav>
  )
}

export default Nav