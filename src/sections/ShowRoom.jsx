import ViewMoreButton from "../components/ViewMoreButton"

function ShowRoom() {
  return (<>
    <div className="mt-5 p-20 flex gap-80">
      <div>
         <p className="line-before mb-4 font-BebasNeueStatic text-[#fb923c]">CHOOSE YOUR STONE</p>
         <h1 className="text-5xl font-roboto font-bold">Showroom with 250 Selections</h1>
         </div>
         <ViewMoreButton  text = "View More"/>

    </div>
    <div className="grid grid-cols-[30fr_30fr_30fr] gird-rows-[30fr_30fr_30fr]"></div>
  </>)
}

export default ShowRoom