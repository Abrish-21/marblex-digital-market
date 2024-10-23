const ProgressBar = ({text, width, percent}) =>{
  return (
    <div className="flex flex-col mt-5 mb-6">
        <p className="text-black font-serif font-semibold">{text}</p>
    <div className="flex flex-row">
        <div className="w-full bg-gray-300 h-2 rounded mt-2">
          <div
            className="bg-[#fb923c] h-2 rounded-full"
            style={width}></div>
        </div>
        <p className="font-semibold text-black ">{percent}%</p>
    </div>
    </div>
  )
}

export default ProgressBar