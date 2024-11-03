import React, { useState } from 'react';
import NavItem from './NavItem';
import smileIcon from '../assets/icons/brands/smile-svgrepo-com.svg'



const NavbarElement = ()=> {

  const [activeDropdown, setActiveDropdown] = useState(null); // Tracks the active dropdown

  // Dropdown options for each nav item
  const homeDropdownItems = [
    'Home Option 1',
    'Home Option 2',
  ];

  const portfolioDropdownItems = [
    'Project 1',
    'Project 2',
  ];

  const blogDropdownItems = [
    'Blog Post 1',
    'Blog Post 2',
  ];

  const pagesDropdownItems = [
    'Page 1',
    'Page 2',

  ];

  const handleNavItemClick = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };


  return (
    <div>
  
          <ul className="flex gap-14 flex-col z-50 lg:flex-row lg:items-center nav-list text-black text-xs">
            <li className="relative">
              <div className="flex-col items-center md:gap-1 cursor-pointer" onClick={() => handleNavItemClick('home')}>
                <NavItem item="HOME" />
              </div>
              {activeDropdown === 'home' && (
                <ul className="dropdown-menu show h-10 overflow-hidden z-0 relative ">
                  {homeDropdownItems.map((option, index) => (
                    <li key={index} className="md:p-2 hover:bg-slate-600">{option}</li>
                  ))}
                </ul>
              )}
            </li>
            <li className="relative">
              <div className="flex items-center text-xs md:gap-1 cursor-pointer" onClick={() => handleNavItemClick('pages')}>
                <NavItem item="PAGES" />
              </div>
              {activeDropdown === 'pages' && (
                <ul className="dropdown-menu show">
                  {pagesDropdownItems.map((option, index) => (
                    <li key={index} className="md:p-2 hover:bg-slate-600">{option}</li>
                  ))}
                </ul>
              )}
            </li>
            <li className="relative">
              <div className="flex items-center md:gap-1 cursor-pointer" onClick={() => handleNavItemClick('portfolio')}>
                <NavItem item="PORTFOLIO" />
              </div>
              {activeDropdown === 'portfolio' && (
                <ul className="dropdown-menu show">
                  {portfolioDropdownItems.map((option, index) => (
                    <li key={index} className="md:p-2 hover:bg-slate-600">{option}</li>
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
                    <li key={index} className="md:p-2 hover:bg-slate-600">{option}</li>
                  ))}
                </ul>
              )}
            </li>
            <div className="relative">
              <p className='text-gray-950 font-semibold lg:text-black lg:font-normal'>CLIENTS</p>
            </div>
          </ul>
          <div className="items-center lg:hidden font-playwrite mt-14 lg:text-3xl text-2xl text-gray-950">
            <img src= {smileIcon} alt="smile-icon" className=' ml-5 animate-bounce  size-20'/>
            <p className='mb-5'>Thank You</p>
          </div>
</div>

  )
}


export default NavbarElement;