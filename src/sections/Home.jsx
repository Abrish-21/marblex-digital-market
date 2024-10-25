import { useState } from "react";
import { backgroundImg } from "../constants";

;

function Home() {
  const [Imgindex, setImgIndex] = useState(0)
  const ShowprevImg = ()=>{
    setImgIndex((index)=>{
      if(index==0) return backgroundImg.length -1
      return index -1
    })
    
      
    
  }

  const ShownxtImg = ()=>{
    setImgIndex((index)=>{
      if(index== backgroundImg.length-1) return 0
      return index +1
    })
    
      
    
  }
  return (
    <div className=" w-screen h-screen">
      {/* <div>
        <Address/>
      </div>
      <div className="sticky top-0 ">
        <Nav/>
      </div> */}
      <div className=" bg-[url('src/assets/images/homepage-background.jpg')]
        bg-cover bg-center bg-gray-700 bg-blend-multiply grid grid-cols-[70fr_30fr]">
        <div className="  p-32 pt-52 justify-center w-full h-screen">
          <p className="line-before">WELCOM TO DIGITAL MARBLEX</p>
          <br />
          <br />
          <h1 className="text-7xl">Forever Fresh And <br />Stunning</h1>
            <button className=" bg-[rgba(247,168,103,0.92)] px-8 py-4 mt-10 rounded-none">
            <div className="flex">
              READ MORE
              <img src="src\assets\icons\arrow.svg" alt="skype-logo" className='w-7' />
            </div>
            </button>
        </div>
          <div className=" bg-[rgba(247,168,103,0.92)] ">

              <div className="relative mt-10  -ml-10 rounded-md w-[18rem] h-[23rem] bg-center bg-cover ">
                <img src= {backgroundImg[Imgindex]} alt="" />
              <div className="absolute rounded-md w-[18rem] h-[23rem] -mt-96 ml-16
             bg-cover bg-center">
              <img src={backgroundImg[Imgindex]} alt="" className="inset-0"/>
              </div>
              </div>

            <div class   className="flex gap-8 mt-36 ml-4">
            <button onClick={ShownxtImg} className="size-11  bg-[rgba(247,168,103,0.92)] px-3 py-1.5 rounded-none hover:bg-[#fb923c]">
                <img src= "src\assets\icons\previous.svg" alt="" />
              </button>
              <button onClick={ShowprevImg} className="size-11 bg-[rgba(247,168,103,0.92)] px-3 py-1.5 rounded-none hover:bg-[#fb923c]">
                <img src="src\assets\icons\next.svg" alt="" />
              </button>
              

            </div>
          </div>
    

      </div>
      </div>

  );
};

export default Home;