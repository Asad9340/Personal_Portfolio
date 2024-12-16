/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function Project({
  id,
  title,
  description,
  images,
  liveSite,
  clientCode,
  serverCode,
}) {
  return (
    <div
      className={`flex gap-4 md:gap-8 m-3 items-center justify-center text-white mt-6 md:mt-10 p-4 md:p-6 rounded-3xl backdrop-blur-md bg-white/15 ${
        id % 2 === 0 ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'
      }`}
    >
      <div className="flex-1">
        <img
          src={images[0]}
          className="w-full h-[200px] md:h-[300px] object-cover hover:scale-105 rounded-3xl ease-in-out duration-500"
          alt={title}
        />
      </div>
      <div className="flex-1">
        <div className="my-2 md:my-4">
          <h2 className="text-3xl md:text-4xl">
            Project:{' '}
            <span className="font-semibold md:font-bold">
              <span className="text-[#DC143C]">{title.charAt(0)}</span>
              {title.slice(1)}
            </span>
          </h2>
        </div>
        <div className="my-2 md:my-4">
          <p>{description}</p>
        </div>
        <div className="flex gap-4 md:gap-5 items-center mb-2 md:mb-4">
          <a
            href={liveSite}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Live Site
          </a>
          <a
            href={clientCode}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Client
          </a>
          <a
            href={serverCode}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Server
          </a>
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

export default Project;
