import { useState } from "react";
import { CoverImages } from "../constants";
import Button from "../components/Button";
import prev from '../assets/icons/prev.svg';
import next from '../assets/icons/next.svg'




function Home() {
  const [Imgindex, setImgIndex] = useState(0); // Tracks change in image
  const [homescreen, setHomescreen] = useState(CoverImages[0].src); // Tracks the current home screen image
  const [currentText, setCurrentText] = useState(CoverImages[0].text); // Tracks the current text
  const [textClass, setTextClass] = useState("entered"); // Tracks the current text class

  const ShowprevImg = () => {
    setImgIndex((index) => {
      const newIndex = index === 0 ? CoverImages.length - 1 : index - 1;
      setHomescreen(CoverImages[newIndex].src);
      setCurrentText(CoverImages[newIndex].text);
      return newIndex;
    });
  };

  const ShownxtImg = () => {
    setImgIndex((index) => {
      const newIndex = index === CoverImages.length - 1 ? 0 : index + 1;
      setHomescreen(CoverImages[newIndex].src);
      setCurrentText(CoverImages[newIndex].text);
      return newIndex;
    });
  };

  const changeHomeScreen = (imgSrc, text) => {
    setTextClass("exiting");
    setTimeout(() => {
      setHomescreen(imgSrc);
      setCurrentText(text);
      setTextClass("entering");
      setTimeout(() => {
        setTextClass("entered");
      }, 500);
    }, 500);
  };

  return (
    <div className="w-full h-screen">
      <img src={homescreen} alt="homepage-image" className="w-full h-screen flex-wrap object-cover" />

      <div className="lg:grid lg:grid-cols-[70fr_30fr] flex flex-col top-0 left-0 gap-10  absolute w-full h-screen bg-slate-950 bg-opacity-80 lg:pl-10">
        <div className="lg:mt-[14rem] mt-[11rem] p-8 lg:p-0 flex flex-col gap-10 lg:items-start  ">
          <p className="line-before text-sm lg:text-lg">WELCOME TO DIGITAL MARBLEX</p>


          <div className=" lg:mt-10 lg:text-container lg:pb-8">
            <p className={`lg:text-7xl text-4xl ${textClass}`}>{currentText}</p>
          </div>
       
          <Button text="Read More" />
        </div>
        <div className="bg-none lg:h-full lg:w-[30rem] lg:relative lg:pl-32 lg:pt-16">
          <div className="lg:absolute relative lg:bottom-52 lg:right-20 justify-center flex gap-4 lg:p-30 rounded-lg">
            {CoverImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt=""
                className="partner-logo lg:w-[8rem] lg:h-[6rem] size-24 object-cover rounded-lg"
                onClick={() => changeHomeScreen(image.src, image.text)}
              />
            ))}
          </div>
          <div className="lg:absolute lg:bottom-32 lg:left-36 flex mt-7 lg:mt-0 justify-center lg:gap-6">
            <button onClick={ShowprevImg}>
              <img id="icons-navbar" src= {prev} alt="" />
            </button>
            <button onClick={ShownxtImg}>
              <img id="icons-navbar" src= {next} alt="" />
            </button>





          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;