import arrow from '../assets/icons/arrow.svg';
const ViewMoreButton = ({text})=>{
    return(
        <button className="w-52 lg:ml-0 ml-14 lg:w-52 animate-pulse text-sm lg:text-lg text-black font-semibold rounded-sm font-roboto  bg-[#fb923c] hover:bg-zinc-950 hover:text-white px-6 py-2 lg:mt-10 ">
        <div className="flex  justify-center">
          <p>{text}</p>
          <img src= {arrow} alt="arrow-logo" className='lg:w-7 w-4' />
        </div>
        </button>
        
    )

}
export default ViewMoreButton;
          