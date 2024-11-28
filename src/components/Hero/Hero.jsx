import './Hero.css';
import Typewriter from 'typewriter-effect';
const Hero = () => {
  return (
    <section className="bg-[#010127] banner-container">
      <div className="max-w-6xl mx-auto pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10 text-white">
          <div className="flex flex-col justify-center sm:mb-8">
            <h3 className="text-xl">
              Hey<span className="text-[#DC143C] font-bold"> ! </span>I&apos;m
              <span className="text-3xl md:text-3xl lg:text-4xl my-5 font-semibold">
                <span className="text-[#DC143C] font-bold"> A</span>sadul
              </span>
              <span className="text-3xl md:text-3xl lg:text-4xl my-5 font-semibold ">
                <span className="text-[#DC143C] font-bold"> I</span>slam
              </span>
            </h3>
            <h3 className="my-4 flex items-center gap-4">
              A Front-End{' '}
              <span className="text-5xl font-bold font-typeWritter flex">
                <Typewriter
                  options={{
                    strings: ['Web Developer','Problem Solver'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h3>
            <div className="flex gap-3 lg:gap-4">
              <div>
                <button className="border border-green-500 px-5 py-2 rounded-lg outline-none mt-4 hover:bg-[#212129] duration-500">
                  <a
                    className="flex gap-2 items-center"
                    href="https://github.com/Asad9340"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>Github
                  </a>
                </button>
              </div>
              <div>
                <button className="border border-green-500 px-5 py-2 rounded-lg outline-none mt-4 hover:bg-[#212129] duration-500">
                  <a
                    className="flex gap-2 items-center"
                    href="https://drive.google.com/file/d/1YCvXyqy4Bnm8NdS_uTAiC0D22_pkyK_Y/view"
                    target="_blank"
                  >
                    <i className="fa-solid fa-circle-down"></i> RESUME
                  </a>
                </button>
              </div>
            </div>
            <div className="mt-4 flex gap-3 text-2xl">
              <button className="hover:text-blue-800">
                <a href="https://www.facebook.com/asad9340" target="_blank">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </button>
              <button className="hover:text-[#0A66C2]">
                <a href="https://www.linkedin.com/in/asad9340/" target="_blank">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </button>
              <button className="hover:text-[#1A8CD8]">
                <a href="https://twitter.com/asad9340" target="_blank">
                  <i className="fa-brands fa-square-x-twitter"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="items-end mt-6 mb-10">
            <div className="banner flex justify-center md:justify-end">
              <img
                className="shape"
                src="https://i.postimg.cc/y6n5tvHm/profile.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
