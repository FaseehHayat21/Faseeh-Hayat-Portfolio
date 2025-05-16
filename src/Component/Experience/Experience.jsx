import React, { useEffect } from 'react';
import "./Experience.css";
import node from "../../assets/Cshark.png";
import react from "../../assets/react.jpg";
import work from "../../assets/workex.png";
import fullstack from "../../assets/images.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiClock, FiCalendar } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Experience() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="luxury-exp-section">
      <div className="luxury-exp-container">
        <header className="luxury-exp-header" data-aos="fade-down">
          <div className="luxury-exp-header-content">
            <img className="luxury-exp-header-icon" src={work} alt="Work Experience" />
            <h2 className="luxury-exp-title">
              <span className="luxury-title-gradient">Professional Journey</span>
            </h2>
            <p className="luxury-exp-subtitle">Where Expertise Meets Innovation</p>
          </div>
          <div className="luxury-exp-divider">
            <div className="luxury-exp-divider-line"></div>
            <div className="luxury-exp-divider-diamond"></div>
            <div className="luxury-exp-divider-line"></div>
          </div>
        </header>

        <div className="luxury-exp-timeline">
          {/* .NET Experience */}
          <div className="luxury-exp-card" data-aos="fade-up">
            <div className="luxury-exp-card-ornament"></div>
            <div className="luxury-exp-card-content">
              <div className="luxury-exp-card-header">
                <div className="luxury-exp-company-logo-container">
                  <img className="luxury-exp-company-logo" src={node} alt=".NET" />
                  <div className="luxury-exp-logo-glow"></div>
                </div>
                <div className="luxury-exp-card-title">
                  <h3>.Net Framework</h3>
                  <div className="luxury-exp-position-tags">
                    <span className="luxury-exp-position-tag">Internee</span>
                    <span className="luxury-exp-position-tag">Software Developer</span>
                  </div>
                  <p className="luxury-exp-company">Centre of Technical Data Links (CTDL)</p>
                </div>
              </div>
              
              <div className="luxury-exp-card-details">
                <details>
                  <summary className="luxury-exp-summary">
                    <FaArrowRightLong className="luxury-exp-arrow-icon" />
                    <span>Explore My Contributions</span>
                    <div className="luxury-exp-summary-decoration"></div>
                  </summary>
                  <ul className="luxury-exp-detail-list">
                    <li>
                      <span className="luxury-exp-detail-marker"></span>
                      .NET Developer with two months of on-site experience in C#
                    </li>
                    <li>
                      <span className="luxury-exp-detail-marker"></span>
                      Passionate about software development and committed to delivering high-quality solutions
                    </li>
                    <li>
                      <span className="luxury-exp-detail-marker"></span>
                      Proficient in C# and the .NET framework
                    </li>
                    <li>
                      <span className="luxury-exp-detail-marker"></span>
                      Contributed to the development of robust and scalable applications
                    </li>
                    <li>
                      <span className="luxury-exp-detail-marker"></span>
                      Collaborated closely with senior developers to meet project objectives
                    </li>
                  </ul>
                </details>
              </div>
            </div>
            
            <div className="luxury-exp-duration">
              <div className="luxury-exp-date">
                <FiCalendar className="luxury-exp-date-icon" />
                <span>June 2023 - August 2023</span>
              </div>
              <div className="luxury-exp-length">
                <FiClock className="luxury-exp-length-icon" />
                <span>3 Months</span>
              </div>
            </div>
          </div>

          {/* React Experience */}
          <div className="luxury-exp-card" data-aos="fade-up" data-aos-delay="100">
            <div className="luxury-exp-card-ornament"></div>
            <div className="luxury-exp-card-content">
              <div className="luxury-exp-card-header">
                <div className="luxury-exp-company-logo-container">
                  <img className="luxury-exp-company-logo" src={react} alt="React" />
                  <div className="luxury-exp-logo-glow"></div>
                </div>
                <div className="luxury-exp-card-title">
                  <h3>FrontEnd Developer</h3>
                  <div className="luxury-exp-position-tags">
                    <span className="luxury-exp-position-tag">FrontEnd</span>
                    <span className="luxury-exp-position-tag">React JS</span>
                  </div>
                  <p className="luxury-exp-company">Falcon Systems Ltd</p>
                </div>
              </div>
              
              <div className="luxury-exp-card-details">
                <details>
                  <summary className="luxury-exp-summary">
                    <FaArrowRightLong className="luxury-exp-arrow-icon" />
                    <span>Explore My Contributions</span>
                    <div className="luxury-exp-summary-decoration"></div>
                  </summary>
                  <ul className="luxury-exp-detail-list">
                    <li>
                      <span className="luxury-exp-detail-marker"></span>
                      Front-End Developer with two months of dedicated experience
                    </li>
                    <li>
                      <span className="luxury-exp-detail-marker"></span>
                      Specializes in crafting engaging user interfaces and seamless user experiences
                    </li>
                    <li>
                      <span className="luxury-exp-detail-marker"></span>
                      Remote work experience
                    </li>
                    <li>
                      <span className="luxury-exp-detail-marker"></span>
                      Skilled in translating design mock-ups into functional web applications
                    </li>
                    <li>
                      <span className="luxury-exp-detail-marker"></span>
                      Proficient in HTML, CSS, and JavaScript
                    </li>
                  </ul>
                </details>
              </div>
            </div>
            
            <div className="luxury-exp-duration">
              <div className="luxury-exp-date">
                <FiCalendar className="luxury-exp-date-icon" />
                <span>June 2023 - August 2023</span>
              </div>
              <div className="luxury-exp-length">
                <FiClock className="luxury-exp-length-icon" />
                <span>3 Months</span>
              </div>
            </div>
          </div>

          {/* Full Stack Experience */}
          <div className="luxury-exp-card" data-aos="fade-up" data-aos-delay="200">
            <div className="luxury-exp-card-ornament"></div>
            <div className="luxury-exp-card-content">
              <div className="luxury-exp-card-header">
                <div className="luxury-exp-company-logo-container">
                  <img className="luxury-exp-company-logo" src={fullstack} alt="Full Stack" />
                  <div className="luxury-exp-logo-glow"></div>
                </div>
                <div className="luxury-exp-card-title">
                  <h3>Full Stack Developer</h3>
                  <div className="luxury-exp-position-tags">
                    <span className="luxury-exp-position-tag">Full Stack</span>
                    <span className="luxury-exp-position-tag">MERN</span>
                  </div>
                  <p className="luxury-exp-company">Centre of Technical Data Links (CTDL)</p>
                </div>
              </div>
              
              <div className="luxury-exp-card-details">
                <details>
                  <summary className="luxury-exp-summary">
                    <FaArrowRightLong className="luxury-exp-arrow-icon" />
                    <span>Explore My Contributions</span>
                    <div className="luxury-exp-summary-decoration"></div>
                  </summary>
                  <ul className="luxury-exp-detail-list">
                    <li>
                      <span className="luxury-exp-detail-marker"></span>
                      Front-End Developer with two months of dedicated experience
                    </li>
                    <li>
                      <span className="luxury-exp-detail-marker"></span>
                      Specializes in crafting engaging user interfaces and seamless user experiences
                    </li>
                    <li>
                      <span className="luxury-exp-detail-marker"></span>
                      Remote work experience
                    </li>
                    <li>
                      <span className="luxury-exp-detail-marker"></span>
                      Skilled in translating design mock-ups into functional web applications
                    </li>
                    <li>
                      <span className="luxury-exp-detail-marker"></span>
                      Proficient in HTML, CSS, and JavaScript
                    </li>
                  </ul>
                </details>
              </div>
            </div>
            
            <div className="luxury-exp-duration">
              <div className="luxury-exp-date">
                <FiCalendar className="luxury-exp-date-icon" />
                <span>June 2024 - Present</span>
              </div>
              <div className="luxury-exp-length">
                <FiClock className="luxury-exp-length-icon" />
                <span>Current</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}