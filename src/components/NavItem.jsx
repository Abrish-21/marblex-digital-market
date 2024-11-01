import seemore from '../assets/icons/see-more-logo.svg'

const  NavItem = ({item})=> {
  return (
    <div className="nav-item flex items-center">
            <p>{item}</p>
        
           <img src={seemore} alt="" className='size-5 mt-2'/>
           </div>
  )
}

export default NavItem