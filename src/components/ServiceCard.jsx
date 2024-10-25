

const ServiceCard = ({img}) => {
    return (

      <div className="relative overflow-hidden font-roboto">
      {/* Card 1 */}
      <div className="size-80">
        <img src={img} alt="stone-logo" className="w-full h-full object-cover" />
      </div>
  
      {/* Card 2 */}
      <div className="absolute flex gap-6 p-10 flex-col size-[30rem] inset-0 bg-slate-600 bg-opacity-50 translate-y-0 transition-transform duration-1000 ease-in-out hover:translate-y-full">
      <img src="src\assets\icons\stones\stone5.svg" alt="" className="size-20" />
      <p className="text-2xl">Laminate Flooring</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. alias assumenda aliquid quasi fuga?</p>
      </div>
    </div>

    );
  }
  export default ServiceCard;