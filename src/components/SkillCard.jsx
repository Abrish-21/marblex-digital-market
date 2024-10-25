  const SkillCard = ({title, discreption, logo})=> {
    return (
    <>
<div className="">
      <div className="bg-[url('src/assets/images/marbel/6.png')] bg-slate-300 bg-blend-overlay gap-8 grid rounded-lg grid-cols-[80fr_20fr] p-10">
            <div className="flex flex-col gap-6">
                <p className="text-3xl text-black mb-3">{title}</p>
  
                <p className="line-clamp-2 text-black">{discreption}</p>
            </div>
            <img src={logo} alt="logo-icon" className="size-20" />
  
      </div>
</div>
    </>
  )
  }
  
  export default SkillCard