import PartnerLogo from "../components/PartnerLogo";
import ViewMoreButton from "../components/Button";
import brand3 from '../assets/icons/brands/brand3.svg'
import brand4 from '../assets/icons/brands/brand4.svg'
import brand1 from '../assets/icons/brands/brand1.svg'
import brand6 from '../assets/icons/brands/brand6.svg'
import brand7 from '../assets/icons/brands/brand7.svg'
import brand2 from '../assets/icons/brands/brand2.svg'


const Client = () => {
  return (
    <div className="text-slate-950">
      <div className="mt-20 flex ml-[14.5rem] gap-80">
        <div className="mr-[2rem]">
          <p className="line-before mb-4 font-BebasNeueStatic text-[rgba(247,168,103,0.92)]">OUR CLIENT</p>
          <h1 className="text-4xl font-roboto">Discover Our Creations</h1>
        </div>
        <ViewMoreButton text="View More"/>
      </div>
      <div className="grid grid-cols-[repeat(4,14rem)] grid-rows-[14rem_14rem] align-middle
      font-BebasNeueStatic text-[rgba(247,168,103,0.92)] justify-center p-10">
        <div className="border border-gray-300 hover:text-red-500 text-white flex items-center justify-center">
          <h1 className="text-[#fb923c] pl-6 partner-logo hover:animate-bounce">Trusted By Many</h1>
        </div>
        <div className="border border-gray-300 hover:text-red-500 text-white flex items-center justify-center">
          <PartnerLogo img= {brand3} />
        </div>
        <div className="border border-gray-300 hover:text-red-500 text-white flex items-center justify-center">
          <PartnerLogo img={brand4} />
        </div>
        <div className="border border-gray-300 hover:text-red-500 text-white flex items-center justify-center">
          <PartnerLogo img={brand1} />
        </div>
        <div className="border border-gray-300 hover:text-red-500 text-white flex items-center justify-center">
          <PartnerLogo img= {brand6} />
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