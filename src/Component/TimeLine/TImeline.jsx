import React from "react";
import "./Timeline.css"; // Import the CSS file

const Timeline = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-section">
        <h2 className="section-title">EDUCATION</h2>
       
        <div className="timeline-item">
          <span className="timeline-date">2019 – 2021</span>
          <h3 className="timeline-title">Intermediate (ICS)</h3>
          <h3 className="timeline-title">Fazaia Inter College E9 Islamabad</h3>
        
        </div>
        <div className="timeline-item">
          <span className="timeline-date">2021 – Present</span>
          <h3 className="timeline-title">BS Information Technology</h3>
          <h3 className="timeline-title">Air University Islamabad </h3>
        </div>
      </div>
      
      <div className="timeline-section">
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="timeline-item">
          <span className="timeline-date">June-2023 – Sep-2023</span>
          <h3 className="timeline-title">FrontEnd Web Developer</h3>
          <h3 className="timeline-title">Center Of Technical Data Links ( CTDL )</h3>
          <p className="timeline-description">
          <details>
            <summary><ion-icon name="open"></ion-icon> Details</summary>
            <p><ion-icon name="send"></ion-icon> Front-End Developer with two months of dedicated experience.
              <br /><ion-icon name="send"></ion-icon> Specializes in crafting engaging user interfaces and seamless user experiences.<br /><ion-icon name="send"></ion-icon>Remote work experience.<br /><ion-icon name="send"></ion-icon>Skilled in translating design mock-ups into functional web applications.<br /><ion-icon name="send"></ion-icon>Proficient in HTML, CSS, and JavaScript.. </p>
          </details>
          </p>
        </div>
        <div className="timeline-item">
          <span className="timeline-date">Nov-2023 – Feb-2024</span>
          <h3 className="timeline-title">FrontEnd Web Developer</h3>
          <h3 className="timeline-title">AS-Seerat</h3>
          <p className="timeline-description">
          <details>
            <summary><ion-icon name="open"></ion-icon> Details</summary>
            <p><ion-icon name="send"></ion-icon> Front-End Developer with two months of dedicated experience.
              <br /><ion-icon name="send"></ion-icon> Specializes in crafting engaging user interfaces and seamless user experiences.<br /><ion-icon name="send"></ion-icon>Remote work experience.<br /><ion-icon name="send"></ion-icon>Skilled in translating design mock-ups into functional web applications.<br /><ion-icon name="send"></ion-icon>Proficient in HTML, CSS, and JavaScript.. </p>
          </details>
          </p>
        </div>
        <div className="timeline-item">
          <span className="timeline-date">June-2024 – Present</span>
          <h3 className="timeline-title">FullStack Web Developer</h3>
          <h3 className="timeline-title">Center Of Technical Data Links ( CTDL )</h3>
          <p className="timeline-description">
          <details>
            <summary><ion-icon name="open"></ion-icon> Details</summary>
            <p><ion-icon name="send"></ion-icon> Front-End Developer with two months of dedicated experience.
              <br /><ion-icon name="send"></ion-icon> Specializes in crafting engaging user interfaces and seamless user experiences.<br /><ion-icon name="send"></ion-icon>Remote work experience.<br /><ion-icon name="send"></ion-icon>Skilled in translating design mock-ups into functional web applications.<br /><ion-icon name="send"></ion-icon>Proficient in HTML, CSS, and JavaScript.. </p>
          </details>
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default Timeline;    