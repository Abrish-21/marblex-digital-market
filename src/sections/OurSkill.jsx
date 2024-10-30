import SkillCard from "../components/SkillCard";
import ViewMoreButton from "../components/ViewMoreButton";

const OurSkill = () => {
  return (
    <div className="relative ">
      <div className="bg-white font-roboto text-black grid grid-cols-[50fr_50fr] p-20 mt-5">
        <div className="relative">
          <div className="sticky top-[7rem] p-6 divide-y-[1rem]  divide-white">
          
            <p className="line-before mb-4 font-BebasNeueStatic text-[rgba(247,168,103,0.92)]">OUR SKILL</p>
            <h1 className="font-roboto text-5xl from-neutral-950">Flooring Installation Service</h1>
            <p>
              Flooring installation services are a key offering of Marblex, where the company installs flooring made from a variety of materials, including marble, granite, limestone, and other natural stones.
            </p>
            <ViewMoreButton text = "READ MORE"/>
            
          </div>
        </div>
      
        <div className="w-full flex flex-col gap-10 relative">

            <div className="sticky -top-16 pr-14"> 
            <SkillCard  title="Carpets & Rugs" discreption=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maiores repellendus cumque harum impedit ad ducimus repellat asperiores laboriosam, eos sint sapiente porro natus vero nulla beatae soluta nesciunt! Adeaque alias qui esse iste cupiditate eius, beatae soluta. Sunt." 
            logo="src\assets\icons\brands/brand5.svg"/>
          </div>
      
          <div className="sticky -top-16 pr-14">
            <SkillCard  title="Laminate Flooring" discreption=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maiores repellendus cumque harum impedit ad ducimus repellat asperiores laboriosam, eos sint sapiente porro natus vero nulla beatae soluta nesciunt! Adeaque alias qui esse iste cupiditate eius, beatae soluta. Sunt." 
            logo="src\assets\icons\stones\stone3.svg"/>
          </div>
      
          <div className="sticky -top-16 pr-14">
            <SkillCard  title="Mabric Floorling" discreption=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maiores repellendus cumque harum impedit ad ducimus repellat asperiores laboriosam, eos sint sapiente porro natus vero nulla beatae soluta nesciunt! Adeaque alias qui esse iste cupiditate eius, beatae soluta. Sunt." 
            logo="src\assets\icons\stones\stone1.svg"/>
          </div>
      
          <div className="sticky -top-16 pr-14">
            <SkillCard  title="Ceramic Tile" discreption=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maiores repellendus cumque harum impedit ad ducimus repellat asperiores laboriosam, eos sint sapiente porro natus vero nulla beatae soluta nesciunt! Adeaque alias qui esse iste cupiditate eius, beatae soluta. Sunt." 
            logo="src\assets\icons\stones\stone2.svg"/>
          </div>
      
          <div className="sticky -top-16 pr-14">
            <SkillCard  title="Industrial Flooring" discreption=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maiores repellendus cumque harum impedit ad ducimus repellat asperiores laboriosam, eos sint sapiente porro natus vero nulla beatae soluta nesciunt! Adeaque alias qui esse iste cupiditate eius, beatae soluta. Sunt." 
            logo="src\assets\icons\stones\stone4.svg"/>
          </div>
      
          
      
        
      
          </div>
      
      
        </div>
    </div>
  );
};

export default OurSkill;
