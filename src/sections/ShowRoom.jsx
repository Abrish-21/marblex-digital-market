import MarbelCard from "../components/MarbelCard"
import ViewMoreButton from "../components/Button"
import marbelImages from "../constants"

function ShowRoom() {
  return (<>
    <div className=" p-14 flex gap-80">
      <div>
         <p className="line-before mb-4 font-BebasNeueStatic text-[rgba(247,168,103,0.92)]">CHOOSE YOUR STONE</p>
         <h1 className="text-5xl font-roboto font-bold">Showroom with 250 Selections</h1>
         </div>
         <ViewMoreButton  text = "View More"/>

    </div>
    <div className="grid grid-cols-[22rem_22rem_22rem] gap-y-15 gap-x-1 grid-rows-[15rem_15rem] justify-center gap-8">
      {marbelImages.map((item)=>(
        <div className=" flex flex-col justify-end">
          <MarbelCard Img={item.img} name = {item.name}/>
          <p className="ml-32 font-semibold text-2xl">{item.name}</p>
      </div>
        
      
      ))}
    </div>
  </>)
}


export default ShowRoom