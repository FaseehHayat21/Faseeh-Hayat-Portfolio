import React, {useEffect} from 'react'
import "./Skill.css"
import node from "../../assets/node.jpg"
import react1 from "../../assets/react.jpg"
import expressjs from "../../assets/expressjs.png"
import mongodb from "../../assets/mongodb.png"
import { FaArrowRightLong } from "react-icons/fa6";
import Aos from "aos"
import "aos/dist/aos.css"
export default function Skill() {

  useEffect(()=> {
    Aos.init({duration: 1000});
})

  return (
    <>
    <div className="ski">
        <div className="ski-item-1" data-aos="fade-right">
        <h3>Skills</h3>
        </div>
        
        <div className="ski-item-1" data-aos="fade-up"> 
        <div>
          <div className='img1'>
          <div>
          <img className="image1 " src={node} alt="" />
          </div>
          <div>
          <h3>Node.JS</h3>
          </div>
          </div>
          </div>
        </div>


        <div className="ski-item-1" data-aos="fade-up">       
        <div>
          <div className='img1'>
          <div >
          <img className="image1 " src={react1} alt="" />
          </div>
          <div>
          <h3>ReactJS</h3>
          </div>
          </div>
          </div>
        </div>
        
        
        <div className="ski-item-1" data-aos="fade-up">       
        <div>
          <div className='img1'>
          <div >
          <img className="imageexp" src={expressjs} alt="" />
          </div>
          <div>
          <h3>ExpressJS</h3>
          </div>
          </div>
          </div>
        </div>


        <div className="ski-item-1" data-aos="fade-up">       
        <div>
          <div className='img1'>
          <div >
          <img className="imagemd " src={mongodb} alt="" />
          </div>
          <div>
          <h3>MongoDb</h3>
          </div>
          </div>
          </div>
        </div>

        
    </div>
    </>
  )
}
