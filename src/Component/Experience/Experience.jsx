import React, { useEffect } from 'react'
import "./Experience.css"
import node from "../../assets/Cshark.png"
import react from "../../assets/react.jpg"
import work from "../../assets/workex.png"
import fullstack from "../../assets/images.png"
import { FaArrowRightLong } from "react-icons/fa6";
import Aos from "aos"
import "aos/dist/aos.css"

export default function Experience() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  return (
    <section className="exp-section">
      <div className="exp-container">
        <div className="exp-header" data-aos="fade-down">
          <img className="exp-header-icon" src={work} alt="Work Experience" />
          <h2 className="exp-title">WORK EXPERIENCE</h2>
          <div className="exp-divider"></div>
        </div>

        <div className="exp-timeline">
          {/* .NET Experience */}
          <div className="exp-card" data-aos="fade-right">
            <div className="exp-card-content">
              <div className="exp-card-header">
                <img className="exp-company-logo" src={node} alt=".NET" />
                <div className="exp-card-title">
                  <h3>.Net Framework</h3>
                  <p className="exp-position">Internee at Software Developer</p>
                  <p className="exp-company">Centre of Technical Data Links (CTDL)</p>
                </div>
              </div>
              
              <div className="exp-card-details">
                <details>
                  <summary className="exp-summary">
                    <FaArrowRightLong className="exp-arrow-icon" />
                    <span>Details</span>
                  </summary>
                  <ul className="exp-detail-list">
                    <li>.NET Developer with two months of on-site experience in C#</li>
                    <li>Passionate about software development and committed to delivering high-quality solutions</li>
                    <li>Proficient in C# and the .NET framework</li>
                    <li>Contributed to the development of robust and scalable applications</li>
                    <li>Collaborated closely with senior developers to meet project objectives</li>
                  </ul>
                </details>
              </div>
            </div>
            
            <div className="exp-duration">
              <p className="exp-date">June 2023 - August 2023</p>
              <p className="exp-length">3 Months</p>
            </div>
          </div>

          {/* React Experience */}
          <div className="exp-card" data-aos="fade-right">
            <div className="exp-card-content">
              <div className="exp-card-header">
                <img className="exp-company-logo" src={react} alt="React" />
                <div className="exp-card-title">
                  <h3>FrontEnd Developer</h3>
                  <p className="exp-position">FrontEnd Developer in React JS</p>
                  <p className="exp-company">Falcon Systems Ltd</p>
                </div>
              </div>
              
              <div className="exp-card-details">
                <details>
                  <summary className="exp-summary">
                    <FaArrowRightLong className="exp-arrow-icon" />
                    <span>Details</span>
                  </summary>
                  <ul className="exp-detail-list">
                    <li>Front-End Developer with two months of dedicated experience</li>
                    <li>Specializes in crafting engaging user interfaces and seamless user experiences</li>
                    <li>Remote work experience</li>
                    <li>Skilled in translating design mock-ups into functional web applications</li>
                    <li>Proficient in HTML, CSS, and JavaScript</li>
                  </ul>
                </details>
              </div>
            </div>
            
            <div className="exp-duration">
              <p className="exp-date">June 2023 - August 2023</p>
              <p className="exp-length">3 Months</p>
            </div>
          </div>

          {/* Full Stack Experience */}
          <div className="exp-card" data-aos="fade-right">
            <div className="exp-card-content">
              <div className="exp-card-header">
                <img className="exp-company-logo" src={fullstack} alt="Full Stack" />
                <div className="exp-card-title">
                  <h3>Full Stack Developer</h3>
                  <p className="exp-position">Full Stack Developer in MERN</p>
                  <p className="exp-company">Centre of Technical Data Links (CTDL)</p>
                </div>
              </div>
              
              <div className="exp-card-details">
                <details>
                  <summary className="exp-summary">
                    <FaArrowRightLong className="exp-arrow-icon" />
                    <span>Details</span>
                  </summary>
                  <ul className="exp-detail-list">
                    <li>Front-End Developer with two months of dedicated experience</li>
                    <li>Specializes in crafting engaging user interfaces and seamless user experiences</li>
                    <li>Remote work experience</li>
                    <li>Skilled in translating design mock-ups into functional web applications</li>
                    <li>Proficient in HTML, CSS, and JavaScript</li>
                  </ul>
                </details>
              </div>
            </div>
            
            <div className="exp-duration">
              <p className="exp-date">June 2024 - Present</p>
              <p className="exp-length">Current</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}