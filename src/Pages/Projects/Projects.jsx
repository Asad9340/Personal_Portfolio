import './Projects.css';
const Projects = () => {
  return (
    <div className="bg-primary py-8 md:py-12 mb-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center text-white">
          <span>- Projects</span>
          <h2>
            My <span className="">Latest Projects</span>
          </h2>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 items-center justify-center text-white mt-6 md:mt-10 p-2 md:p-3 rounded-3xl backdrop-blur-md bg-white/15 ">
          <div>
            <img
              src="/src/assets/Honours.jpg"
              className="h-[400px] md:h-[450px] w-full object-cover hover:scale-105 rounded-3xl ease-in-out duration-500 "
              alt="Projects Image"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex gap-3 items-center ">
              <button className="keywordBtn"> Web Development</button>
              <button className="keywordBtn">Responsive Design</button>
              <button className="keywordBtn">API Integration</button>
            </div>
            <div>
              <h2>
                Project Title: <span>Stay Vista</span>
              </h2>
            </div>
            <div>
              <p>
                Stay Vista is a web application that helps users find the best
                accommodations in various locations. It features a search
                engine, booking system, and a user-friendly interface.
              </p>
            </div>
            <div>
              <button className="viewMore learn-more border">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">View Details</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
