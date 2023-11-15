
import './contact.css'
import { MdEmail } from "react-icons/md"
import {BsLinkedin} from 'react-icons/bs'
import { FaPhoneAlt } from "react-icons/fa";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9mhp2lk', 'template_pu5j27a', form.current, 'c8m-h8ktGUf-kvNE_')
    e.target.reset()
  };
  
  return (
    <section id='contact'>
      <h2>Contact Me</h2>


      <div className='container contact__container'>
        <div className='contactMethods'>
          <article className='contactMethod'>
            <MdEmail className='icon'/>
            <h4>Email</h4>
            <h5>shayyanasim65@gmail.com</h5>
            <a href='mailto:shayyanasim65@gmail.com' target='_blank'className='CHANGE'>  Send an Email</a>

          </article>



          <article className='contactMethod'>
            <BsLinkedin className='icon'/>
            <h4>Linkedin</h4>
            <h5>Shayyan Asim </h5>
            <a href='https://www.linkedin.com/in/shayyan-asim-670a10271/' target='_blank' className='CHANGE'>  Click Here To Connect on Linkedin</a>

          </article>


          <article className='contactMethod'>
            <FaPhoneAlt className='icon'/>
            <h4>Call or Text</h4>
            <div className='Tlinks' >
            <a href="tel:+18254379360" target='_blank' className='CHANGE'>Click Here to Call</a>
            <a href="sms:+18254379360" target='_blank' className='CHANGE'>Click Here to Text</a>
            </div>




          </article>








        </div>
        <form ref={form} onSubmit={sendEmail}>

          <input type='text' name='name' placeholder='Your Full Name' required></input>
          <input type='email' name="email" placeholder='Your Email' required></input>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='sumbit'className='button button-primary' >Send Message</button>


        </form>

      </div>
    </section>
  )
}

export default Contact