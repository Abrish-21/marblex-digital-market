import { useState } from "react";
import { backgroundImg } from "../constants";
import ViewMoreButton from "../components/ViewMoreButton";

function Home() {
  const [Imgindex, setImgIndex] = useState(0); //Tracks change in image


  const ShowprevImg = () => {
    setAnimationActive(true)
    setImgIndex((index) => {
      if (index === 0) return backgroundImg.length - 1;
      return index - 1;
    });
  };

  const ShownxtImg = () => {
    setImgIndex((index) => {
      if (index === backgroundImg.length - 1) return 0;
      return index + 1;
    });
  };

  return (
    <div className="w-screen h-screen">
      <div className="bg-[url('src/assets/images/homepage-background.jpg')]
        bg-cover bg-center bg-gray-700 bg-blend-overlay grid grid-cols-[70fr_30fr]">
        <div className="p-32 pt-52 justify-center w-full h-screen">
          <p className="line-before">WELCOME TO DIGITAL MARBLEX</p>
          <br />
          <br />
          <h1 className="text-7xl">Forever Fresh And <br />Stunning</h1>
       
            <ViewMoreButton text="Read More" />
          
        </div>
        <div className="bg-[rgba(247,168,103,0.92)] relative">
          <div className=" absolute z-10 mt-10 -ml-10 rounded-md w-[18rem] h-[23rem] bg-center bg-cover">
            <img src={backgroundImg[Imgindex]} alt="" className="rounded-3xl"/>
            <div className="animate-pulse  absolute z-20 w-[18rem] h-[23rem] -mt-96 ml-16 bg-cover bg-center">
              <img src={backgroundImg[Imgindex]} alt="" className="inset-0 rounded-2xl shdow-lg" />
            </div>
          </div>
          <div className="flex gap-8 ml-4 mt-[35rem]">
            <button onClick={ShowprevImg} className="size-11 bg-[rgba(247,168,103,0.92)] px-3 py-1.5 rounded-none hover:bg-[#fb923c]">
              <img src="src/assets/icons/previous.svg" alt="previous-icon" />
            </button>
            <button onClick={ShownxtImg} className="size-11 bg-[rgba(247,168,103,0.92)] px-3 py-1.5 rounded-none hover:bg-[#fb923c]">
              <img src="src/assets/icons/next.svg" alt="next-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;