import React, {useEffect} from 'react'
import "./Experience.css"
import node from "../../assets/Cshark.png"
import react from "../../assets/react.jpg"
import work from "../../assets/workex.png"
import fullstack from "../../assets/images.png"
import { FaArrowRightLong } from "react-icons/fa6";
import Aos from "aos"
import "aos/dist/aos.css"
export default function Experience() {

  useEffect(()=> {
    Aos.init({duration: 2000});
})

  return (
    <>
    <div className="exp">
        {/* <div className="exp-item-1" data-aos="fade-right">
        <div className='imge imge1'>
        <img className="imagee  " src={work} alt="" />
        <h3>Experience</h3>
        </div>
        </div> */}
        <div className="exp-item" data-aos="fade-right">
        <img className="image-ex " src={work} alt="" />
        <h2>WORK EXPERIENCE</h2>
        </div>
        
        <div className="exp-item-1" data-aos="fade-right"> 
        <div>
          <div className='imge'>
          <div >
          <img className="imagee" src={node} alt="" />
          </div>
          <div>
          <h3>.Net FrameWork</h3>
          <h5><i>Internee at Software Developer</i></h5>
          <h5><i>Centre of Technical Data Links (CTDL)</i></h5>
          <details>
            <summary><ion-icon name="open"></ion-icon> Details</summary>
            <p><ion-icon name="send"></ion-icon> .NET Developer with two months of on-site experience in C#. 
            <br /><ion-icon name="send"></ion-icon> Passionate about software development and committed to delivering high-quality solutions. 
            <br /><ion-icon name="send"></ion-icon> Proficient in C# and the .NET framework. 
            <br /><ion-icon name="send"></ion-icon> Contributed to the development of robust and scalable applications. 
            <br /><ion-icon name="send"></ion-icon> Collaborated closely with senior developers to meet project objectives</p>
          </details>
          </div>
          </div>
        </div>
          
        <div className='exp-time'>
          <h3>June-2023 to August-2023</h3>
          <h5><i>3 Months</i></h5>
          </div>
        </div>

        <div className="exp-item-1" data-aos="fade-right"> 
        <div>
          <div className='imge'>
          <div >
          <img className="imagee  " src={react} alt="" />
          </div>
          <div>
          <h3>FrontEnd Developer</h3>
          <h5><i>FrotEnd Developer in React JS.</i></h5>
          <h5><i>Falcon Ststems Ltd</i></h5>
          
          <details>
            <summary><ion-icon name="open"></ion-icon> Details</summary>
            <p><ion-icon name="send"></ion-icon> Front-End Developer with two months of dedicated experience.
              <br /><ion-icon name="send"></ion-icon> Specializes in crafting engaging user interfaces and seamless user experiences.<br /><ion-icon name="send"></ion-icon>  Remote work experience.<br /><ion-icon name="send"></ion-icon>  Skilled in translating design mock-ups into functional web applications.<br /><ion-icon name="send"></ion-icon>  Proficient in HTML, CSS, and JavaScript.. </p>
          </details>
          </div>
          </div>
          </div>
          <div className='exp-time'>
          <h3>June-2023 to August-2023</h3>
          <h5><i>3 Months</i></h5>
          </div>

        </div>
        <div className="exp-item-1" data-aos="fade-right"> 
        <div>
          <div className='imge'>
          <div >
          <img className="imagee  " src={fullstack} alt="" />
          </div>
          <div>
          <h3>Full Stack Developer</h3>
          <h5><i>Full Stack Developer in MERN.</i></h5>
          <h5><i>Centre of Technical Data Links (CTDL)</i></h5>
          
          <details>
            <summary><ion-icon name="open"></ion-icon> Details</summary>
            <p><ion-icon name="send"></ion-icon> Front-End Developer with two months of dedicated experience.
              <br /><ion-icon name="send"></ion-icon> Specializes in crafting engaging user interfaces and seamless user experiences.<br /><ion-icon name="send"></ion-icon>  Remote work experience.<br /><ion-icon name="send"></ion-icon>  Skilled in translating design mock-ups into functional web applications.<br /><ion-icon name="send"></ion-icon>  Proficient in HTML, CSS, and JavaScript.. </p>
          </details>
          </div>
          </div>
          </div>
          <div className='exp-time'>
          <h3>June-2024</h3>
          <h5><i>Present</i></h5>
          </div>

        </div>

    </div>
    </>
  )
}
