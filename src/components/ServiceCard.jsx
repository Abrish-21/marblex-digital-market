import stoneIcon from '../assets/icons/stones/stone5.svg'

const ServiceCard = ({img}) => {
    return (

      <div className="relative overflow-hidden font-roboto">
      {/* Card 1 */}
      <div className="lg:size-80 size-40">
        <img src={img} alt="stone-logo" className="w-full h-full object-cover" />
      </div>
  
      {/* Card 2 */}
      <div className="absolute flex gap-6 p-10 flex-col lg:size-[30rem] size-[10rem] inset-0 bg-slate-600 bg-opacity-50 lg:translate-y-0 transition-transform duration-1000 ease-in-out hover:translate-y-full">
      <img src= {stoneIcon} alt="" className="lg:size-20 size-10" />
      <p className="lg:text-2xl text-lg">Laminate Flooring</p>
      <p className='text-sm lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. alias assumenda aliquid quasi fuga?</p>
      </div>
    </div>

    );
  }
  export default ServiceCard;