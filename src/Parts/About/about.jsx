import React from 'react'
import './about.css'
import SECME from '../../Files/Images/2ndme.png'

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='aboutme'>
        <div id="IMGG" className='imageofme'>
          <img src={SECME} alt='myimg'></img>
        </div>
        </div>


        <div className='mystory'>
            <article className='mystorybox'>
              <p>A highly motivated engineering student, currently in my third year of software engineering, I thoroughly enjoy coding and view it as an invigorating challenge. I am actively seeking internship opportunities starting either in January or May of 2024. 
                With a solid foundation in software engineering principles and a genuine passion for problem-solving, I am eager to apply the theoretical knowledge and practical skills I have gained throughout my academic journey. My proactive approach to learning and dedication to my studies positions me as a promising candidate ready to contribute effectively to a professional environment.</p>

            </article>
        </div>

        





      </div>


    
    
    </section>
  )
}

export default About