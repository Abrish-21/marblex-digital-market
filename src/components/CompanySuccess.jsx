const  CompanySuccess=({text,icon, stat})=> {
  return (
    <div>
        <div className="flex items-center gap-3 p-4">
            <img src={icon} alt="icon" className="lg:size-20 size-12" />
            <p className="text-2xl lg:text-5xl">{stat}</p>
        </div>
        <p className="text-xs lg:text-lg">{text}</p>
    </div>
  )
}

export default CompanySuccess