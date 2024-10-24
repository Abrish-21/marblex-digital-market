import MarbelCard from "../components/MarbelCard"
import ViewMoreButton from "../components/ViewMoreButton"
import marbelImages from "../constants"

function ShowRoom() {
  return (<>
    <div className="mt-5 p-20 flex gap-80">
      <div>
         <p className="line-before mb-4 font-BebasNeueStatic text-[#fb923c]">CHOOSE YOUR STONE</p>
         <h1 className="text-5xl font-roboto font-bold">Showroom with 250 Selections</h1>
         </div>
         <ViewMoreButton  text = "View More"/>

    </div>
    <div className="grid grid-cols-[22rem_22rem_22rem] gap-y-15 gap-x-1 grid-rows-[15rem_15rem] justify-center gap-8">
      {marbelImages.map((item)=>(
        <div className=" flex flex-col justify-end">
          <MarbelCard Img={item.img} name = {item.name}/>
          <p className="ml-32">{item.name}</p>
      </div>
        
      
      ))}
    </div>
  </>)
}


export default ShowRoom