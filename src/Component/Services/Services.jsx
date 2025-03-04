import React from "react";
import "./Services.css";

const Services = () => {
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
    <div className="services-glass-container">
      <header className="services-glass-header">
        <h1>Our Premium Services</h1>
        <p>Experience the art of digital excellence with our bespoke solutions.</p>
      </header>
      <div className="services-glass-grid">
        {services.map((service, index) => (
          <div key={index} className="glass-card">
            <div className="glass-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
