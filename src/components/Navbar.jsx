
import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import NavItem from './NavItem';
import SidebarDemo from './SidebarDemo';


function Navbar() {
  const [isFixed, setIsFixed] = useState(false); // Tracks if navbar should be fixed


  // Dropdown options for each nav item
  const homeDropdownItems = [
    { label: 'Home Option 1', value: 'home1' },
    { label: 'Home Option 2', value: 'home2' },
  ];

  const portfolioDropdownItems = [
    { label: 'Project 1', value: 'project1' },
    { label: 'Project 2', value: 'project2' },
    { label: 'Project 3', value: 'project3' },
  ];

  const blogDropdownItems = [
    { label: 'Blog Post 1', value: 'post1' },
    { label: 'Blog Post 2', value: 'post2' },
  ];

  const pagesDropdownItems = [
    { label: 'Page 1', value: 'page1' },
    { label: 'Page 2', value: 'page2' },
    { label: 'Page 3', value: 'page3' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      
      setIsFixed(currentScroll > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return(
    <header className={`navbar ${isFixed ? 'slide-down' : 'absolute'}`}>
      <nav id="navbar" className="flex items- gap-24 justify-start items-center p-4">
      
    <a href="#home" className="flex items-center gap-1 text-slate-950">
        <img id="logo-icon" src="src/assets/icons/logo.svg" alt="logo" />
        <h1 className="font-serif text-gray-950">Marblex</h1>
    </a>

    <ul className="flex gap-14 items-center nav-list text-black">
      <li><NavItem item = "HOME"/></li>
      <li><NavItem item = "PAGES"/></li>
      <li><NavItem item = "PORTFOLIO"/></li>
      <li><NavItem item = "BLOG"/></li>
      <li>CONTACT</li>
    </ul>

  
          <div className=""><img src="src\assets\icons\search.svg" alt=""className='size-10' /></div>
          <div className=""><SidebarDemo/></div>

          
      </nav>
    </header>
  );
}

export default Navbar;
