
const EducationHonours = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden p-6 w-full h-full">
      <div className="md:w-2/3 pr-4 mb-4 md:mb-0">
        <h2 className="text-2xl font-semibold mb-2">University Name</h2>
        <p className="text-lg font-medium text-gray-700 mb-4">
          Result: First Class
        </p>
        <p className="text-md text-gray-600 mb-2">
          Course: Honours in Computer Science
        </p>
        <p className="text-md text-gray-600 mb-2">Year: 2025</p>
        <p className="text-md text-gray-600 mb-2">Duration: 4 Years</p>
        <p className="text-md text-gray-600 mb-2">Location: City, State</p>
      </div>
      <div className="md:w-1/3">
        <img
          src="https://via.placeholder.com/300"
          alt="University"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default EducationHonours;
