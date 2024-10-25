import PartnerLogo from "../components/PartnerLogo"
import ViewMoreButton from "../components/ViewMoreButton"
const Client = ()=> {
  return (
    <div className="text-black">
      <div className="mt-20 flex ml-20 gap-80">
      <div>
         <p className="line-before mb-4 font-BebasNeueStatic text-[rgba(247,168,103,0.92)]">OUR CLIENT</p>
         <h1 className="text-5xl  font-roboto">Discover Our Creations</h1>
         </div>
         <ViewMoreButton  text = "View More"/>

    
    
  </div>
    <div className="grid grid-cols-[repeat(4,18rem)] grid-rows-[15rem_15rem] align-middle justify-center p-10 pl-20">
    <div className="border border-gray-300 p-24 pl-28">
    <PartnerLogo img="src/assets/icons/brands/brand3.svg" />
  </div>
    <div className="border border-gray-300 p-24 pl-28">
    <PartnerLogo img="src/assets/icons/brands/brand3.svg" />
  </div>
    <div className="border border-gray-300 p-24 pl-28">
    <PartnerLogo img="src/assets/icons/brands/brand3.svg" />
  </div>
    <div className="border border-gray-300 p-24 pl-28">
    <PartnerLogo img="src/assets/icons/brands/brand3.svg" />
  </div>
    <div className="border border-gray-300 p-24 pl-28">
    <PartnerLogo img="src/assets/icons/brands/brand3.svg" />
  </div>
    <div className="border border-gray-300 p-24 pl-28">
    <PartnerLogo img="src/assets/icons/brands/brand3.svg" />
  </div>
    <div className="border border-gray-300 p-24 pl-28">
    <PartnerLogo img="src/assets/icons/brands/brand3.svg" />
  </div>
    <div className="border border-gray-300 p-24 pl-28">
    <PartnerLogo img="src/assets/icons/brands/brand3.svg" />
  </div>
  
</div>


   
    </div>
  )
}

export default Client