import React, { useState, useEffect } from 'react';
import CountryDropdown from './CountryDropdown';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Navbar = ({ setCountryCode, setCategory, setCurrentCategory }) => {
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'United States',
    flag: 'fi fi-us'
  });

  const [showScrollButton, setShowScrollButton] = useState(false);

  const getNavLinkClass = (category) => {
    return category === setCurrentCategory ? 'nav-link text-info' : 'nav-link';
  };
  

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge text-bg-primary text-black fs-2">N E W S</span>
          </a>
          <div className="dropdown">
            <button 
              className="btn btn-secondary dropdown-toggle text-white fw-semibold" 
              type="button" 
              data-bs-toggle="dropdown" 
              aria-expanded="false" 
              style={{ height: '42px', width: '220px', backgroundColor:'#394046'}}
            >
              <span className={`${selectedCountry.flag}  `}></span> {selectedCountry.name}
            </button>
            <CountryDropdown
              setCountryCode={setCountryCode}
              setSelectedCountry={setSelectedCountry}
            />
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{color:"white"}} data-bs-theme="dark">
        <div className="container-fluid">
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center fw-bold" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-3">
                <div className={getNavLinkClass("general")} onClick={() => setCategory("general")}>General</div>
              </li>
              <li className="nav-item mx-3">
                <div className={getNavLinkClass("business")} onClick={() => setCategory("business")}>Business</div>
              </li>
              <li className="nav-item mx-3">
                <div className={getNavLinkClass("entertainment")} onClick={() => setCategory("entertainment")}>Entertainment</div>
              </li>
              <li className="nav-item mx-3">
                <div className={getNavLinkClass("health")} onClick={() => setCategory("health")}>Health</div>
              </li>
              <li className="nav-item mx-3">
                <div className={getNavLinkClass("science")} onClick={() => setCategory("science")}>Science</div>
              </li>
              <li className="nav-item mx-3">
                <div className={getNavLinkClass("sports")} onClick={() => setCategory("sports")}>Sports</div>
              </li>
              <li className="nav-item mx-3">
                <div className={getNavLinkClass("technology")} onClick={() => setCategory("technology")}>Technology</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{
            zIndex:'1',
            position: 'fixed',
            bottom: '30px',
            right: '15px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            fontSize: '24px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            cursor: 'pointer'
          }}
        >
        <MdOutlineKeyboardArrowUp size={40} color="#fff"/>
        </button>
      )}
    </>
  );
};

export default Navbar;
