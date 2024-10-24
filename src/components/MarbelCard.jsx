const MarbelCard = ({ Img }) => {
  return (
  <div className="w-[20rem] h-[13rem] hover:-translate-y-3  rounded-lg">
      <img src={Img} alt="marble-photo" className="w-full h-full object-cover " />
    </div>
  );
};

export default MarbelCard;
