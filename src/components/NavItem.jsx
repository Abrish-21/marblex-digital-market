import seemore from '../assets/icons/see-more-logo.svg'
import icon from '../assets/icons/dashboard.svg'

const  NavItem = ({item})=> {
  return (
    <div className="nav-item flex items-center">
      <img src={icon} alt="" className='size-8 lg:mt-2 lg:hidden'/>
            <p className='text-gray-950 font-semibold lg:text-black lg:font-normal'>{item}</p>
        
           <img src={seemore} alt="" className='size-5 lg:mt-2 '/>
    </div>
  )
}

export default NavItem