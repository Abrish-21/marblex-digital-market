const  NavItem = ({item})=> {
  return (
    <div className="nav-item flex items-center">
            <p>{item}</p>
        
           <img src="src\assets\icons\see-more-logo.svg" alt="" className='size-5 mt-2'/>
           </div>
  )
}

export default NavItem