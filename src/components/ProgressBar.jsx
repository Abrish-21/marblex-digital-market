const ProgressBar = ({text, width}) =>{
  return (
    <div className="flex flex-col mt-5 mb-6">
        <p className="text-black font-serif font-semibold">{text}</p>
    <div className="w-full bg-gray-300 h-2 rounded">
      <div
        className="bg-[#fb923c] h-2 rounded-full"
        style={width}><
            /div>
    </div>
    </div>
  )
}

export default ProgressBar