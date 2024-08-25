import React, { useState, useEffect } from 'react';
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { MdLocalPhone } from "react-icons/md";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const footerStyle = {
    backgroundColor: '#2B3035', 
    color: '#ffffff',        
    padding: isMobile ? '20px 10px' : '20px', 
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center', 
  };

  const linkStyle = {
    color: '#ffffff',           
    textDecoration: 'none',    
    display: 'block',          
    margin: '10px 0',         
  };

  const socialIconStyle = {
    color: '#33ccff',         
    marginRight: '10px',       
    fontSize: '25px',      
  };

  const sectionStyle = {
    textAlign: 'center',   
    margin: '0 40px',   
    maxWidth: '400px',    
  };

  const descriptionStyle = {
    textAlign: 'justify',      
    marginBottom: '20px',    
  };

  return (
    <footer className="" style={footerStyle}>
      <div style={sectionStyle}>
        <span className="badge text-bg-primary text-black fs-3">N E W S</span>
        <p className="my-3" style={descriptionStyle}>
          Stay updated with news from 54 countries on our site. We bring you the latest headlines and trends from around the globe.
        </p>
      </div>

      <div style={sectionStyle}>
        <h5 className="fs-3 text-primary fw-bold">Contact Me</h5>
        <div>
          <a href="tel:0703114655" style={linkStyle}>
            <MdLocalPhone style={socialIconStyle} /> Mobile Number - 0703114655
          </a>
          <a href="mailto:tharinduwick2002@gmail.com" style={linkStyle}>
            <IoIosMail style={socialIconStyle} /> Gmail - tharinduwick2002@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/tharindu-wickramarachchi-538819258/" style={linkStyle}>
            <FaLinkedin style={socialIconStyle} /> LinkedIn - Tharindu Wickramarachchi
          </a>
          <a href="https://github.com/Tharindu-Wickramarachchi" style={linkStyle}>
            <SiGithub style={socialIconStyle} /> GitHub - Tharindu Wickramarachchi
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
