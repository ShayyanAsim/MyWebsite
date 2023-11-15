import React from 'react'
import './projects.css'
import IMG from '../../Files/Images/notestaking.png'
import JV from '../../Files/Images/java.png'
import PY from '../../Files/Images/py.png'
import WD from '../../Files/Images/WORD.png'
import LS from '../../Files/Images/LS.png'
const Projects = () => {
  return (
    <section id='projects'>

      <h2>Projects</h2>







    <div className='container projects__container'>


    <article className='projectitem'>
        <div className='porjectimg'>  
          <img src={IMG} alt="Project Image" />
         </div>
          <h3>Notes Taking Application with AWS backend</h3>
          <div className='TBUT'> 
          <a href='https://github.com/ShayyanAsim/Notes-Taking-Website-Backend-inclusive-' className='button' target='_blank'>Code</a>
          <a href='https://shayyan-mohamad-lotion-plus.netlify.app/' className='button button-primary' target='_blank'>Live Demo</a>
          </div>

     
      </article>


      <article className='projectitem'>
        <div className='porjectimg'>  
          <img src={LS} alt="" />
         </div>
          <h3>Obituary Generator (FullStack Project)</h3>
          <div className='TBUT'> 
          <a href='https://github.com/ShayyanAsim/Obituary-Generator' className='button' target='_blank'>Code</a>
          <a href='https://obituarygeneratorproject.netlify.app/' className='button button-primary' target='_blank'>Live Demo</a>
          </div>

     
      </article>





      <article className='projectitem'>
        <div className='porjectimg'>  
          <img src={JV} alt="Project Image" />
         </div>
          <h3>Schedule Maker Java </h3>
          <a href='https://github.com/ShayyanAsim/Schedule-Generator-java' className='button' target='_blank'>Code</a>

     
      </article>




      <article className='projectitem'>
        <div className='porjectimg'>  
          <img src={PY} alt="Project Image" />
         </div>
          <h3>Data-Visualization using Python</h3>
          <a href='https://github.com/ShayyanAsim/Data-Visualization/blob/main/README.md' className='button' target='_blank'>Code</a>

     
      </article>






      <article className='projectitem'>
        <div className='porjectimg'>  
          <img src={WD} alt="Project Image" />
         </div>
          <h3>Wordle Game in Vanilla JavaScript</h3>
          <a href='https://github.com/ShayyanAsim/WordlebyShayyan.github.io' className='button' target='_blank'>Code</a>

     
      </article>




    























    </div>




    </section>
  )
}

export default Projects