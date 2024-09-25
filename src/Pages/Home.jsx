import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { FaUserCircle } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(
    ()=>{
      Aos.init();
    },
    []
  )
  return (
    <div className='body overflow-hidden'>
    <Navbar/>
    
    {/* New Background Section */}
    <div className="fixed-background px-3">
      <h2 data-aos="fade-up" className="attractive-heading d-none d-md-block">Fashion Diary</h2>

      <h1 data-aos="fade-up" data-aos-duration="700" className='big-heading text-dark'>STYLE IS A <br /> CHOICE. <br />
      MAKE YOURS.</h1>
    </div>
    
    <div className="hero container row mx-auto mt-5 d-flex justify-content-around align-items-center">
      <div className='col-12 col-md-6 d-flex flex-column gap-4'>
        <div className='img1 d-flex flex-column justify-content-center align-items-center'>
          <h1 data-aos="fade-up" data-aos-duration="400" className='read'>Read</h1>
          <h2 data-aos="fade-up" data-aos-duration="600" className='blog text-light'>THE BLOG</h2>
         <Link to="/blog"> <button data-aos="fade-up" data-aos-duration="800" className='tran-buttn py-2 px-4 border-white text-light mt-4'> Read More</button></Link>
     </div>
     <div data-aos="fade-right" className='advertis-diva mb-3 img-end-cont d-flex flex-column justify-content-center align-items-center'>
        <h2 className='with'>Hello</h2>
        <h2 className='fashion-diva'>I'm Jessica</h2>
        <Link to="/about"><button className='tran1-buttn py-2 px-4 border-white text-light mt-2'> Read More</button></Link>
      </div>
     </div>
     {/* --- */}
    <div className='col-12 col-md-6   d-flex flex-column gap-4'>
      <div data-aos="fade-left" className='advertis-diva d-flex flex-column justify-content-center align-items-center'>
        <h2 className='with'>Advertise with</h2>
        <h2 className='fashion-diva'>Fashion Diva</h2>
        <Link to="/advertising"><button className='tran1-buttn py-2 px-4 border-white text-light mt-2'> Read More</button></Link>
      </div>

      <div className='img1 img2 d-flex flex-column justify-content-center align-items-center'>
          <h1 data-aos="fade-up" data-aos-duration="400" className='read text-light fs-2'>Contribute</h1>
          <h2 data-aos="fade-up" data-aos-duration="600" className='blog text-light'>TO THE BLOG</h2>
         <Link to="/contact"> <button data-aos="fade-up" data-aos-duration="800" className='tran-buttn py-2 px-4 border-white text-light mt-4'> Conatct Me</button></Link>
     </div>


    </div>
    {/* --- */}
    </div>
    
    <div className="container-fluid bg-white mt-5 d-flex flex-column justify-content-center align-items-center">
      <div className="row w-75 ">
        <div className=" col-md-12 d-md-flex  flex-colmun pt-4 bg-light">
          <div data-aos="fade-up-right" data-aos-duration="700" className="post  w-100 w-md-50">
           <img  className='w-100'data-aos-duration="700" src="https://static.wixstatic.com/media/aa192edf50ed4ac7b1a307a40ace78c5.jpg/v1/fill/w_1778,h_1335,fp_0.50_0.50,q_90,enc_auto/aa192edf50ed4ac7b1a307a40ace78c5.jpg" alt="" />
            </div>
            {/*  */}
            
            <div data-aos="fade-left" className="card-body w-100 w-md-50">
            <div className='d-flex'>
            <FaUserCircle className=' fs-3'/>
            <span>
            <p >Admin</p>
            <p>Mar 21, 2023 .
            1 min</p>
            </span>
            </div>




              <h2 className="card-title">What I Wore: Travel <br /> Edition</h2>
              <p className="card-text">
              Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
              </p>
              <hr />

              <div className='d-flex jutsify-content-between'>
              
                  <p className='me-2'>0 Views</p>
                  <p>0 Comments</p>
              
              <span className='d-flex gap-2 '> <p>1</p>
              <FcLike /></span>
              
              </div>
            </div>
          
        </div>
        {/* 1 row end */}
        <div className="col-md-12 d-md-flex flex-colmun mt-5 pt-4 bg-light">
          <div data-aos="fade-up-right" data-aos-duration="700" className="postn w-100 w-md-50 ">
           <img className='w-100' src="https://static.wixstatic.com/media/88f23a8093184961b4169a71760bd0e0.jpg/v1/fill/w_1960,h_1472,fp_0.50_0.50,q_90,enc_auto/88f23a8093184961b4169a71760bd0e0.jpghttps://static.wixstatic.com/media/88f23a809318496…_90,enc_auto/88f23a8093184961b4169a71760bd0e0.jpg" alt="" />
            </div>
            {/*  */}
            
            <div data-aos="fade-up-left" data-aos-duration="700" className="card-body w-100 w-md-50">
            <div className='d-flex'>
            <FaUserCircle className=' fs-3'/>
            <span>
            <p >Admin</p>
            <p>Mar 21, 2023 .
            1 min</p>
            </span>
            </div>




              <h2 className="card-title">Picking the Perfect Booties</h2>
              <p className="card-text">
              Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
              </p>
              <hr />

              <div className='d-flex jutsify-content-between'>
              
                  <p className='me-2'>0 Views</p>
                  <p>0 Comments</p>
              
              <span className='d-flex gap-2 '> <p>1</p>
              <FcLike /></span>
              
              </div>
            </div>
          
        </div>
        {/* 2nd row end*/}
        <div className="col-md-12 d-md-flex flex-colmun mt-5 mb-5 pt-4 bg-light">
          <div data-aos="fade-up-right" data-aos-duration="700" className="post w-100 w-md-50">
           <img className='w-100' src="img/ear.webp" alt="" />
            </div>
            {/*  */}
            
            <div data-aos="fade-up-left" data-aos-duration="700" className="card-body w-100 w-md-50">
            <div className='d-flex'>
            <FaUserCircle className=' fs-3'/>
            <span>
            <p >Admin</p>
            <p>Mar 21, 2023 .
            1 min</p>
            </span>
            </div>




              <h2 className="card-title">Beyond the Brim</h2>
              <p className="card-text">
              Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
              </p>
              <hr />

              <div className='d-flex jutsify-content-between'>
              
                  <p className='me-2'>0 Views</p>
                  <p>0 Comments</p>
              
              <span className='d-flex gap-2 '> <p>1</p>
              <FcLike /></span>
              
              </div>
            </div>
          
        </div>
        {/* 3rd row end */}
        <div className="col-md-12 d-md-flex flex-colmun mt-5 pt-4 bg-light">
          <div data-aos="fade-up-right" data-aos-duration="700" className="post w-100 w-md-50">
           <img className='w-100' src="img/hand.webp" alt="" />
            </div>
            {/*  */}
            
            <div data-aos="fade-up-left" data-aos-duration="700" className="card-body w-100 w-md-50">
            <div className='d-flex'>
            <FaUserCircle className=' fs-3'/>
            <span>
            <p >Admin</p>
            <p>Mar 21, 2023 .
            1 min</p>
            </span>
            </div>




              <h2 className="card-title">Last Night’s Look</h2>
              <p className="card-text">
              Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
              </p>
              <hr />

              <div className='d-flex jutsify-content-between'>
              
                  <p className='me-2'>0 Views</p>
                  <p>0 Comments</p>
              
              <span className='d-flex gap-2 '> <p>1</p>
              <FcLike /></span>
              
              </div>
            </div>
          
        </div>
      </div>
    </div>
    
    <Footer />
  </div>
  
  )
}
