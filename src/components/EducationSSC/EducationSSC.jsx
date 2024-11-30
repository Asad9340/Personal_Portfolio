import { LuDownload } from 'react-icons/lu';
import './EducationSSC.css';
const EducationSSC = () => {
  return (
    <div className="grid">
      <div className="bg-white rounded-md shadow-lg">
        <div className="md:flex gap-8 m-4 mx-auto w-full">
          <div className="flex-none">
            <img
              src="/src/assets/ssc.jpg"
              alt="school-image"
              className="rounded-md transform w-full h-[250px] md:h-[380px] md:w-80 object-cover  border-4 border-gray-300 shadow-lg"
            />
          </div>
          <div className="p-5 rounded-2xl w-full bg-[#F7F9FB] flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
                <p className="text-sm text-gray-600">Education</p>
                <p className="text-base font-medium text-navy-700">
                  Momena Ali Science School
                </p>
              </div>

              <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p className="text-sm text-gray-600">Group</p>
                <p className="text-base font-medium text-navy-700">Science</p>
              </div>

              <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p className="text-sm text-gray-600">Result</p>
                <p className="text-base font-medium text-navy-700">Grade: A+</p>
              </div>

              <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p className="text-sm text-gray-600">Passing Year</p>
                <p className="text-base font-medium text-navy-700">2016</p>
              </div>
            </div>
            <div className="mt-4">
              <a href="/CV_Resume/Asadul's CV.pdf" download="Asadul's CV.pdf">
                <button className="cssbuttons-io-button">
                  Download Certificate
                  <div className="icon">
                    <LuDownload color="white" />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSSC;
