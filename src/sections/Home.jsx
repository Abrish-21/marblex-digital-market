import Address from "../components/Address";
import Nav from '../components/Nav';

function Home() {
  return (
    <div className="grid w-screen  md:grid-rows-[32px_12fr_85fr]
     sm:grid-rows-[1px_25fr_75fr] ">
      <div>
        <Address/>
      </div>
      <div className="sticky top-0 ">
        <Nav/>
      </div>
      <div className=" bg-[url('src/assets/images/homepage-background.jpg')]
        bg-cover bg-center bg-gray-700 bg-blend-multiply grid grid-cols-[70fr_30fr]">
        <div className="  p-32 pt-52 justify-center w-full h-screen">
          <p className="line-before">WELCOM TO DIGITAL MARBLEX</p>
          <br />
          <br />
          <h1 className="text-7xl">Forever Fresh And <br />Stunning</h1>
            <button className=" bg-[#c07d47] px-8 py-4 mt-10 rounded-none">
            <div className="flex">
              READ MORE
              <img src="src\assets\icons\arrow.svg" alt="skype-logo" className='w-7' />
            </div>
            </button>
        </div>
          <div className=" bg-[#864e1f] ">

              <div className=" rounded-md w-[18rem] mt-20 -ml-36 h-[23rem] pt-14 bg-[url('src/assets/images/marbel2.jpg')]
               bg-center bg-cover ">
              <div className="rounded-md w-[18rem] h-[23rem] bg-[url('src/assets/images/marbel1.jpg')]
              ml-44 bg-cover bg-center bg-gray-700 bg-blend-multiply align-middle overflow-visible">
              </div>
              </div>

            <div class   className="flex gap-8 mt-24 ml-4">
            <button className="size-11  bg-[#fb923c] px-3 py-1.5 rounded-none hover:bg-amber-500">
                <img src="src\assets\icons\previous.svg" alt="" />
              </button>
              <button  className="size-11 bg-[#fb923c] px-3 py-1.5 rounded-none hover:bg-amber-500">
                <img src="src\assets\icons\next.svg" alt="" />
              </button>
              

            </div>
          </div>
    

      </div>
      </div>

  );
};

export default Home;