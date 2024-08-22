import React, {useEffect, useState} from 'react'
import "./About.css"
import cv from "../../assets/Faseeh_Hayat_CV.pdf";
import image from "../../assets/my-image.png"
import myimage from "../../assets/image2.png"
import { FaCode } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";



import Aos from "aos"
import "aos/dist/aos.css"

export default function About() {
  useEffect(()=> {
    Aos.init({duration: 2000});
})
  return (
    <>
    <div className='about-page'>
      <div className='about' id='about-page'>
      <h1 className='about-heading'>ABOUT ME</h1>
      <h3 >My Introduction</h3>
      </div>
    <div className='my-section-about'>
              <div className='introduction-about'data-aos ="fade-right">
                    <div className='about-showcase'>
                      <div className='about-showcase-1'>
                        <FaCode/>
                        <h3>Expereince</h3>
                        <h4>5+ years</h4>
                      </div>
                      <div className='about-showcase-1'>
                        <MdOutlineWork/>
                        <h3>Completed</h3>
                        <h4>15+ Projects</h4>
                      </div>
                      <div className='about-showcase-1'>
                        <MdOutlineSupportAgent/>
                        <h3>Support</h3>
                        <h4>24/7</h4>
                      </div>
                      </div>
                    <div className='intro-about'>
                      <p>I'm a full-stack web developer specializing in the MERN stack (MongoDB, Express, React, Node.js).I'm passionate about crafting user-friendly interfaces and robust backends, ensuring a seamless experience for your users.</p>
                     <div className='buttons-about'>
                            <a className="button-about-cv" href={cv} download="downloaded_file.pdf">
                            <span className="button-about-cv_lg">
                                <span className="button-about-cv_sl"></span>
                                <span className="button-about-cv_text">Download CV</span>
                            </span>
                        </a>
                            
                      </div>
                       </div>
               </div>
                <div className='about-image-about'>
                <img className="my-image-p-p" src={image} alt="" />
                </div>

                {/* <div className='image-intro' data-aos="fade-left">
                    <img src={image} alt="" />
                </div> */}
        </div>

        </div>
    </>
  )
}
