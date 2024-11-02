import logoIcon from "../assets/icons/logo.svg";
import telegramIcon from "../assets/icons/telegram.svg";
import phoneIcon from "../assets/icons/phone.svg";

function Footer() {
  return (
    <div className="bg-none font-roboto flex flex-col justify-center items-center">
      <div className="flex justify-start gap-80 items-center p-10 pl-32">
        <a href="#home" className="flex items-center gap-1 text-white">
          <img id="logo-icon" src={logoIcon} alt="logo" />
          <p className="font-serif text-4xl">Marblex</p>
        </a>
        <p>YOUR EMAIL ADDRESS</p>
        <img src={telegramIcon} className="size-7" alt="telegram" />
      </div>

      <div className="grid grid-cols-[25fr_25fr_25fr_25fr] gap-10 pl-32 p-10 font-roboto">
        <div className="flex flex-col gap-6">
          <p className="text-3xl font-semibold text-slate-400">About Us</p>
          <p>We are dedicated to bringing you the finest qualities</p>
          <div className="flex">
            <img src={phoneIcon} alt="phone" className="icons-navbar" />
            <a href="tel:+1800001658" className="text-white mr-10 hover:text-[rgba(247,168,103,0.92)]">+1800001658</a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-3xl font-semibold text-slate-400">Navigate</p>
          <p>Marble</p>
          <p>About Us</p>
          <p>Service</p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-3xl font-semibold text-slate-400">Our Service</p>
          <p>Carpet and Rugs</p>
          <p>Industrial Flooring</p>
          <p>Laminate Flooring</p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-3xl font-semibold text-slate-400">Our Showroom</p>
          <p>Themeforest, Envato HQ24, Fifth St. Los Angeles, USA</p>
          <a href="tel:+1800001658">+1800-001-658</a>
          <a href="mailto:info@peacefulthem.com">info@peacefulthem.com</a>
        </div>
      </div>

      <div className="w-[80%] mt-20 border-t-2 border-amber-500 my-7"></div>
      <p className="">Copyright 2023 Marblex. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
