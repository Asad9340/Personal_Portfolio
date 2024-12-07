/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Skill.css';
import SkillModal from '../Modal/SkillModal';
function Skill({ skill }) {


  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid grid-cols-7 gap-2 md:gap-3 text-secondary bg-[#695E9F]/30 items-center rounded-lg p-2">
      <div className="col-span-2">
        <img
          className="w-32 object-cover rounded-xl hover:scale-105 duration-300 animate-pulse"
          src={skill?.image}
          alt=""
        />
      </div>
      <div className="col-span-5">
        <h2 className="text-xl font-semibold">
          <span className="text-[#DC143C] font-bold">
            {skill.title.charAt(0)}
          </span>
          {skill.title.slice(1)}
        </h2>

        <hr className="border-b border-[#675C9C]" />
        <p className="text-sm my-2">
          Description: {skill?.description.slice(0, 70)}...
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="relative flex items-center px-4 py-2 text-xs overflow-hidden transition-all bg-[#675C9C] rounded-md group"
        >
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            See More
          </span>
        </button>
        <SkillModal skill={skill} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default Skill;
