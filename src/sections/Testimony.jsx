import CompanySuccess from "../components/CompanySuccess";
import ProfileCard from "../components/ProfileCard";
import Button from "../components/Button";
import starIcon from "../assets/icons/start.svg";
import quoteIcon from "../assets/icons/quote.svg";
import profileImage from "../assets/images/profile2.jpg";
import clientIcon from "../assets/icons/Testimony-Icon/client.svg";
import exportIcon from "../assets/icons/Testimony-Icon/export.svg";
import projectIcon from "../assets/icons/Testimony-Icon/amazing-project.svg";
import planIcon from "../assets/icons/Testimony-Icon/plan.svg";

const Testimony = () => {
  return (
    <div className="bg-none pt-10 w-full">
      <div className="grid lg:grid-cols-[50fr_50fr] lg:rows-1 grid-rows-[50fr_50fr] lg:px-20 lg:pt-20 bg-none lg:h-[35rem] overflow-visible">
        <div className="lg:p-6 ml-6">
          <p className="text-sm lg:text-lg line-before mb-4 font-BebasNeueStatic font-semibold text-[#fb923c]">TESTIMONIAL</p>
          <p className=" lg:text-5xl text-3xl font-roboto">What Our Clients Happy <br className="lg:hidden" /> Say about US</p>
          <div className="mt-10  ">
            <div className="flex justify-start lg:gap-80 gap-40 mb-4"> 
              <div className="flex">
                <img src={starIcon} alt="star-logo" className="size-7" />
                <img src={starIcon} alt="star-logo" className="size-7" />
                <img src={starIcon} alt="star-logo" className="size-7" />
                <img src={starIcon} alt="star-logo" className="size-7" />
                <img src={starIcon} alt="star-logo" className="size-7" />
              </div>
              <img src={quoteIcon} alt="quote-icon" className="size-4" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur <br className="lg:hidden" />adipisicing elit. Quidem doloribus lorem <br  className="lg:hidden" /> ipsum is the popular ducimus animi rerum, <br className="lg:hidden" /> eveni quam necessitatibus eius esse <br className="lg:hidden"/> possimus tempore amet eligendi!</p>
            <div className="lg:scale-75 mb-4 mt-5">
              <ProfileCard Img={profileImage} name="Alex Jhon Martin" role="MANAGER" />
            
            </div>
          </div>
        </div>
        <div className="bg-white lg:w-[30rem] lg:h-[33rem] w-[26rem] h-[33rem] overflow-hidden font-roboto text-gray-900 p-8 flex flex-col gap-6">
          <p className="text-sm lg:text-lg line-before font-BebasNeueStatic font-semibold text-[#fb923c]">VISIT</p>
          <p className="lg:text-4xl text-2xl font-bold">Book Your First Visit Now</p>
          <p className="font-playwrite line-clamp-2 text-sm lg:text-lg">There are many variations of lorem ipsum. Pellat mollitia modi assumenda hic accusantium similique enim culpa.</p>
          <div className="flex flex-col gap-6 lg:pl-10 pt-3">
            <div className="flex gap-4 justify-start">
              <input type="text" placeholder="First Name" className="" />
              <input type="text" placeholder="Last Name" className="" />
            </div>
            <select id="options" name="options" className="custom-input text-sm h-10 w-80">
              <option value="" disabled selected hidden>Select an option</option>
              <option value="option1" className="lg:text-lg text-xs">option 1</option>
              <option value="option2" className="lg:text-lg text-xs">option 2</option>
              <option value="option3" className="lg:text-lg text-xs">option 3</option>
              <option value="option4" className="lg:text-lg text-xs">option 4</option>
            </select>
            <textarea className="custom-input w-80" name="" id="" placeholder="Write Your Message"></textarea>
          </div>
          <div className=" lg:pl-10 lg:ml-14"><Button text="SUBMIT REQUEST" /></div>
        </div>
      </div>
      <div className="bg-[#fb923c] lg:flex grid grid-cols-[11rem_11rem] gap-5 lg:w-full w-[26rem] lg:gap-28 p-5 lg:pt-20">
        <CompanySuccess text="CLIENT SATISFACTION" stat="786+" icon={clientIcon}/>
        <CompanySuccess text="EXPORT ON WORLDWIDE" stat="600+" icon={exportIcon} />
        <CompanySuccess text="AMAZING PROJECT" stat="989+" icon={projectIcon} />
        <CompanySuccess text="PRODUCTION PLAN" stat="125+" icon={planIcon} />
      </div>
    </div>
  );
};

export default Testimony;
