import React from 'react'
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube,FaPinterestP  } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer bg-black px-3 px-md-0 text-center">
      <h2 className='about-relat2'>Join our mailing list. Never miss an update</h2>
      <div className='mt-4 mb-5 footer-base mx-auto d-flex justify-content-center gap-2'>
        <input required id='Email' className='bg-dark input-task' placeholder='Enter your email here*' type="Email" />
        <button id='Email' className='bg-dark text-white button-task border border-white'>Subscribe Now</button>
      </div>

      <div className='fs-4 mb-5 d-flex gap-3 text-black mt-5 justify-content-center'>
            <FaFacebookF  className='cursor text-white'/>
            <FaInstagram  className='cursor text-white'/>
            <FaPinterestP  className='cursor text-white'/>
            <FaTwitter className='cursor text-white' />
            <FaYoutube  className='cursor text-white'/>
            </div>

            <div className='w-100  bottom-footer'>
               <p>© 2035 by Fashion Diva. Powered and secured by Wix</p>
            </div>
  </footer>
  
  )
}
