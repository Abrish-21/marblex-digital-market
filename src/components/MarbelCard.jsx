const MarbelCard = ({ Img }) => {
  return (
  <div className="lg:w-[20rem] lg:h-[13rem] w-[10rem] h-[7rem] hover:-translate-y-3  rounded-lg">
      <img src={Img} alt="marble-photo" className="w-full h-full object-cover " />
    </div>
  );
};

export default MarbelCard;
