import logoIcon from "../assets/icons/logo.svg";
import telegramIcon from "../assets/icons/telegram.svg";
import phoneIcon from "../assets/icons/phone.svg";

function Footer() {
  return (
    <div className="pt-10 lg:pt-0 bg-none font-roboto flex flex-col ">
      <div className="flex justify-start lg:gap-80 gap-6 items-center lg:p-10 p-8 lg:pl-32">
        <a href="#home" className="hover:text-white  flex items-center gap-1 text-white">
          <img id="logo-icon" src={logoIcon} alt="logo" />
          <p className="font-serif lg:text-4xl text-2xl">Marblex</p>
        </a>
        <p className="lg:text-lg text-xs">YOUR EMAIL ADDRESS</p>
        <img src={telegramIcon} className="size-7" alt="telegram" />
      </div>

      <div className="grid lg:grid-cols-[25fr_25fr_25fr_25fr] grid-cols-[10rem_10rem] lg:gap-10 gap-6 lg:pl-32 lg:p-10 p-8 font-roboto">
        <div className="flex flex-col lg:gap-6 gap-4">
          <p className="lg:text-3xl text-xl font-semibold text-slate-400">About Us</p>
          <p className="lg:text-lg text-xs">We are dedicated to bringing you the finest qualities</p>
          <div className="flex text-xs lg:text-lg">
            <img src={phoneIcon} alt="phone" className="icons-navbar" />
            <a href="tel:+1800001658" className="text-white mr-10 hover:text-[rgba(247,168,103,0.92)]">+1800001658</a>
          </div>
        </div>

        <div className="flex flex-col lg:gap-6 gap-4">
          <p className="lg:text-3xl text-xl font-semibold text-slate-400">Navigate</p>
          <p className="lg:text-lg text-xs">Marble</p>
          <p className="lg:text-lg text-xs">About Us</p>
          <p className="lg:text-lg text-xs">Service</p>
        </div>

        <div className="flex flex-col lg:gap-6 gap-4">
          <p className="lg:text-3xl text-xl font-semibold text-slate-400">Our Service</p>
          <p className="lg:text-lg text-xs">Carpet and Rugs</p>
          <p className="lg:text-lg text-xs">Industrial Flooring</p>
          <p className="lg:text-lg text-xs">Laminate Flooring</p>
        </div>

        <div className="flex flex-col lg:gap-6 gap-4 text-xs lg:text-lg">
          <p className="lg:text-3xl text-xl font-semibold text-slate-400">Our Showroom</p>
          <p>Themeforest, Envato HQ24, Fifth St. Los Angeles, USA</p>
          <a href="tel:+1800001658">+1800-001-658</a>
          <a href="mailto:info@peacefulthem.com">info@peacefulthem.com</a>
        </div>
      </div>

      <div className="">
        <div className="   w-[100%] mt-20 border-t-2 border-amber-500 lg:my-7 "></div>
        <p className=" lg:ml-[35%] ml-8   ">Copyright 2023 Marblex. All Rights Reserved.</p>
        <div className="w-[100%] border-t-2 border-amber-500 lg:my-7"></div>
            </div>
      </div>
  );
}

export default Footer;
