import MarbelCard from "../components/MarbelCard"
import Button from "../components/Button"
import marbelImages from "../constants"

function ShowRoom() {
  return (<>
    <div className=" lg:p-14 py-10 ml-6 lg:ml-0 lg:flex gap-80">
      <div>
         <p className="line-before mb-4  text-sm lf:text-lg font-BebasNeueStatic text-[rgba(247,168,103,0.92)]">CHOOSE YOUR STONE</p>
         <h1 className="lg:text-5xl text-2xl mb-5 lg:mb-0 font-roboto font-bold">Showroom with 250 Selections</h1>
         </div>
         <Button  text = "View More"/>

    </div>
    <div className="grid lg:ml-0 ml-5 lg:grid-cols-[22rem_22rem_22rem] grid-rows-[10rem_10rem] grid-cols-[8rem_8rem] gap-x-14 lg:gap-y-15 lg:gap-x-1 lg:grid-rows-[15rem_15rem] lg:justify-center lg:gap-8">
      {marbelImages.map((item)=>(
        <div className=" flex flex-col lg:justify-start items-start">
          <MarbelCard Img={item.img} name = {item.name}/>
          <p className="lg:ml-32 font-semibold lg:text-2xl text-sm">{item.name}</p>
      </div>
        
      
      ))}
    </div>
  </>)
}


export default ShowRoom