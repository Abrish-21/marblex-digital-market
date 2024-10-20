import Address from "../components/Address";
import Nav from '../components/Nav';

function Home() {
  return (
    <div className="grid w-screen h-screen md:grid-rows-[32px_15fr_85fr]
     sm:grid-rows-[1px_25fr_75fr] ">
      <div className="bg-green-700">
        <Address/>
      </div>
      <div className="sticky top-0 bg-yellow-300">
        <Nav/>
      </div>
      <div className=" bg-[url('src/assets/images/homepage-background.jpg')]
        bg-cover bg-center bg-gray-700 bg-blend-multiply grid grid-cols-[70fr_30fr]">
        <div className=" p-32 pt-52 justify-center w-full h-screen">
          <p className="line-before">WELCOM TO DIGITAL MARBLEX</p>
          <h1 className="text-7xl">Forever Fresh And <br />Stunning</h1>
          <button className="bg-[#c07d47] px-8 py-4 mt-10 rounded-none">
          <div className="flex"> 
            READ MORE
            <img src="src\assets\icons\arrow.svg" alt="skype-logo" className='w-7' />
          </div>
          </button>
        </div>
          <div className="bg-[#fb923c]">
            <div className=" w-[18rem] mt-20 -ml-36 h-[23rem] pt-14 bg-[url('src/assets/icons/marbel2.jpg')]
             bg-center bg-cover bg-gray-700 bg-blend-multiply">
        
            <div className=" w-[18rem] h-[23rem] bg-[url('src/assets/icons/marbel1.jpg')] 
            ml-44 bg-cover bg-center bg-gray-700 bg-blend-multiply align-middle overflow-visible">
            </div>
       
            </div>

            <div  className="mt-24">
            <button id="icons-navbar" className="bg-[#fb923c] px-3 py-1.5 rounded-none hover:bg-amber-500">
                <img src="src\assets\icons\previous.svg" alt="" />
              </button>
              <button id="icons-navbar" className="bg-[#fb923c] px-3 py-1.5 rounded-none hover:bg-amber-500">
                <img src="src\assets\icons\next.svg" alt="" />
              </button>
              

            </div>
          </div>
    

      </div>
      </div>

  );
};

export default Home;