

const PartnerLogo = ({ img }) => {
  return (
    <div className="flex justify-center items-center size-[6rem] partner-logo ">
      <img src={img} alt="Icon" className="hover:transition-transform hover:animate-one-spin
     hover:duration-100 hover:size-[6.5rem]" />
    </div>
  );
};

export default PartnerLogo;
