import { useEffect, useState } from 'react';
import Skill from '../../components/Skill/Skill';
import "./Skills.css"
const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch('/Data/skills.json');
      const data = await response.json();
      setSkills(data);
    };
    fetchSkills();
  }, []);
  return (
    <div className="bg-primary">
      <div className="max-w-6xl mx-auto py-8">
        <div className="text-center text-white">
          <span className="flex justify-center items-center gap-2 text-2xl">
            <img src="/src/assets/leftArrow.gif" className="w-12" alt="" />{' '}
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold md:font-bold">
            Tech <span className="text-[#675C9C] ">Expertise</span>
          </h2>
        </div>
        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 py-4 md:pt-6 mx-3 md:mx-0">
          {skills?.map((skill, index) => (
            <div className='card duration-500 cursor-pointer hover:scale-105' key={index}>
              <Skill skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
