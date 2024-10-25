import SkillCard from "../components/SkillCard";
import ViewMoreButton from "../components/ViewMoreButton";

const OurSkill = () => {
  return (
    <div className="bg-white font-roboto text-black grid grid-cols-[50fr_50fr] p-20 mt-5">
      <div>
        <p className="line-before mb-4 font-BebasNeueStatic text-[rgba(247,168,103,0.92)]">OUR SKILL</p>
        <h1 className="font-roboto text-4xl">Flooring Installation Service</h1>
        <p>
          Flooring installation services are a key offering of Marblex, where the company installs flooring made from a variety of materials, including marble, granite, limestone, and other natural stones.
        </p>
        <ViewMoreButton text="READ MORE" />
      </div>
      
      <div className="w-full flex flex-col gap-10">
        <div className="sticky top-0 ">
        
         
        </div>
      <SkillCard  title="Carpets & Rugs" discreption=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maiores repellendus cumque harum impedit ad ducimus repellat asperiores laboriosam, eos sint sapiente porro natus vero nulla beatae soluta nesciunt! Adeaque alias qui esse iste cupiditate eius, beatae soluta. Sunt." logo="src\assets\icons\stones\stone2.svg"/>
      <SkillCard  title="Carpets & Rugs" discreption=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maiores repellendus cumque harum impedit ad ducimus repellat asperiores laboriosam, eos sint sapiente porro natus vero nulla beatae soluta nesciunt! Adeaque alias qui esse iste cupiditate eius, beatae soluta. Sunt." logo="src\assets\icons\stones\stone2.svg"/>
      <SkillCard  title="Carpets & Rugs" discreption=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maiores repellendus cumque harum impedit ad ducimus repellat asperiores laboriosam, eos sint sapiente porro natus vero nulla beatae soluta nesciunt! Adeaque alias qui esse iste cupiditate eius, beatae soluta. Sunt." logo="src\assets\icons\stones\stone2.svg"/>
      <SkillCard  title="Carpets & Rugs" discreption=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maiores repellendus cumque harum impedit ad ducimus repellat asperiores laboriosam, eos sint sapiente porro natus vero nulla beatae soluta nesciunt! Adeaque alias qui esse iste cupiditate eius, beatae soluta. Sunt." logo="src\assets\icons\stones\stone2.svg"/>
      
      
      </div>
    </div>
  );
};

export default OurSkill;
