import BulletSentence from "../components/BulletSentence";
import ProfileCard from "../components/ProfileCard";
import ProgressBar from "../components/ProgressBar";
import ViewMoreButton from "../components/Button";
function About() {
  return (
    <div className="relative w-full">
      <div className="w-full bg-white md:grid flex md:gap-0 gap-6 flex-col flex-wrap md:grid-cols-[34fr_30fr_30fr]">
        <div className="md:scale-[85%] scale-[100%] md:px-0 px-4">
          <div className="flex w-full flex-wrap overflow-hidden flex-col justify-start">
            <p className="line-before mb-4 font-BebasNeueStatic font-semibold text-[rgba(247,168,103,0.92)]">ABOUT US</p>
            <h1 className="md:text-6xl text-4xl md:ml-0 ml-5 font-BebasNeueStatic text-black">We Have A Lot Of Fun <br className="md:hidden" /> Process We Grow</h1>
            <div className="mt-6 mb-6 ml-14 md:ml-0">
              <BulletSentence text="Come to Our marblex Office for a Visit" />
              <BulletSentence text="Take Your time to make your choice" />
              <BulletSentence text="Let's Find the Best Natural Stone" />
              <BulletSentence text="Delivery & Installation" />
            </div>
            <div className="flex lg:ml-0">
              <ProfileCard Img= "https://i.postimg.cc/VNRQ1W7W/profile2.jpg" name="Alex Jhon Martin" role="MANAGER"/>
              <img className="lg:size-28 size-16" src= "https://i.postimg.cc/j2DGH0RM/sign1.png" alt="signature" />
            </div>
          </div>
        </div>
        <div className="lg:scale-[85%] lg:ml-0 ml-3">
          <div>
            <img className="lg:h-[30rem] lg:w-[25rem] h-[20rem] w-[18rem] lg:ml-0 ml-10 rounded-lg " src= "https://i.postimg.cc/MTT4w2fz/minh-pham-Y6-Hu-Hkhr-KYU-unsplash.jpg" alt="living-room" />
          </div>
        </div>
        <div className="lg:scale-[85%] lg:p-0 p-3"> 
          <div className="w-full flex flex-col">
            <p className="lg:text-6xl text-2xl  text-black font-BebasNeueStatic mb-9">Provide Solutions Of Every Kind</p>
            <p className="mb-14 text-black lg:text-lg text-sm">Providing solutions to its customers,  Marblex can <br className="md:hidden" /> take a consultative approach, working closely with <br className="md:hidden" /> clients to understand their needs and preferences.</p>
            <ProgressBar value ={90}/>
            <ProgressBar value ={79}/>
            <ViewMoreButton text="Read More" />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-[50fr_50fr] md:grid-rows-1 grid-rows-[50fr_50fr] md:pt-24 w-full flex-wrap">
        <div className="">
          <div className=" pt-10">
            <img className=" md:w-[40rem] md:h-[27rem] h-[25rem] w-[22rem] md:ml-0 ml-5 rounded-lg center object-cover" src = "https://i.postimg.cc/nLRxB1vc/modern-luxury-living-room-interior.jpg" alt="bath-room" />
          </div>
        </div>
        <div className="lg:scale-[85%] pt-5">
          <div className="font-roboto flex flex-col md:gap-6 p-6 gap-3 md:text-base text-sm pt-1">
            <p className="line-before mb-4 font-semibold text-[rgba(247,168,103,0.92)]">ABOUT US</p>
            <p className="md:text-5xl text-xl">Visit Our Marble & Granite Display <br className="md:hidden"/> Warehouses</p>
            <p>Marblex could potentially use display warehouses to <br className="md:hidden" /> showcase its range of marble <br className="hidden md:block" /> products such as slates, <br className="md:hidden"/> tiles, and countertops.</p>
            <div className="font-bold md:text-3xl text-xl pt-5 flex flex-col gap-8 w-2/3">
              <p><span className="text-[rgba(247,168,103,0.92)]">01  </span> The best Marble Company</p>
              <p className=" w-[21rem] lg:w-auto border-t border-[rgba(247,168,103,0.92)] md:my-4 my-1 "></p>
              <p><span className="text-[rgba(247,168,103,0.92)]">02  </span> Granite & Marble Supplies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
