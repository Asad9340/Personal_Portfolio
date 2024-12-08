import { FaLocationDot } from 'react-icons/fa6';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Experience = () => {
  return (
    <div className="max-w-6xl mx-4 md:mx-auto">
      <div className='text-center mb-4 md:mb-8'>
        <h2 className="text-3xl md:text-4xl font-semibold md:font-bold">
          Tech <span className="text-[#675C9C] ">Expertise</span>
        </h2>
      </div>
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work hover:scale-105 duration-500"
            contentStyle={{ background: '#675C9C', color: 'bg-primary' }}
            contentArrowStyle={{ borderRight: '10px solid  #675C9C' }}
            date="September 2024 - Present"
            iconStyle={{ background: '#675C9C', color: '#FFF' }}
            icon={
              <img
                className="flex justify-center items-center"
                src="https://i.postimg.cc/nzjSyPx2/logo-Image.png"
              />
            }
          >
            <h3 className="vertical-timeline-element-title text-2xl font-semibold text-secondary">
              “Jr. Web Developer”
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-secondary flex items-center gap-1">
              <FaLocationDot size={14} /> Universal Technology, UK
            </h4>
            <hr className="mt-2" />
            <p className="text-secondary mt-2">
              Frontend Development, API Integration, Responsive Web Development,
              Performance Optimization.
            </p>
            <div className="flex flex-wrap gap-2 text-secondary">
              <p className="bg-[#8476B3]  px-4 py-1 rounded-lg text-xs font-extralight">
                Angular
              </p>
              <p className="bg-[#8476B3] px-4 py-1 rounded-lg text-xs font-extralight">
                Angular Js
              </p>
              <p className="bg-[#8476B3] px-4 py-1 rounded-lg text-xs font-extralight">
                Raw CSS
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work hover:scale-105 duration-500"
            date="June 2024 - August 2024"
            iconStyle={{ background: '#675C9C', color: '#fff' }}
            icon={
              <img
                className="flex justify-center items-center"
                src="https://i.postimg.cc/nzjSyPx2/logo-Image.png"
              />
            }
          >
            <h3 className="vertical-timeline-element-title text-2xl font-semibold">
              “Jr. Web Developer Intern”
            </h3>
            <h4 className="vertical-timeline-element-subtitle flex items-center gap-1">
              <FaLocationDot size={14} /> Universal Technology, UK
            </h4>
            <hr className="mt-2 border-b border-primary" />
            <p>
              Frontend Development, API Integration, and Responsive Web
              Development as an intern.
            </p>
            <div className="flex flex-wrap gap-2 text-primary">
              <p className="bg-[#C0C0C0]  px-4 py-1 rounded-lg text-xs font-extralight">
                Angular
              </p>
              <p className="bg-[#C0C0C0] px-4 py-1 rounded-lg text-xs font-extralight">
                Angular Js
              </p>
              <p className="bg-[#C0C0C0] px-4 py-1 rounded-lg text-xs font-extralight">
                Raw CSS
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work hover:scale-105 duration-500"
            date="Jan 2024 - Dec 2024"
            iconStyle={{ background: '#675C9C', color: '#fff' }}
            icon={
              <img
                className="flex justify-center items-center object-contain"
                src="https://i.postimg.cc/QxTmjTR8/mbstu.png"
                alt="MBSTU Logo"
              />
            }
          >
            <h3 className="vertical-timeline-element-title text-2xl font-semibold">
              “ICT Final Year Project”
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              MBSTU, Tangail
            </h4>
            <hr className="mt-2 border-b border-primary" />
            <p>
              Frontend Development, API Integration, and Responsive Web
              Development for my final year University Project.
            </p>
            <div className="flex flex-wrap gap-2 text-primary">
              <p className="bg-[#C0C0C0]  px-4 py-1 rounded-lg text-xs font-extralight">
                React
              </p>
              <p className="bg-[#C0C0C0] px-4 py-1 rounded-lg text-xs font-extralight">
                Node,Express
              </p>
              <p className="bg-[#C0C0C0] px-4 py-1 rounded-lg text-xs font-extralight">
                MongoDB
              </p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
