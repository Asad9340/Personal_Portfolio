import { LuDownload } from 'react-icons/lu';
const EducationHSC = () => {
  return (
    <div className="grid">
      <div className="bg-white rounded-md shadow-lg">
        <div className="md:grid grid-cols-9 gap-8 m-4 mx-auto">
          <div className="col-span-3">
            <img
              src="/src/assets/HSC.jpg"
              alt="school-image"
              className="rounded-xl transform w-36 h-full mb-4 md:mb-0  object-cover  border-4 border-gray-300 shadow-lg"
            />
          </div>
          <div className="col-span-6 p-5 rounded-2xl w-full bg-[#F7F1FB] flex flex-col justify-center">
            <div>
              <h2 className="pl-1 rounded-2xl bg-white bg-clip-border shadow-3xl shadow-shadow-500 font-semibold  mb-6 pb-3 pt-2 px-6 text-3xl text-center">
                Academic Level:{' '}
                <span className="text-[#DC143C] font-bold">H</span>SC
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
                <p className="text-sm text-gray-600">Education</p>
                <p className="text-base font-medium text-navy-700">
                  Dhaka Residential Model College
                </p>
              </div>

              <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p className="text-sm text-gray-600">Group</p>
                <p className="text-base font-medium text-navy-700">Science</p>
              </div>

              <div className="flex flex-col  justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p className="text-sm text-gray-600">Result</p>
                <p className="text-base font-medium text-navy-700">
                  Grade: 4.67
                </p>
              </div>

              <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p className="text-sm text-gray-600">Passing Year</p>
                <p className="text-base font-medium text-navy-700">2018</p>
              </div>
            </div>
            <div className="mt-4 flex justify-center items-center">
              <a
                href="/Certificate/HSC Certificate.jpg"
                download="HSC Certificate.jpg"
              >
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

export default EducationHSC;
