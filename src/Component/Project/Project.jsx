import React, { useState, useEffect } from 'react';
import "./Project.css";
import image1 from '../../assets/image1.jpg';
import image2 from "../../assets/WEBSITE.jpg";
import blog from "../../assets/blog-1.jpg";
import image3 from "../../assets/TextEditor.png";
import sysnetiks from "../../assets/sysnetiks.png";
import NFT from "../../assets/Mockups.png"
import Aos from "aos"
import "aos/dist/aos.css"
export default function Project() {
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(()=> {
    Aos.init({duration: 2000});
})
  // Sample data for the list of items
  // const items = [
  //   { id: 1, name: 'Project 1', description: 'Description of Item 222222222222222222221', imageUrl: image1, ProjectLink: 'https://github.com/FaseehHayat21/Blog-application' },
  //   { id: 2, name: 'Project 2', description: 'Description of Item 22223afdadasda2', imageUrl: image, ProjectLink: 'https://github.com/FaseehHayat21/Blog-application' },
  //   { id: 3, name: 'Project 3', description: 'Description of Item asdasdasdasd3', imageUrl: image2, ProjectLink: 'https://github.com/FaseehHayat21/Blog-application' },
  //   { id: 4, name: 'Project 4', description: 'Description of Itemwwwwwwwwwwwwwwwwwwwwww 4', imageUrl: image3, ProjectLink: 'https://github.com/FaseehHayat21/Blog-application' }
  // ];

  // useEffect(() => {
  //   setSelectedItem(items[0]); // Initialize selected item
  // }, []);

  // // Function to handle click on an item
  // const onItemClick = (item) => {
  //   setSelectedItem(item);
  // };

  return (
    <>
   
    <div className="project-showcase">
      <div className="heading-project">
        <h1  className="heading-project">PROJECTS SHOWCASE</h1>
      </div>
      <div className="project-1" data-aos="fade-right">
        <div className="project-1-image">
          <img src={blog} alt=""  className="project-1-image-1"/>
        </div>
        <div className="project-1-content">
          <h1>Blog Application</h1>
          <p>• Developed a Blog Application using the MERN stack.
              • Implemented full CRUD operations for blog posts.
              • Created advanced search and filter functionalities.
              • Managed front-end and back-end development for seamless integration</p>
          <div className='buttons-about'>
                            <a className="button-about-cv" href="https://github.com/FaseehHayat21/Blog-application" target='_blank'>
                            <span className="button-about-cv_lg">
                                <span className="button-about-cv_sl"></span>
                                <span className="button-about-cv_text">Project Link</span>
                                
                            </span>
                        </a>  
           </div>
        </div>
      </div>
      <div className="project-2" data-aos="fade-left">
        <div className="project-2-image">
          <img src={image2} alt=""  className="project-1-image-1"/>
        </div>
        <div className="project-2-content">
          <h1>Inventory Managment Web Application</h1>
          <p>• Developed an Inventory Management System using the MERN stack.
            • Implemented full CRUD operations for inventory items.
            • Created robust search and filter functionalities.
            • Handled front-end and back-end development for seamless integration</p>
          <div className='buttons-about'>
                            <a className="button-about-cv" >
                            <span className="button-about-cv_lg">
                                <span className="button-about-cv_sl"></span>
                                <span className="button-about-cv_text">Project Link</span>
                            </span>
                        </a>  
           </div>
        </div>
      </div>
      <div className="project-1" >
        <div className="project-1-image" data-aos="zoom-in-down">
          <img src={NFT} alt=""  className="project-1-image-2"/>
        </div>
        <div className="project-1-content"  data-aos="fade-right">
          <h1>NFT E-MArketPlace</h1>
          <p>• Developed the frontend interface for an NFT E-marketplace using HTML, CSS, and JavaScript.
             • Designed responsive layouts and user interfaces to highlight and navigate NFT collections effectively.
             • Implemented interactive features and animations to enhance user engagement and browsing exp</p>
          <div className='buttons-about'>
                            <a className="button-about-cv" href="https://github.com/FaseehHayat21/NFTs-MarketPlace" target='_blank'>
                            <span className="button-about-cv_lg">
                                <span className="button-about-cv_sl"></span>
                                <span className="button-about-cv_text">Project Link</span>
                            </span>
                        </a>  
           </div>
        </div>
      </div>
      <div className="project-2" >
        <div className="project-2-image" data-aos="zoom-in-down">
          <img src={sysnetiks} alt=""  className="project-1-image-2"/>
        </div>
        <div className="project-2-content"  data-aos="fade-right">
          <h1>Sysnetiks</h1>
          <p>• Developed the frontend interface for an Sysnetiks using React.
             • Designed responsive layouts and user interfaces to highlight and navigate NFT collections effectively.
             • Implemented interactive features and animations to enhance user engagement and browsing exp</p>
          <div className='buttons-about'>
                            <a className="button-about-cv" href="https://github.com/FaseehHayat21/NFTs-MarketPlace" target='_blank'>
                            <span className="button-about-cv_lg">
                                <span className="button-about-cv_sl"></span>
                                <span className="button-about-cv_text">Project Link</span>
                            </span>
                        </a>  
           </div>
        </div>
      </div>
     

      

      {/* MAIN DIV ENDS HERE */}
    </div>

    </>

  )
}
