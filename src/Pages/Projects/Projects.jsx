import { useEffect, useState } from 'react';
import Project from '../../components/Project/Project';
import './Projects.css';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:5000/projects');
      const data = await res.json();
      setProjects(data);
    })();
  }, []);
  if (!projects) {
    return <LoadingSpinner />;
  }
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
              key={project._id}
              id={project.id}
              title={project.title}
              description={project.description}
              images={project.images}
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
