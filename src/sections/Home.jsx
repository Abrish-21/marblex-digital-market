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

      <div className="w-full h-screen overflow-hidden relative">
            <img src="src\assets\images\homepage-background.jpg" alt="" />

        <div className=" grid grid-cols-[70fr_30fr] top-0 left-0 absolute w-full h-screen bg-slate-900 bg-opacity-80 pl-10  ">
          <div className="mt-[14rem]">
            <p className="line-before ">WELCOME TO DIGITAL MARBLEX</p>
            <br />
            <br />
            <h1 className="text-7xl">Forever Fresh And <br />Stunning</h1>
              <ViewMoreButton text="Read More" />
          </div>
          <div className="bg-[#fb923c] h-full w-[30rem]">
            
            </div>
            </div>
          </div>
    
  
  );
}

export default Home;