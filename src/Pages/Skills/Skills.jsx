import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact />, proficiency: 90 },
    { name: 'JavaScript', icon: <SiJavascript />, proficiency: 85 },
    { name: 'Node.js', icon: <FaNodeJs />, proficiency: 80 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, proficiency: 75 },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg hover:scale-105 transition-transform"
        >
          <div className="text-5xl text-blue-600 mb-3">{skill.icon}</div>
          <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
          <div className="w-20 h-20">
            <CircularProgressbar
              value={skill.proficiency}
              text={`${skill.proficiency}%`}
              styles={buildStyles({
                textColor: '#333',
                pathColor: '#4A90E2',
                trailColor: '#d6d6d6',
              })}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
