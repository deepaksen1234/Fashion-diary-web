import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube,FaPinterestP  } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function BlogDetails() {
  Aos.init(
    ()=>{

    },
    []
  )
 
  return (
    <div>
      <>
        <Navbar />
        <div className='container-fluid bioo p-3 mt-5 overflow-hidden p-md-5 text-center d-flex jutsify-content-center align-items-center flex-column'>
          <h2 data-aos="fade-up" data-aos-duration="1500" className='about-relat'>ABOUT ME</h2>

          <div className='row for-with-related'>
            <div data-aos="fade-up" data-aos-duration="1500" className='mt-5'>
              <img className='w-100 img-hi' src="img/jessica.webp" alt="" />
            </div>

            <div className='w-md-75 w-100 mx-auto'>
              <h2 data-aos="fade-up" data-aos-duration="1500" className='about-relat1'>Hi! I'm Jessica, a serious fashionista.</h2>
              <p data-aos="fade-up" data-aos-duration="1000" className='bio-jessica'>
                Hi! I'm Jessica, a serious fashionista.
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>

              <p data-aos="fade-up" data-aos-duration="1000" className='bio-jessica'>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
            </div>

            <div className='fs-5 d-flex gap-2 text-black mt-3 justify-content-center'>
            <FaFacebookF  className='cursor'/>
            <FaInstagram  className='cursor'/>
            <FaPinterestP  className='cursor'/>
            <FaTwitter className='cursor' />
            <FaYoutube  className='cursor'/>
            </div>

          </div>

        </div>
        <Footer />
      </>

    </div>
  )
}
