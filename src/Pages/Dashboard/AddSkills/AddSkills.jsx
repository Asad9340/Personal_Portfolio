const AddSkills = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Add Skills</h1>

        <div className="space-y-4">
          <div className="flex flex-col gap-4">
            <div className="w-full flex gap-4">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Skill Title"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Experience (e.g., 1+ years)"
              />
            </div>
            <div className="w-full">
              <textarea
                className="w-full h-28 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                placeholder="Skill Description"
              ></textarea>
            </div>
            <div>
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="url"
                placeholder="Image URL"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-700">Projects</h2>
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Project Name"
            />
            <textarea
              className="w-full h-20 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="Project Description"
            ></textarea>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Certifications
            </h2>
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Certification Name"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Libraries and Tools
            </h2>
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Library or Tool Name"
            />
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 py-3 rounded-lg focus:outline-none focus:shadow-outline">
            Save Skill
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSkills;
