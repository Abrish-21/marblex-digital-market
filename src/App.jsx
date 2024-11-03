import { About, ShowRoom, Client, FAQ, Footer, Home, OurSkill, Services, Testimony } from './sections/index';
import Navbar from './components/Navbar';
import Address from './components/Address';
import useScrollAnimation from './hooks/useScrollAnimation';
import bg from './assets/images/pexels-skylar-kang-6044820.jpg';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  useScrollAnimation();
  return (
    <main className='bg-cover w-full bg-slate-700  bg-blend-soft-light'
    style={{ backgroundImage: `url(${bg})` }}
    >
      <section><Address /></section>
      <section><Navbar /></section>
  
      <section className="lg:opacity-0 animate-on-scroll slide-in-left">
        <Home />
      </section>
      <section id='about-us' className="lg:opacity-0 animate-on-scroll slide-in-right">
        <About  />
      </section>
      <section className="lg:opacity-0 animate-on-scroll slide-in-left">
        <ShowRoom />
      </section>
      <section className="lg:opacity-0 animate-on-scroll slide-in-right">
        <OurSkill />
      </section>
      <section className='bg-white overflow-hidden lg:selection:opacity-0 animate-on-scroll slide-in-left'>
        <Services />
      </section>
      <section className='bg-white overflow-hidden relative lg:opacity-0 animate-on-scroll slide-in-right'>
        <Client />
      </section>
      <section className='bg-none lg:opacity-0 animate-on-scroll slide-in-left'>
        <Testimony />
      </section>
      <section className='bg-white lg:opacity-0 animate-on-scroll slide-in-right'>
        <FAQ />
      </section>
      <section className='bg-none lg:opacity-0 animate-on-scroll slide-in-left'>
        <Footer />
      </section>
      <section className='bg-none'>
        <ScrollToTop/>
      </section>
    </main>
  );
};

export default App;
