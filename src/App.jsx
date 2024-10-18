import {About,ShowRoom, Client, FAQ, Footer , Home, OurSkill, Services, Testimony} from './sections/index';
// import Nav from './components/Nav'
const App =() =>{
  return (
    <main>
      <section className='relative'>
      <Home/>
      </section> 

      <section>
        <About/>
        </section>

      <section>
        <ShowRoom/>
      </section>

      <section>
        <OurSkill/>
      </section>

      <section>
        <Services/>
      </section>

      <section>
        <Client/>
      </section>

      <section>
        <Testimony/>
      </section>

      <section>
        <FAQ/>
      </section>

      <section>
        <Footer/>
      </section>
      
    </main>
  );
};

export default App;