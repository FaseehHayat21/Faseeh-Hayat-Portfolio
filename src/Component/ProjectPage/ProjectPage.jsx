import React, { useState } from "react";
import "./ProjectPage.css";

const ProjectPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const frontendProjects = [
    { 
      name: "Portfolio Website", 
      description: "A personal portfolio site with animations.",
      image: "portfolio.jpg",
      link: "https://myportfolio.com"
    },
    { 
      name: "E-commerce UI", 
      description: "An interactive UI for an online store.",
      image: "ecommerce.jpg",
      link: "https://ecommerce.com"
    },
    { 
      name: "News Aggregator", 
      description: "A React app fetching and displaying news.",
      image: "news.jpg",
      link: "https://newsapp.com"
    }
  ];

  const fullstackProjects = [
    { 
      name: "Inventory Management System", 
      description: "A MERN stack app for managing stock.",
      image: "inventory.jpg",
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
      image: "discountify.jpg",
      link: "https://discountify.com"
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
