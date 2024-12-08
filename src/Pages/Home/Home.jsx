import Hero from '../../components/Hero/Hero';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Skills from './../Skills/Skills';
function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="about" className="mt-10 md:mt-16">
        <About />
      </section>
      <section id="skills" className="mt-10 md:mt-16">
        <Skills />
      </section>
      <section id="experience" className="mt-10 md:mt-16">
        <Experience />
      </section>
      <section id="projects" className="mt-10 md:mt-16">
        <Projects />
      </section>
    </div>
  );
}

export default Home;
