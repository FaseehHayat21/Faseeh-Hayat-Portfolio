import React, { useEffect } from "react";
import "./About.css";
import cv from "../../assets/Faseeh_Hayat_CV.pdf";
import { FaCode } from "react-icons/fa";
import { MdOutlineSupportAgent, MdOutlineWork } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="abt-section" id="about">
      <div className="abt-container">
        <header className="abt-header" data-aos="fade-down">
          <h1 className="abt-title">
            <span className="title-gradient">ABOUT ME</span>
          </h1>
          <p className="abt-subtitle">My Introduction</p>
          <div className="abt-divider"></div>
        </header>

        <div className="abt-content">
          <div className="abt-info" data-aos="fade-right">
            <div className="abt-showcase">
              <div className="abt-showcase-item">
                <FaCode className="abt-icon" />
                <h3>Experience</h3>
                <p>5+ years</p>
              </div>
              <div className="abt-showcase-item">
                <MdOutlineWork className="abt-icon" />
                <h3>Completed</h3>
                <p>15+ Projects</p>
              </div>
              <div className="abt-showcase-item">
                <MdOutlineSupportAgent className="abt-icon" />
                <h3>Support</h3>
                <p>24/7</p>
              </div>
            </div>

            <div className="abt-description">
              <p>
                I'm a full-stack web developer specializing in the MERN stack
                (MongoDB, Express, React, Node.js). I'm passionate about crafting
                user-friendly interfaces and robust backends, ensuring a seamless
                experience for your users.
              </p>
              
              <a
                className="abt-download-btn"
                href={cv}
                download="Faseeh_Hayat_CV.pdf"
              >
                <span className="abt-btn-text">Download CV</span>
                <span className="abt-btn-effect"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}