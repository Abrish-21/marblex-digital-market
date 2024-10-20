import {About,ShowRoom, Client, FAQ, Footer , Home, OurSkill, Services, Testimony} from './sections/index';
const App =() =>{
  return (
    <main>
      <section className='relative'>
      <Home/>
      </section> 
      <br />

      <section>
        <About/>
        </section>
        <br />

      <section>
        <ShowRoom/>
      </section>
      <br />

      <section>
        <OurSkill/>
      </section>
      <br />

      <section>
        <Services/>
      </section>
      <br />

      <section>
        <Client/>
      </section>
      <br />

      <section>
        <Testimony/>
      </section>
      <br />

      <section>
        <FAQ/>
      </section>
      <br />

      <section>
        <Footer/>
      </section>
      <br />
      
    </main>
  );
};

export default App;