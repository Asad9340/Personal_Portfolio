import Hero from '../../components/Hero/Hero';
import About from '../About/About';

function Home() {
  return (
    <div>
      <Hero />
      <section id="about" className='mt-10 md:mt-16'>
        <About />
      </section>
    </div>
  );
}

export default Home;
