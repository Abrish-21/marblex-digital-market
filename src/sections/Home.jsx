import { useState } from "react";
import { CoverImages } from "../constants";
import ViewMoreButton from "../components/Button";
import prev from '../assets/icons/prev.svg';
import next from '../assets/icons/next.svg';

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
    <div className="w-full h-screen overflow-hidden relative">
      <img src={homescreen} alt="homepage-image" className="w-full h-full object-cover" />

      <div className="grid grid-cols-[70fr_30fr] top-0 left-0 absolute w-full h-screen bg-slate-950 bg-opacity-80 pl-10">
        <div className="mt-[17rem]">
          <p className="line-before">WELCOME TO DIGITAL MARBLEX</p>
          <br />
          <br />
          <div className="text-container pb-8">
            <h1 className={`text-7xl ${textClass}`}>{currentText}</h1>
          </div>
          <ViewMoreButton text="Read More" />
        </div>
        <div className="bg-none h-full w-[30rem] relative pl-32 pt-16">
          <div className="absolute bottom-52 right-20 flex gap-4 p-30 rounded-lg">
            {CoverImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt=""
                className="partner-logo w-[8rem] h-[6rem] object-cover rounded-lg"
                onClick={() => changeHomeScreen(image.src, image.text)}
              />
            ))}
          </div>
          <div className="absolute bottom-32 left-36 flex gap-6">
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