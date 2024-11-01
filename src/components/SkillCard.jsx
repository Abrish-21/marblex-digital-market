import bg from '.././assets/images/skill-card-bg.jpg';

  const SkillCard = ({title, discreption, logo})=> {
    return (
    <>
<div className="">
      <div
    style={{ backgroundImage: `url(${bg})` }}
       className="h-[9rem] bg-cover bg-neutral-500 bg-blend-mulitply gap-6 grid rounded-lg grid-cols-[80fr_20fr] pl-6 pt-6">
            <div className="flex flex-col">
                <p className="text-2xl text-black mb-3">{title}</p>
  
                <p className="line-clamp-2 text-black">{discreption}</p>
            </div>
            <img src={logo} alt="logo-icon" className="size-14" />
  
      </div>
</div>
    </>
  )
  }
  
  export default SkillCard