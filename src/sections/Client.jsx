import PartnerLogo from "../components/PartnerLogo";
import ViewMoreButton from "../components/Button";
import brand3 from '../assets/icons/brands/brand3.svg';
import brand4 from '../assets/icons/brands/brand4.svg';
import brand1 from '../assets/icons/brands/brand1.svg';
import brand6 from '../assets/icons/brands/brand6.svg';
import brand7 from '../assets/icons/brands/brand7.svg';
import brand2 from '../assets/icons/brands/brand2.svg';

const Client = () => {
  return (
    <div className="text-slate-950">
      <div className="lg:mt-20 mt-10 flex flex-col lg:flex-row gap-4 lg:ml-[14.5rem] lg:gap-80">
        <div className="lg:mr-[2rem]">
          <p className="line-before text-sm lg:text-lg mb-4 font-BebasNeueStatic text-[rgba(247,168,103,0.92)]">OUR CLIENT</p>
          <h1 className="lg:text-4xl text-2xl font-roboto">Discover Our Clients</h1>
        </div>
        <ViewMoreButton text="View More" />
      </div>
      <div className="grid lg:grid-cols-[repeat(4,14rem)] lg:grid-rows-[14rem_14rem] gap-5 grid-cols-[repeat(2,10rem)] grid-rows-[repeat(4,10rem)] lg:align-middle font-BebasNeueStatic text-[rgba(247,168,103,0.92)] lg:justify-center p-7">
        <div className="border border-gray-300 hover:text-red-500 text-white flex items-center justify-center lg:items-center lg:justify-center">
          <p className="text-[#fb923c] lg:text-6xl text-4xl pl-6 partner-logo hover:animate-bounce">Trusted By Many</p>
        </div>
        <div className="border border-gray-300 hover:text-red-500 text-white flex items-center justify-center">
          <PartnerLogo img={brand3} />
        </div>
        <div className="border border-gray-300 hover:text-red-500 text-white flex items-center justify-center">
          <PartnerLogo img={brand4} />
        </div>
        <div className="border border-gray-300 hover:text-red-500 text-white flex items-center justify-center">
          <PartnerLogo img={brand1} />
        </div>
        <div className="border border-gray-300 hover:text-red-500 text-white flex items-center justify-center">
          <PartnerLogo img={brand6} />
        </div>
        <div className="border border-gray-300 hover:text-red-500 text-white flex items-center justify-center">
          <PartnerLogo img={brand2} />
        </div>
        <div className="border border-gray-300 hover:text-red-500 text-white flex items-center justify-center">
          <PartnerLogo img={brand7} />
        </div>
        <div className="border border-gray-300 hover:text-red-500 text-white flex items-center justify-center">
          <h1 className="text-[#fb923c] pl-6 partner-logo hover:animate-pulse hover:duration-100 hover:ease-in-out">Join Our Team</h1>
        </div>
      </div>
    </div>
  );
};

export default Client;