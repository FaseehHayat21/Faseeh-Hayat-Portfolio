import React, { useEffect } from "react";
import "./Services.css";

const Services = () => {
   useEffect(() => {
    const cards = document.querySelectorAll('.luxury-card');
    
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      e.currentTarget.querySelector('.card-hover-effect').style.setProperty('--x', `${x}px`);
      e.currentTarget.querySelector('.card-hover-effect').style.setProperty('--y', `${y}px`);
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
      });
    };
  }, []);

  const services = [
    {
      title: "Custom Web Design",
      description:
        "Elegant and unique designs tailored to your brand's personality, ensuring your digital presence stands out.",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description:
        "Responsive and intuitive mobile applications that deliver seamless user experiences.",
      icon: "📱",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Robust and scalable e-commerce platforms designed to drive sales and customer engagement.",
      icon: "🛒",
    },
    {
      title: "Digital Marketing",
      description:
        "Innovative marketing strategies to boost your brand's visibility and drive conversion.",
      icon: "🚀",
    },
    {
      title: "SEO & Analytics",
      description:
        "Data-driven SEO and analytics services that maximize your online reach and impact.",
      icon: "📊",
    },
    {
      title: "UI/UX Consultation",
      description:
        "Expert guidance on enhancing user interfaces and creating delightful user experiences.",
      icon: "🎨",
    },
  ];

  return (
    <section className="luxury-services">
      <div className="luxury-container">
        <header className="luxury-header">
          <h1 className="luxury-title">
            <span className="title-gradient">Our Premium Services</span>
          </h1>
          <p className="luxury-subtitle">
            Experience the art of digital excellence with our bespoke solutions
          </p>
          <div className="luxury-divider"></div>
        </header>

        <div className="luxury-grid">
          {services.map((service, index) => (
            <div key={index} className="luxury-card">
              <div className="card-inner">
                <div className="card-icon">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
                <div className="card-hover-effect"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;