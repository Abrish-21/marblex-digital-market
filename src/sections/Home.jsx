import Address from "../components/Address";
import Nav from '../components/Nav';

function Home() {
  return (<>
    <div className="">
    <div className="relative">
        <Address/>
      </div>
      <div className="realtive">
        <Nav/>
      </div>
      <img src="src\assets\images\homepage-background.jpg"
      alt="background-image"
      className="opacity-25" />
     
      </div>
      </>
  );
};

export default Home;