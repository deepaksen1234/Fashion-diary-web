import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Contact() {
  useEffect(
   ()=>{
    Aos.init()
   },
   []
  )
  return (
    <div>
      <Navbar />
      <div className='container-fluid bioo mt-5 p-3 overflow-hidden p-md-5 text-center d-flex jutsify-content-center align-items-center flex-column'>
        <h2 data-aos="fade-up" data-aos-duration="1500" className='about-relat'>CONTACT</h2>

        <div className='row for-with-related'>
          <div data-aos="fade-up" data-aos-duration="1500" className='mt-5'>
            <img className='w-100 img-hi' src="img/flower.webp" alt="" />
          </div>
          <div className='w-md-75 w-100 mx-auto'>
            <h2 data-aos="fade-up" data-aos-duration="1500" className='about-relat1'>Be in Touch</h2>
            <p data-aos="zoom-in-up" data-aos-duration="1000" className='bio-jessica'>

              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double <br /> click me to add your own content and make changes to the font. I’m a great place for you to tell a <br /> story and let your users know a little more about you.</p>
          </div>


          <div className='inputt w-75 w-md-50 border mt-5 p-2 mx-auto'>
           <input placeholder='Name' type="text" className='w-100 px-2 py-2'/>
           <input type="text" placeholder='Email' className='w-100 mt-2 px-2 py-2' />
           <textarea placeholder='Type your message here...' className='w-100 mt-2 px-2 pt-2 pb-5'></textarea>
            <div className='w-100 d-flex justify-content-end mt-2'>
              <button className='py-1 fs-5 px-5 border-0'>Submit</button>
            </div>
          </div>
        </div>
      </div>  
      <Footer />
    </div>

  )
}
