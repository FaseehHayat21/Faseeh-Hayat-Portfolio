import React, {useEffect} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import image from '../../assets/logo.png'
import Aos from "aos"
import "aos/dist/aos.css"
export default function Navbar() {
  useEffect(()=> {
    Aos.init({duration: 2000});
})

  return (
    <>
    <nav className="navbar navbar-expand-lg " data-aos="fade-right">
    <div className="container-fluid d-flex justify-content-between align-items-center" style={{ maxWidth: '80%', borderBottom: '2px solid black' }}>
      <div>
    <img className="nav-logo rotate-image" src={image} alt=""  data-aos="fade-down"/></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" data-aos="fade-down">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
                <a className="nav-link fs-4 mx-3" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4 mx-3" href="#about-section">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4 mx-3" href="#skills-section">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4 mx-3" href="#projects-section">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4 mx-3" href="#experience-section">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4 mx-3" href="#services-section">Services</a>
              </li>
      </ul>
    <div className='fs-2 mx-2'>
      <a className='mx-2' href="https://linkedin.com/in/faseeh-hayat-44b025297" target='_blank'><FaLinkedinIn/></a>
      <a className='mx-2' href="https://github.com/FaseehHayat21" target='_blank'><FaGithub/></a>
    {/* <Link to="https://www.linkedin.com/">LINKEDIN</Link>
    <Link to="https://www.instagram.com/">INSTAGRAM</Link> */}
    </div>
    </div>
  </div>
</nav>
    </>
  )
}
