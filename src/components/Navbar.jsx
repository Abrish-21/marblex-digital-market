import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isFixed, setIsFixed] = useState(false); // Tracks if navbar should be fixed

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 150) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // <header className={`navbar ${isFixed ? 'slide-down' : 'relative'}`}>

  return (
    
    <>
      <nav id="navbar" className={`navbar ${isFixed ? ' slide-down' : 'relative'}`}>
        <a href="##home">
          <div className="flex gap-1 text-slate-950">
            <img id="logo-icon" src="src/assets/icons/logo.svg" alt="logo" />
            <h1 className="font-serif">Marblex</h1>
          </div>
        </a>
        <ul id="arrow-icon" className="text-black flex gap-11 nav-list">
          <div id="nav-item">
            <li><a id="nav-list" href="##">HOME</a></li>
            <img src="src/assets/icons/see-more-logo.svg" alt="see-more-logo" />
          </div>
          <div id="nav-item">
            <li><a id="nav-list" href="##">PAGES</a></li>
            <img src="src/assets/icons/see-more-logo.svg" alt="see-more-logo" />
          </div>
          <div id="nav-item">
            <li><a id="nav-list" href="##">PORTFOLIO</a></li>
            <img src="src/assets/icons/see-more-logo.svg" alt="see-more-logo" />
          </div>
          <div id="nav-item">
            <li><a id="nav-list" href="##">BLOG</a></li>
            <img src="src/assets/icons/see-more-logo.svg" alt="see-more-logo" />
          </div>
          <div id="nav-item">
            <li><a id="nav-list" href="##">CONTACT US</a></li>
          </div>
        </ul>
        <div className="flex gap-3 size-11">
          <img src="src/assets/icons/search.svg" alt="search-icon" />
          <img src="src/assets/icons/hamburger.svg" alt="hamburger-icon" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;