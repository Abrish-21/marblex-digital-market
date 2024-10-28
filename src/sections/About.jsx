import BulletSentence from "../components/BulletSentence";
import ProfileCard from "../components/ProfileCard";
import ProgressBar from "../components/ProgressBar";
import ViewMoreButton from "../components/ViewMoreButton";

function About() {
  return (
    <div className="relative">
      <div className="w-full p-10 bg-white grid grid-cols-[34fr_30fr_30fr]">
        <div className="scale-[85%]">
          <div>
            <p className="line-before mb-4 font-BebasNeueStatic font-semibold text-[rgba(247,168,103,0.92)]">ABOUT US</p>
            <h1 className="pl-5 font-BebasNeueStatic text-black">We Have A Lot Of<br /> Fun Process We Grow</h1>
            <div className="mt-6 mb-6">
              <BulletSentence text="Come to Our marblex Office for a Visit" />
              <BulletSentence text="Take Your time to make your choice" />
              <BulletSentence text="Let's Find the Best Natural Stone" />
              <BulletSentence text="Delivery & Installation" />
            </div>
            <div className="flex">
              <ProfileCard Img="src/assets/images/profile2.jpg" name="Alex Jhon Martin" role="MANAGER" />
              <img className="size-28" src="src/assets/images/sign1.png" alt="signature" />
            </div>
          </div>
        </div>
        <div className="scale-[85%]">
          <div>
            <img className="h-[30rem] w-[25rem]" src="src/assets/images/minh-pham-Y6HuHkhrKYU-unsplash.jpg" alt="living-room" />
          </div>
        </div>
        <div className="scale-[85%]">
          <div>
            <h1 className="text-black font-BebasNeueStatic mb-9">Provide Solutions Of Every Kind</h1>
            <p className="mb-14 text-black">Providing solutions to its customers, Marblex can take a consultative approach, working closely with clients to understand their needs and preferences.</p>
            <ProgressBar text="Wooden Flooring" width={{ width: "76%" }} percent="76" />
            <ProgressBar text="Ceramic Tiles" width={{ width: "90%" }} percent="90" />
            <ViewMoreButton text = "Read More" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[50fr_50fr] pt-24 min-h-screen">
        <div className="">
          <div className="bg-pink">
            <img className="cover w-[40rem] h-[27rem] center object-cover" src="src/assets/images/modern-luxury-living-room-interior.jpg" alt="bath-room" />
          </div>
        </div>
        <div className="scale-[85%]">
          <div className="font-BebasNeueStatic font-semibold flex flex-col gap-4 pt-1">
            <p className="line-before mb-4 font-BebasNeueStatic font-semibold text-[rgba(247,168,103,0.92)]">ABOUT US</p>
            <h1>Visit Our Marble & Granite Display Warehouses</h1>
            <p>Marblex could potentially use display warehouses to showcase its range of marble products such as slates, tiles, and countertops.</p>
            <div className="font-bold text-3xl flex flex-col gap-7 w-2/3">
              <p><span className="text-[rgba(247,168,103,0.92)]">01  </span> The best Marble Company</p>
              <p className="border-t border-[rgba(247,168,103,0.92)] my-4"></p>
              <p><span className="text-[rgba(247,168,103,0.92)]">02  </span> Granite & Marble Supplies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;