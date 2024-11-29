import { FaFacebookF, FaGithub } from 'react-icons/fa';
import './Hero.css';
import Typewriter from 'typewriter-effect';
import { RiTwitterXFill } from 'react-icons/ri';
import { SiLinkedin } from 'react-icons/si';
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
            <h3 className="my-4 flex items-center gap-4 text-2xl">
              A Passionate{' '}
              <span className="text-5xl font-bold font-typeWritter flex">
                <Typewriter
                  options={{
                    strings: [
                      'Web Developer',
                      'Problem Solver',
                      'MERN Developer',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h3>
            <div className="flex gap-3 lg:gap-4">
              <div>
                <a
                  href="http://github.com/asad9340"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button font-lexend flex gap-2 items-center">
                    <FaGithub /> Github
                  </button>
                </a>
              </div>
              <div>
                <a
                  href="/CV_Resume/Asadul's Resume.pdf"
                  download="Asadul_Resume.pdf"
                >
                  <button className="Download-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="20"
                      viewBox="0 0 640 512"
                    >
                      <path
                        d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                        fill="white"
                      ></path>
                    </svg>
                    <span>RESUME</span>
                  </button>
                </a>
              </div>
            </div>
            <div className="mt-4 flex gap-3 text-2xl">
              <ul className="wrapper">
                <a href="https://www.linkedin.com/in/asad9340/" target="_blank">
                  <li className="icon linkedin">
                    <span className="tooltip">LinkedIn</span>
                    <SiLinkedin />
                  </li>
                </a>
                <a
                  href="https://www.facebook.com/asad9340"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="icon facebook">
                    <span className="tooltip">Facebook</span>
                    <FaFacebookF />
                  </li>
                </a>
                <a
                  href="https://x.com/asad9340"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="icon twitter">
                    <span className="tooltip">Twitter</span>
                    <RiTwitterXFill />
                  </li>
                </a>
              </ul>
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
