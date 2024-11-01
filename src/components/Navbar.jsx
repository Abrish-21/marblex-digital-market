import React, { useState, useEffect } from 'react';
import NavItem from './NavItem';
import SidebarDemo from './SidebarDemo';

function Navbar() {
  const [isFixed, setIsFixed] = useState(false); // Tracks if navbar should be fixed
  const [activeDropdown, setActiveDropdown] = useState(null); // Tracks the active dropdown

  // Dropdown options for each nav item
  const homeDropdownItems = [
    'Home Option 1',
    'Home Option 2',
  ];

  const portfolioDropdownItems = [
    'Project 1',
    'Project 2',
    'Project 3',
  ];

  const blogDropdownItems = [
    'Blog Post 1',
    'Blog Post 2',
  ];

  const pagesDropdownItems = [
    'Page 1',
    'Page 2',
    'Page 3',
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsFixed(currentScroll > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavItemClick = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
    <header className={`navbar ${isFixed ? 'slide-down' : 'absolute'}`}>
      <nav id="navbar" className="flex items-center gap-24 justify-start p-4">
        <a href="#home" className="flex items-center gap-1 text-slate-950">
          <img id="logo-icon" src="src/assets/icons/logo.svg" alt="logo" />
          <h1 className="font-serif text-gray-950">Marblex</h1>
        </a>

        <ul className="flex gap-14 items-center nav-list text-black">
          <li className="relative">
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleNavItemClick('home')}>
              <NavItem item="HOME" />
            </div>
            {activeDropdown === 'home' && (
              <ul className="dropdown-menu show">
                {homeDropdownItems.map((option, index) => (
                  <li key={index} className="p-2 hover:bg-slate-600">{option}</li>
                ))}
              </ul>
            )}
          </li>
          <li className="relative">
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleNavItemClick('pages')}>
              <NavItem item="PAGES" />
            </div>
            {activeDropdown === 'pages' && (
              <ul className="dropdown-menu show">
                {pagesDropdownItems.map((option, index) => (
                  <li key={index} className="p-2 hover:bg-slate-600">{option}</li>
                ))}
              </ul>
            )}
          </li>
          <li className="relative">
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleNavItemClick('portfolio')}>
              <NavItem item="PORTFOLIO" />
            </div>
            {activeDropdown === 'portfolio' && (
              <ul className="dropdown-menu show">
                {portfolioDropdownItems.map((option, index) => (
                  <li key={index} className="p-2 hover:bg-slate-600">{option}</li>
                ))}
              </ul>
            )}
          </li>
          <li className="relative">
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleNavItemClick('blog')}>
              <NavItem item="BLOG" />
            </div>
            {activeDropdown === 'blog' && (
              <ul className="dropdown-menu show">
                {blogDropdownItems.map((option, index) => (
                  <li key={index} className="p-2 hover:bg-slate-600">{option}</li>
                ))}
              </ul>
            )}
          </li>
          <li>CONTACT</li>
        </ul>

        <div className="">
          <img src="src/assets/icons/search.svg" alt="" className="size-10" />
        </div>
        <div className="">
          <SidebarDemo />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;