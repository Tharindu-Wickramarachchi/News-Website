import React, { useState } from 'react';
import bbcNewsIcon from '../assets/bbc-news-icon.png';
import cnnNewsIcon from '../assets/cnn-news-icon.png';
import abcNewsIcon from '../assets/abc-news-icon.png';
import foxNewsIcon from '../assets/fox-news-icon.png';
import techcrunchNewsIcon from '../assets/techcrunch-news-icon.png';
import businessInsiderNewsIcon from '../assets/business-insider-news-icon.png';
import '../styles/NewsNavBar.css';

const NewsNavBar = ({ setSource }) => {
  const [activeIndex, setActiveIndex] = useState();

  const navImgStyle = {
    width: '110px',
    height: '40px',
    border: 'none',
    objectFit: 'cover',
  };

  const activeImgStyle = {
    border: '2px solid #007bff',
    borderRadius: '3px',
    transform: 'scale(1.2)', 
    zIndex: 1,
  };

  const mobileNavStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="newsNavBar">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="newsNavbarNav">
          <ul className="navbar-nav" style={mobileNavStyle}>
            <li className="nav-item">
              <a
                className={`nav-link ${0 === activeIndex ? 'active' : ''}`}
                aria-current={0 === activeIndex ? 'page' : undefined}
                href="#"
                onClick={() => {setActiveIndex(0); setSource("bbc-news");}}
              >
                <img
                  src={bbcNewsIcon}
                  alt="BBC News"
                  style={{ ...navImgStyle, ...(0 === activeIndex ? activeImgStyle : {}) }}
                />
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${1 === activeIndex ? 'active' : ''}`}
                aria-current={1 === activeIndex ? 'page' : undefined}
                href="#"
                onClick={() => {setActiveIndex(1); setSource("fox-news");}}
              >
                <img
                  src={foxNewsIcon}
                  alt="Fox News"
                  style={{ ...navImgStyle, ...(1 === activeIndex ? activeImgStyle : {}) }}
                />
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${2 === activeIndex ? 'active' : ''}`}
                aria-current={2 === activeIndex ? 'page' : undefined}
                href="#"
                onClick={() => {setActiveIndex(2); setSource("abc-news");}}
              >
                <img
                  src={abcNewsIcon}
                  alt="ABC News"
                  style={{ ...navImgStyle, ...(2 === activeIndex ? activeImgStyle : {}) }}
                />
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${3 === activeIndex ? 'active' : ''}`}
                aria-current={3 === activeIndex ? 'page' : undefined}
                href="#"
                onClick={() => {setActiveIndex(3); setSource("cnn");}}
              >
                <img
                  src={cnnNewsIcon}
                  alt="CNN News"
                  style={{ ...navImgStyle, ...(3 === activeIndex ? activeImgStyle : {}) }}
                />
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${4 === activeIndex ? 'active' : ''}`}
                aria-current={4 === activeIndex ? 'page' : undefined}
                href="#"
                onClick={() => {setActiveIndex(4); setSource("techcrunch");}}
              >
                <img
                  src={techcrunchNewsIcon}
                  alt="techcrunch"
                  style={{ ...navImgStyle, ...(4 === activeIndex ? activeImgStyle : {}) }}
                />
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${5 === activeIndex ? 'active' : ''}`}
                aria-current={5 === activeIndex ? 'page' : undefined}
                href="#"
                onClick={() => {setActiveIndex(5); setSource("business-insider");}}
              >
                <img
                  src={businessInsiderNewsIcon}
                  alt="Business Insider"
                  style={{ ...navImgStyle, ...(5 === activeIndex ? activeImgStyle : {}) }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NewsNavBar;
