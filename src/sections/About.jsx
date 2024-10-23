import BulletSentence from "../components/BulletSentence"
import ProfileCard from "../components/ProfileCard"
import ProgressBar from "../components/ProgressBar"
import ViewMoreButton from "../components/ViewMoreButton"

function About() {
  return (
    <div className="w-full p-20 bg-white grid grid-cols-[34fr_30fr_30fr] gap-3">
      <div>
        <p className="line-before mb-4 font-BebasNeueStatic font-semibold text-[#fb923c]">ABOUT US</p>
        <h1 className=" pl-5 font-BebasNeueStatic text-black">We Have A To Of<br></br> Fun  Process We Grow</h1>
        <div className="mt-6 mb-6">
          <BulletSentence text = "Come to Our marblex Office for a Visit" />
          <BulletSentence text = "Take Your time to make your choice" />
          <BulletSentence text = "Let's Find the Best Natural Stone" />
          <BulletSentence text = "Delivery & Installation" />
        </div>
        <div className="flex">
          <ProfileCard Img = "src\assets\images\profile2.jpg" name = "Alex Jhon Martin" role = "MANAGER"/>
          <img className="size-28" src="src\assets\images\sign1.png" alt="signature" />
        </div>
      </div>
      <div>
        <img className="h-auto" src="src\assets\images\minh-pham-Y6HuHkhrKYU-unsplash.jpg" alt="living-room" />
      </div>
      <div>
        <h1 className="text-black font-BebasNeueStatic mb-9">Provide Solutions Of Every Kind</h1>
        <p className="text-black">providing solutions to is cusyomers, marblex can take a consultative approach, working closely with clients to understand their needs and preferences</p>
    <ProgressBar text= "Wooden Flooring" width={{width: "76%"}}/>
    <ProgressBar text = "Ceramic Tiles" width={{width:"90%"}}/>
    <ViewMoreButton/>
    
          
      </div>
    </div>
  )
}
export default About