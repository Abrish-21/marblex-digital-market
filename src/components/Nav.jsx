function Nav() {
  return (<>
  <nav id="navbar" className= "sticky top-0 flex gap-36 bg-white h-24">
        <div className="flex gap-1 align-middle">
          <img id="logo-icon" src="src\assets\icons\logo.svg" alt="logo" />
          <h1 className="text-[#fb923c] font-serif">Marblex</h1>
          </div>

        <ul id="icons-navbar" className=" flex gap-11 flex-nowrap">
            <div id="nav-item">
            <li><a href="##">HOME</a></li>
            <img src="src\assets\icons\see-more-logo.svg" alt="see-more-logo" />
            </div>

            <div id="nav-item">
            <li><a href="##">PAGES</a></li>
            <img src="src\assets\icons\see-more-logo.svg" alt="see-more-logo" />
            </div>

            <div id="nav-item">
              <li><a href="##">PORTIFOLIO</a></li>
              <img src="src\assets\icons\see-more-logo.svg" alt="see-more-logo" />
            </div>

            <div id="nav-item">
              <li><a href="##">BLOG</a></li>
              <img src="src\assets\icons\see-more-logo.svg" alt="see-more-logo" />
            </div>

            <div id="nav-item">
              <li><a href="##">CONTACT US</a></li>
            </div>

        </ul>
        <div id="icons-navbar" className="flex gap-3">
          <img  src="src\assets\icons\search.svg" alt="search-icon" />
          <img className="bg-[#fb923c]" src="src\assets\icons\hamburger.svg" alt="hamburger-icon" />
        </div>
      
        </nav>
    
    
  </>)
}

export default Nav