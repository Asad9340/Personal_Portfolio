import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaCopyright,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Content */}
        <div className="text-center space-y-4">
          {/* Personal Details */}
          <div className="space-y-1">
            <p>
              Email:{' '}
              <Link
                to="mailto:asadulimran1999@gmail.com"
                className="hover:text-white transition"
              >
                asadulimran1999@gmail.com
              </Link>
            </p>
            <p>
              Mobile:{' '}
              <Link
                to="tel:+8801710101984"
                className="hover:text-white transition"
              >
                +8801710101984
              </Link>
            </p>
          </div>

          {/* Follow Me Section */}
          <div className="flex justify-center space-x-8">
            <Link
              to="https://www.facebook.com/asad9340"
              className="flex items-center hover:text-white transition space-x-2"
            >
              <FaFacebookF />
              <span>Facebook</span>
            </Link>
            <Link
              to="https://www.linkedin.com/in/asad9340/"
              className="flex items-center hover:text-white transition space-x-2"
            >
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </Link>
            <Link
              to="https://github.com/Asad9340"
              className="flex items-center hover:text-white transition space-x-2"
            >
              <FaGithub />
              <span>GitHub</span>
            </Link>
          </div>
          {/* Footer Bottom Section */}
          <div className="border-t border-secondary pt-4 text-center">
            <p className="text-sm flex justify-center items-center gap-1">
              <FaCopyright size={16} />
              {new Date().getFullYear()} Md Asadul Islam. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
