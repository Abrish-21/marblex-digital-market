const ViewMoreButton = ({text})=>{
    return(
        <button className=" bg-[#c07d47] px-8 py-4 mt-10 rounded-none hover:-translate-y-6">
        <div className="flex">
        {text}
          <img src="src\assets\icons\arrow.svg" alt="skype-logo" className='w-7' />
        </div>
        </button>
        
    )

}
export default ViewMoreButton;
          