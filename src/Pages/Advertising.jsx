import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Advertising() {
  useEffect(
    ()=>{
      Aos.init()
    },
    []
  )
  return (
    <div>
     <Navbar/>
      <div className='container-fluid bioo p-3 overflow-hidden p-md-5 text-center d-flex jutsify-content-center align-items-center flex-column'>
        <h2 data-aos="fade-up" data-aos-duration="1000" className='about-relat'>ADVERTISING</h2>

        <div className='row for-with-related'>
          
          <div className='w-md-75 w-100 mx-auto'>
            <h2 data-aos="fade-up" data-aos-duration="1000" className='about-relat1'>Advertise with Fashion Diva</h2>
            <p data-aos="fade-up" data-aos-duration="1000" className='bio-jessica'>

              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double <br /> click me to add your own content and make changes to the font. I’m a great place for you to tell a <br /> story and let your users know a little more about you.</p>
          </div>

           <div className='w-md-75 overflow-hidden  mx-auto p-0 p-md-2'>

            <input className='w-75 px-3 mb-2' placeholder='First Name' type="text" />
            <input className='w-75 px-3 mb-2' placeholder='Last Name' type="text" />
            <input className='w-75 px-3 mb-2' placeholder='Email' type="Email" />
            <input className='w-75 px-3 mb-2' placeholder='Phone' type="text" />
            <textarea placeholder='Type your message here...' className='w-75 pb-5 px-3 mb-2' name="" id=""></textarea>
            <div className='w-75 mx-auto d-flex justify-content-end mt-2'>
              <button className='py-1 fs-5 px-5 border-0'>Submit</button>
            </div>

           </div>
        </div>
      </div>  
      <Footer/>
    </div>
  )
}
