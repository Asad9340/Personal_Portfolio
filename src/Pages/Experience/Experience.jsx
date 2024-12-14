import  { useState, useEffect } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);

  // Fetch data from the JSON file
  useEffect(() => {
    const fetchExperienceData = async () => {
      try {
        const response = await fetch('/Data/experience.json');
        const data = await response.json();
        setExperienceData(data);
      } catch (error) {
        console.error('Error fetching experience data:', error);
      }
    };

    fetchExperienceData();
  }, []);

  // Separate active and inactive classes
  const activeExperiences = experienceData.filter(
    exp => exp.classType === 'active'
  );
  const inactiveExperiences = experienceData.filter(
    exp => exp.classType === 'inactive'
  );

  return (
    <div className="max-w-6xl mx-4 md:mx-auto">
      <div className="text-center mb-4 md:mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold md:font-bold">
          Tech <span className="text-[#675C9C]">Expertise</span>
        </h2>
      </div>
      <div>
        <VerticalTimeline>
          {/* Map through active experiences */}
          {activeExperiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work hover:scale-105 duration-500"
              contentStyle={{ background: '#675C9C', color: 'bg-primary' }}
              contentArrowStyle={{ borderRight: '10px solid  #675C9C' }}
              date={experience.date}
              iconStyle={{ background: '#675C9C', color: '#FFF' }}
              icon={
                <img
                  className="flex justify-center items-center"
                  src={experience.icon}
                  alt={experience.role}
                />
              }
            >
              <h3 className="vertical-timeline-element-title text-2xl font-semibold text-secondary">
                {experience.role}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-secondary flex items-center gap-1">
                <FaLocationDot size={14} /> {experience.location}
              </h4>
              <hr className="mt-2" />
              <p className="text-secondary mt-2">{experience.description}</p>
              <div className="flex flex-wrap gap-2 text-secondary">
                {experience.skills.map((skill, idx) => (
                  <p
                    key={idx}
                    className="bg-[#8476B3] px-4 py-1 rounded-lg text-xs font-extralight"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}

          {/* Map through inactive experiences */}
          {inactiveExperiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work hover:scale-105 duration-500"
              date={experience.date}
              iconStyle={{ background: '#675C9C', color: '#fff' }}
              icon={
                <img
                  className="flex justify-center items-center"
                  src={experience.icon}
                  alt={experience.role}
                />
              }
            >
              <h3 className="vertical-timeline-element-title text-2xl font-semibold">
                {experience.role}
              </h3>
              <h4 className="vertical-timeline-element-subtitle flex items-center gap-1">
                <FaLocationDot size={14} /> {experience.location}
              </h4>
              <hr className="mt-2 border-b border-primary" />
              <p>{experience.description}</p>
              <div className="flex flex-wrap gap-2 text-primary">
                {experience.skills.map((skill, idx) => (
                  <p
                    key={idx}
                    className="bg-[#C0C0C0] px-4 py-1 rounded-lg text-xs font-extralight"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
