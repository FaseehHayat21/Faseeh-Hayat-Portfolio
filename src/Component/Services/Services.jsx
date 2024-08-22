import React, {useEffect} from 'react'
import "./Services.css"
import servicesimg from "../../assets/services.png"
import custom from "../../assets/custom.png"
import api from "../../assets/Api.png"
import interactive from "../../assets/interactive.png"
import { FaArrowRightLong } from "react-icons/fa6";
import image from "../../assets/images.png"
import Aos from "aos"
import "aos/dist/aos.css"
export default function Services() {
    useEffect(()=> {
        Aos.init({duration: 2000});
    })
    
  return (
    <>
    {/* // <div className="ser">
    //     <div className="ser-item" data-aos="fade-right">
    //     <img className="image1 " src={servicesimg} alt="" />
    //     <h3>Services I provide</h3>
    //     </div>

        
    //     <div className="ser-item-1" data-aos="fade-right"> 
    //     <div>
    //       <div className='img1'>
    //       <div >
    //       <img className="image1 " src={servicesimg} alt="" />
    //       </div>
    //       <div>
    //       <h3>Full-Stack Development</h3>
    //       <h5><i>MERN stack developers are essentially full-stack developers, meaning they can handle both the front-end (user interface) and back-end (server-side logic) of a web application</i></h5>
    //       </div>
    //       </div>
    //       </div>
    //     </div>


    //      <div className="ser-item-1" data-aos="fade-right"> 

    //     <div>
    //       <div className='img1'>
    //       <div >
    //       <img className="image1 " src={servicesimg} alt="" />
    //       </div>
    //       <div>
    //       <h3>Interactive Web Applications</h3>
    //       <h5><i>The MERN stack excels at building dynamic and interactive web applications. This includes features like real-time updates, data visualization, and user-generated content.</i></h5>
    //       </div>
    //       </div>
    //       </div>

    //     </div> */}
        
{/*         
    //     <div className="ser-item-1" data-aos="fade-right"> 
    //     <div>
    //       <div className='img1'>
    //       <div >
    //       <img className="image1 " src={servicesimg} alt="" />
    //       </div>
    //       <div>
    //       <h3>API Development</h3>
    //       <h5><i> MERN stack is well-suited for building APIs (Application Programming Interfaces) that allow data exchange between different applications.</i></h5>
    //       </div>
    //       </div>
    //       </div>
 
    //     </div>
        
    //     <div className="ser-item-1" data-aos="fade-right"> 
    //     <div>
    //       <div className='img1'>
    //       <div >
    //       <img className="image1 " src={servicesimg} alt="" />
    //       </div>
    //       <div>
    //       <h3>Custom Web Applications</h3>
    //       <h5><i>MERN stack developers can tailor web applications to your specific needs,  whether it's a social media platform, a content management system, a project management tool, or anything else you can imagine.</i></h5>
    //       </div>
    //       </div>
    //       </div>
    //     </div>

    // </div> */}
    {/* <div className="service-page">
      <div className='Heading-container'>
        <h1>SERVICES I PROVIDE</h1>
        <img className="image1" src={servicesimg} alt="" />
      </div>
      <div className="service-container">
        
        <div className="service-1">
        <img className="image1" src={servicesimg} alt="" />
        <h1>Heading 1</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga voluptatum, quasi reprehenderit atque unde fugit voluptate sapiente saepe perferendis modi ex animi, cumque dolor alias recusandae sit, dolore amet vitae!</p>
        </div>
        <div className="service-1">
        <img className="image1" src={servicesimg} alt="" />
        <h1>Heading 1</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga voluptatum, quasi reprehenderit atque unde fugit voluptate sapiente saepe perferendis modi ex animi, cumque dolor alias recusandae sit, dolore amet vitae!</p>
        </div>
        <div className="service-1">
        <img className="image1" src={servicesimg} alt="" />
        <h1>Heading 1</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga voluptatum, quasi reprehenderit atque unde fugit voluptate sapiente saepe perferendis modi ex animi, cumque dolor alias recusandae sit, dolore amet vitae!</p>
        </div>
        <div className="service-1">
        <img className="image1" src={servicesimg} alt="" />
        <h1>Heading 1</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga voluptatum, quasi reprehenderit atque unde fugit voluptate sapiente saepe perferendis modi ex animi, cumque dolor alias recusandae sit, dolore amet vitae!</p>
        </div>
      </div>
    </div> */}
    <div className='service-page-container-main'>
      <div className="header-services" data-aos="fade-up">
        <img className="service-img" src={servicesimg} alt="" />
        <h1 className='heading-services' >SERVICES</h1>
      </div>
      <div className="service-page-container" data-aos="fade-right">
            <div className="service-box">
              <div className='service-content'>
                  <img className="service-image" src={image} alt="" />
                  <h2>Full-Stack Development</h2>
                  <p><i>MERN stack developers are essentially full-stack developers, meaning they can handle both the front-end (user interface) and back-end (server-side logic) of a web application</i></p>
                  <input type="text" />
              </div>
            </div>
            <div className="service-box">
              <div className='service-content'>
                  <img className="service-image" src={interactive} alt="" />
                  <h2>Interactive-Web Application</h2>
                  <p><i>The MERN stack excels at building dynamic and interactive web applications. This includes features like real-time updates, data visualization, and user-generated content.</i></p>
              </div>
            </div>
            <div className="service-box">
              <div className='service-content'>
                  <img className="service-image" src={api} alt="" />
                  <h2>API Development</h2>
                  <p><i> MERN stack is well-suited for building APIs (Application Programming Interfaces) that allow data exchange between different applications.</i></p>
              </div>
            </div>
            <div className="service-box">
              <div className='service-content'>
                  <img className="service-image" src={custom} alt="" />
                  <h2>Custom-Web Development</h2>
                  <p><i>MERN stack developers can tailor web applications to your specific needs,  whether it's a social media platform, a content management system, a project management tool, or anything else you can imagine.</i></p>
              </div>
            </div>
        </div>  
        </div>
    </>
  )
}
