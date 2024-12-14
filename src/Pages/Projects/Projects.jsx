import { useEffect, useState } from 'react';
import Project from '../../components/Project/Project';
import './Projects.css';
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('Data/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects data:', error));
  }, []);
  return (
    <div className="bg-primary py-8 md:py-12 mb-[1px] font-lexend">
      <div className="max-w-6xl mx-auto">
        <div className="text-center text-white">
          <span className="flex justify-center items-center gap-2 text-2xl">
            <img src="/src/assets/leftArrow.gif" className="w-12" alt="" />{' '}
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold md:font-bold">
            My <span className="text-[#675C9C] ">Latest Projects</span>
          </h2>
        </div>
        <div>
          {projects.map(project => (
            <Project
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              liveSite={project.liveSite}
              clientCode={project.clientCode}
              serverCode={project.serverCode}
            />
          ))}
        </div>
        <div>
          <button>See All Projects</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
