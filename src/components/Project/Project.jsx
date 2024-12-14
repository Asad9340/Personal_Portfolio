/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Project({id}) {
  return (
    <div
      className={`flex gap-4 md:gap-8 m-3 items-center justify-center text-white mt-6 md:mt-10 p-4 md:p-6 rounded-3xl backdrop-blur-md bg-white/15 ${
        id % 2 == 0 ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'
      }`}
    >
      <div className="flex-1">
        <img
          src="/src/assets/Honours.jpg"
          className=" md:h-[300px] w-full object-cover hover:scale-105 rounded-3xl ease-in-out duration-500 "
          alt="Projects Image"
        />
      </div>
      <div className="flex-1">
        <div className="my-2 md:my-4">
          <h2 className="text-3xl md:text-4xl ">
            Project:{' '}
            <span className="font-semibold md:font-bold">
              <span className="text-[#DC143C]">S</span>tay Vista
            </span>
          </h2>
        </div>
        <div className="my-2 md:my-4">
          <p>
            Stay Vista is a web application that helps users find the best
            accommodations in various locations. It features a search engine,
            booking system, and a user-friendly interface.
          </p>
        </div>
        <div className="flex gap-4 md:gap-5 items-center mb-2 md:mb-4">
          <button className="btn">Live Site</button>
          <button className="btn">Client</button>
          <button className="btn">Server</button>
        </div>
        <div className="mt-3 md:mt-4">
          <button className="viewMore learn-more border">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <Link to={`/project-details/${id}`} className="button-text">
              View Details
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project