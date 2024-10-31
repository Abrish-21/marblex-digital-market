const  CompanySuccess=({text,icon, stat})=> {
  return (
    <div>
        <div className="flex items-center gap-3">
            <img src={icon} alt="icon" className="size-20" />
            <h1>{stat}</h1>
        </div>
        <p>{text}</p>
    </div>
  )
}

export default CompanySuccess