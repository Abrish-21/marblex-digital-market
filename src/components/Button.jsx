import arrow from '../assets/icons/arrow.svg';
const ViewMoreButton = ({text})=>{
    return(
        <button className=" rounded-lg font-roboto  bg-[#fb923c] hover:bg-zinc-950 hover:text-white px-6 py-2 mt-10 ">
        <div className="flex">
          <p>{text}</p>
          <img src= {arrow} alt="skype-logo" className='w-7' />
        </div>
        </button>
        
    )

}
export default ViewMoreButton;
          