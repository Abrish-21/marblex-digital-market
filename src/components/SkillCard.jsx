import bg from '.././assets/images/skill-card-bg.jpg';

  const SkillCard = ({title, discreption, logo})=> {
    return (
    <>
<div className="">
      <div
    style={{ backgroundImage: `url(${bg})` }}
       className="lg:h-[9rem] h-[7rem] lg:w-auto w-[22rem] bg-cover bg-neutral-500 bg-blend-mulitply gap-6 grid rounded-lg grid-cols-[80fr_20fr] lg:pl-6 pl-2 pt-2 lg:pt-6">
            <div className="flex flex-col">
                <p className="lg:text-2xl text-lg text-black mb-3">{title}</p>
  
                <p className="line-clamp-2 text-sm lg:text-lg text-black">{discreption}</p>
            </div>
            <img src={logo} alt="logo-icon" className="lg:size-14 mt-5 lg:mt-0 size-8" />
  
      </div>
</div>
    </>
  )
  }
  
  export default SkillCard