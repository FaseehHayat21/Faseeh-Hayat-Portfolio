import React, { useState } from "react";
import "./ProjectPage.css";
import itl from "../../assets/itl.png"
import amt from "../../assets/amt.png"
import lap from "../../assets/lap.png"
import dis from "../../assets/dis.png"
const ProjectPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const frontendProjects = [
    { 
      name: "Infinity Tech Labs", 
      description: "Infinity Tech Labs is a cutting-edge technology solutions provider specializing in innovative software development, ",
      image: itl,
      link: "https://infinitytechlabs.org/"
    },
    { 
      name: "Amtegrity Inc", 
      description: "Amtegrity is a trusted cybersecurity and compliance solutions provider, dedicated to safeguarding government and enterprise systems. R",
      image: amt,
      link: "https://amtegrity.netlify.app/"
    }
  ];

  const fullstackProjects = [
    { 
      name: "LapShop ", 
      description: "A MERN stack app for managing LaptopsWe provide a seamless platform for buying and selling laptops effortlesslyLapShop: Your trusted marketplace for quality laptops at thebest prices.",
      image: lap,
      link: "https://inventoryapp.com"
    },
    { 
      name: "Blog Application", 
      description: "A fullstack blogging platform with user authentication.",
      image: "blog.jpg",
      link: "https://blogapp.com"
    },
    { 
      name: "Discountify", 
      description: "A student facilitation portal for discounts and jobs.",
      image: dis,
      link: "https://discountifyfyp.netlify.app"
    }
  ];

  const allProjects = [...frontendProjects, ...fullstackProjects];

  return (
    <div className="project-container">
      <h1 className="title">My Projects</h1>
      <div className="tabs">
        <button
          className={activeTab === "all" ? "active" : ""}
          onClick={() => setActiveTab("all")}
        >
          All Projects
        </button>
        <button
          className={activeTab === "frontend" ? "active" : ""}
          onClick={() => setActiveTab("frontend")}
        >
          Frontend Projects
        </button>
        <button
          className={activeTab === "fullstack" ? "active" : ""}
          onClick={() => setActiveTab("fullstack")}
        >
          Fullstack Projects
        </button>
      </div>
      <div className="projects-list">
        {(activeTab === "all" ? allProjects : activeTab === "frontend" ? frontendProjects : fullstackProjects).map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.name} className="project-image" />
            </div>
            <div className="project-details">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
