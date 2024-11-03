import SkillCard from "../components/SkillCard";
import ViewMoreButton from "../components/Button";
import img10 from '../assets/icons/brands/brand5.svg';
import img11 from '../assets/icons/brands/brand5.svg';
import img12 from '../assets/icons/stones/stone1.svg';
import img13 from '../assets/icons/stones/stone2.svg';
import img14 from '../assets/icons/stones/stone3.svg';

const OurSkill = () => {
  return (
    <div className="relative">
      <div className="bg-white flex flex-col  font-roboto text-black lg:grid  lg:grid-cols-[50fr_50fr] lg:p-20 lg:mt-5">
        <div className="relative">
          <div className="lg:sticky top-[7rem] p-6 divide-y-[2rem]  divide-white">
          
            <p className="line-before mb-4 font-BebasNeueStatic text-[rgba(247,168,103,0.92)]">OUR SKILL</p>
            <h1 className="font-roboto lg:text-5xl  text-2xl from-neutral-950">Flooring Installation Service</h1>
            <p className="text-sm lg:text-lg">
              Flooring installation services are a key offering of Marblex, <br className="lg:hidden" /> where the company installs flooring made from a variety<br className="lg:hidden" /> of materials, including marble, granite, limestone, <br className="lg:hidden" /> and other natural stones.
            </p>
            <ViewMoreButton text = "READ MORE"/>
            
          </div>
        </div>
      
        <div className="w-full flex flex-col gap-10 relative p-5">

            <div className="lg:sticky -top-16 pr-14"> 
            <SkillCard  title="Carpets & Rugs" discreption=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maiores repellendus cumque harum impedit ad ducimus repellat asperiores laboriosam, eos sint sapiente porro natus vero nulla beatae soluta nesciunt! Adeaque alias qui esse iste cupiditate eius, beatae soluta. Sunt." 
            logo={img10}/>
          </div>
      
          <div className="lg:sticky -top-16 pr-14">
            <SkillCard  title="Laminate Flooring" discreption=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maiores repellendus cumque harum impedit ad ducimus repellat asperiores laboriosam, eos sint sapiente porro natus vero nulla beatae soluta nesciunt! Adeaque alias qui esse iste cupiditate eius, beatae soluta. Sunt." 
            logo={img11} />
          </div>
      
          <div className="lg:sticky -top-16 pr-14">
            <SkillCard  title="Mabric Floorling" discreption=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maiores repellendus cumque harum impedit ad ducimus repellat asperiores laboriosam, eos sint sapiente porro natus vero nulla beatae soluta nesciunt! Adeaque alias qui esse iste cupiditate eius, beatae soluta. Sunt." 
            logo={img12}/>
          </div>
      
          <div className="lg:sticky -top-16 pr-14">
            <SkillCard  title="Ceramic Tile" discreption=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maiores repellendus cumque harum impedit ad ducimus repellat asperiores laboriosam, eos sint sapiente porro natus vero nulla beatae soluta nesciunt! Adeaque alias qui esse iste cupiditate eius, beatae soluta. Sunt." 
            logo={img13}/>
          </div>
      
          <div className="lg:sticky -top-16 pr-14">
            <SkillCard  title="Industrial Flooring" discreption=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maiores repellendus cumque harum impedit ad ducimus repellat asperiores laboriosam, eos sint sapiente porro natus vero nulla beatae soluta nesciunt! Adeaque alias qui esse iste cupiditate eius, beatae soluta. Sunt." 
            logo={img14}/>
          </div>
      
          
      
        
      
          </div>
      
      
        </div>
    </div>
  );
};

export default OurSkill;
