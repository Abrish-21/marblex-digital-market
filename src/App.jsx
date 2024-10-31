import { About, ShowRoom, Client, FAQ, Footer, Home, OurSkill, Services, Testimony } from './sections/index';
import Navbar from './components/Navbar';
import Address from './components/Address';


const App = () => {
  return (
    <main className='bg-[url("src/assets/images/pexels-skylar-kang-6044820.jpg")] bg-cover bg-slate-700 bg-blend-soft-light'>
      <section className=''>
        <Address />
      </section>
      <section className=''>
        <Navbar />
      </section>
  
      <section>
        <Home />
      </section>
      <section id='about-us'>
        <About  />
      </section>
      <section>
        <ShowRoom />
      </section>
      <section>
        <OurSkill />
      </section>
      <section className='bg-white overflow-hidden'>
        <Services />
      </section>
      <section className='bg-white overflow-hidden relative'>
        <Client />
      </section>
      <section className=''>
        <Testimony />
      </section>
      <section className='bg-white'>
        <FAQ />
      </section>
      <section className='bg-none'>
        <Footer />
      </section>
    </main>
  );
};

export default App;