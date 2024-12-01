import './Projects.css';
const Projects = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4">
          <div className="relative group">
            <div className="relative w-full h-48 bg-gray-800 overflow-hidden rounded-t-xl shadow-lg">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Project Image"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="relative bg-gradient-to-r from-gray-800 to-gray-700 rounded-b-xl shadow-lg px-6 py-8 -mt-12 z-10">
              <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                Project Title
              </h3>
              <p className="text-gray-300 text-sm mt-2 group-hover:text-gray-100 transition-colors">
                A short two-line description that gives insight about the
                project and its features.
              </p>

              <div className="mt-4 flex space-x-4">
                <button className="px-4 py-2 bg-yellow-500 text-sm font-bold text-gray-900 rounded-full shadow-md hover:bg-yellow-400 hover:shadow-lg transition-all">
                  View Details
                </button>
                <button className="px-4 py-2 bg-gray-700 text-sm font-bold text-gray-200 rounded-full shadow-md hover:bg-gray-600 hover:text-white transition-all">
                  Learn More
                </button>
              </div>
            </div>
            {/* <!-- Hover Overlay --> */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 rounded-xl transition-all duration-300 flex flex-col items-center justify-center z-20 opacity-0 group-hover:opacity-100">
              <button className="px-6 py-2 bg-yellow-500 text-lg font-bold text-gray-900 rounded-full shadow-md hover:bg-yellow-400 hover:shadow-lg transition-all mb-4">
                View Details
              </button>
              <button className="px-6 py-2 bg-gray-700 text-lg font-bold text-gray-200 rounded-full shadow-md hover:bg-gray-600 hover:text-white transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="relative group">
            {/* <!-- Top Layer (Image) --> */}
            <div className="relative w-full h-48 bg-gray-800 overflow-hidden rounded-t-xl shadow-lg">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Project Image"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            {/* <!-- Bottom Layer --> */}
            <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 rounded-b-xl shadow-lg px-6 py-8 -mt-12 z-10">
              <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                Another Project
              </h3>
              <p className="text-gray-300 text-sm mt-2 group-hover:text-gray-100 transition-colors">
                A concise description that highlights key aspects of the
                project, attracting interest.
              </p>
              {/* <!-- Buttons --> */}
              <div className="mt-4 flex space-x-4">
                <button className="px-4 py-2 bg-yellow-500 text-sm font-bold text-gray-900 rounded-full shadow-md hover:bg-yellow-400 hover:shadow-lg transition-all">
                  View Details
                </button>
                <button className="px-4 py-2 bg-gray-700 text-sm font-bold text-gray-200 rounded-full shadow-md hover:bg-gray-600 hover:text-white transition-all">
                  Learn More
                </button>
              </div>
            </div>
            {/* <!-- Hover Overlay --> */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 rounded-xl transition-all duration-300 flex flex-col items-center justify-center z-20 opacity-0 group-hover:opacity-100">
              <button className="px-6 py-2 bg-yellow-500 text-lg font-bold text-gray-900 rounded-full shadow-md hover:bg-yellow-400 hover:shadow-lg transition-all mb-4">
                View Details
              </button>
              <button className="px-6 py-2 bg-gray-700 text-lg font-bold text-gray-200 rounded-full shadow-md hover:bg-gray-600 hover:text-white transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
