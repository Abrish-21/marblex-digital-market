import {About,ShowRoom, Client, FAQ, Footer , Home, OurSkill, Services, Testimony} from './sections/index';
const App =() =>{
  return (
    <main className='bg-[url("src/assets/images/pexels-skylar-kang-6044820.jpg")] bg-cover bg-slate-500 bg-blend-soft-light'>
      <section className='relative'>
      <Home/>
      </section> 

      <section>
        <About/>
        </section>


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