import { RxCross1 } from 'react-icons/rx';
import './Contact.css';
import { BsFillSendFill } from 'react-icons/bs';
const Contact = () => {
  return (
    <div className="font-manrope mb-[1px]">
      <div className="min-h-screen bg-primary py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#135dde] to-[#675C9C] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="text-white relative px-4 py-10 bg-blue-950 shadow-lg sm:rounded-3xl sm:p-10">
            <div className="text-center pb-6">
              <h1 className="text-3xl ">
                Let’s <span className="text-[#DC143C]">C</span>
                onnect!
              </h1>

              <p className="text-gray-300">
                Reach out to me by filling out the form below.
              </p>
            </div>

            <form>
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                name="name"
              />

              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                name="email"
              />

              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subject"
                name="_subject"
              />
              <textarea
                className="shadow mb-4 min-h-0 appearance-none border rounded h-20 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Type your message here..."
                name="message"
              ></textarea>

              <div className="flex justify-between">
                <button className="deleteButton">
                  <span className="text">Reset</span>
                  <span className="icon">
                    <RxCross1 className="cross text-xl" />
                  </span>
                </button>
                <button className="sendButton">
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <BsFillSendFill className="arrowIcon" />
                    </div>
                  </div>
                  <span>Send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
