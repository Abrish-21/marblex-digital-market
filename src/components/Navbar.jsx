import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import logo from '../assets/icons/logo.svg';
import search from '../assets/icons/search.svg';
import NavbarElement from './NavbarElement';


function Navbar() {
  const [isFixed, setIsFixed] = useState(false); // Tracks if navbar should be fixed

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsFixed(currentScroll > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar text-sm lg:text-lg w-full ${isFixed ? 'slide-down' : 'absolute'}`}>
      <nav id="navbar" className="flex items-center lg:gap-24 gap-16 justify-start p-4">
        <a href="#home" className="flex items-center md:gap-1 text-slate-950">
          <img id="logo-icon" src={logo} alt="logo"/>
          <h1 className="font-serif text:2xl md:5xl text-gray-950">Marblex</h1>
        </a>

        <div className="hidden lg:block">
          <NavbarElement/>
        </div>
        <div className="flex">
          <img src= {search} alt="" className="lg:size-10 size-12"/>
      
          <Sidebar />
        </div>
      </nav>
    </header>
  );
}

export default Navbar