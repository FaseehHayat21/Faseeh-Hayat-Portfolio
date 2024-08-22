import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import "./LandingPage.css";

import About from "../../Component/About/About";
import Experience from "../../Component/Experience/Experience";
import Introduction from "../../Component/Introduction/Introduction";
import Services from "../../Component/Services/Services";
import Project from "../../Component/Project/Project";
import Skillslider from "../../Component/Slider/Skillslider";
import Contact from "../../Component/Contact/Contact";
import Timeline from "../../Component/TimeLine/TImeline";

export default function LandingPage() {
  return (
    <>
      <div className="landing-page">
 
          <div className="showcase-first">
            <Navbar />
            <Introduction/>
          </div>
       
      <div id="about-section">
        <About />
      </div>
      <div id="skills-section">
        <Skillslider />
      </div>
      <div id="projects-section">
        <Project />
      </div>
      {/* <Skill /> */}
      <div id="experience-section">
        <Timeline/>
      </div>
      <div id="services-section">
        {/* <Services /> */}
      </div>
      <div id="contact-section">
        <Contact/>
      </div>
      </div>
      {/* <ShowCase /> */}
      {/* <About/>
      <Skillslider/>
      <Project/>           */}
      {/* <Skill /> */}
      {/* <Experience/>
      <Services/> */}
      
      {/* <About/> */}
      
      {/* <About/> */}
      {/* <ShowCase/> */}
    </>
  );
}
