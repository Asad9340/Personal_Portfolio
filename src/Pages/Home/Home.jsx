import Hero from '../../components/Hero/Hero';
import About from '../About/About';
import Projects from '../Projects/Projects';
function Home() {
  return (
    <div>
      <section id='home'>
        <Hero />
      </section>
      <section id="about" className="mt-10 md:mt-16">
        <About />
      </section>
      <section id="projects" className="mt-10 md:mt-16">
        <Projects />
      </section>
    </div>
  );
}

export default Home;
