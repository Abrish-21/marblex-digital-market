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
    <div className="bg-none">
      <div className="grid grid-cols-[50fr_50fr] px-20 pt-20 bg-none h-[35rem] overflow-visible">
        <div className="p-6">
          <p className="line-before mb-4 font-BebasNeueStatic font-semibold text-[#fb923c]">TESTIMONIAL</p>
          <h1 className="font-roboto">What Our Clients Happy Say about US</h1>
          <div className="mt-10 person-rating">
            <div className="flex justify-start gap-80 mb-2"> 
              <div className="flex">
                <img src={starIcon} alt="star-logo" className="size-7" />
                <img src={starIcon} alt="star-logo" className="size-7" />
                <img src={starIcon} alt="star-logo" className="size-7" />
                <img src={starIcon} alt="star-logo" className="size-7" />
                <img src={starIcon} alt="star-logo" className="size-7" />
              </div>
              <img src={quoteIcon} alt="quote-icon" className="size-4" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloribus lorem ipsum is the popular ducimus animi rerum, eveni quam necessitatibus eius esse possimus tempore amet eligendi!</p>
            <div className="scale-75 mb-4">
              <ProfileCard Img={profileImage} name="Alex Jhon Martin" role="MANAGER" />
            </div>
          </div>
        </div>
        <div className="bg-white w-[30rem] h-[33rem] overflow-hidden font-roboto text-gray-900 p-8 flex flex-col gap-3">
          <p className="line-before font-BebasNeueStatic font-semibold text-[#fb923c]">VISIT</p>
          <p className="text-4xl font-bold">Book Your First Visit Now</p>
          <p className="font-playwrite line-clamp-2">There are many variations of lorem ipsum. Pellat mollitia modi assumenda hic accusantium similique enim culpa.</p>
          <div className="flex flex-col gap-6 pl-10 pt-3">
            <div className="flex gap-4 justify-start">
              <input type="text" placeholder="First Name" className="" />
              <input type="text" placeholder="Last Name" className="" />
            </div>
            <select id="options" name="options" className="custom-input h-10 w-80">
              <option value="" disabled selected hidden>Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
            <textarea className="custom-input w-80" name="" id="" placeholder="Write Your Message"></textarea>
          </div>
          <div className="w-64 pl-10 ml-14"><Button text="SUBMIT REQUEST" /></div>
        </div>
      </div>
      <div className="bg-[#fb923c] w-full h-[13rem] flex gap-28 p-5 pt-20">
        <CompanySuccess text="CLIENT SATISFACTION" stat="786+" icon={clientIcon} />
        <CompanySuccess text="EXPORT ON WORLDWIDE" stat="600+" icon={exportIcon} />
        <CompanySuccess text="AMAZING PROJECT" stat="989+" icon={projectIcon} />
        <CompanySuccess text="PRODUCTION PLAN" stat="125+" icon={planIcon} />
      </div>
    </div>
  );
};

export default Testimony;
