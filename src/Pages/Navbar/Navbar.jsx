import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  const menuRef = useRef(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    // Close menu on scroll
    const handleScroll = () => {
      if (isOpen) closeMenu();
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  // Handle click on navigation items to set active link
  const handleLinkClick = link => {
    const currentPath = location.pathname;
    if (currentPath !== '/') {
      const data = (location.state = link);
      navigate('/');
      setActiveLink('');
      setActiveLink(data);
    } else {
      setActiveLink(link);
    }
  };

  return (
    <nav className="bg-primary text-secondary font-manrope sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo (left-aligned) */}
          <div className="flex-shrink-0">
            <Link
              to="home"
              smooth
              duration={500}
              spy
              offset={-70}
              onClick={() => handleLinkClick('home')}
            >
              <img className="w-32" src="/src/assets/logo.png" alt="Logo" />
            </Link>
          </div>

          {/* Navbar Links (center-aligned) */}
          <div className="hidden md:flex flex-grow justify-center space-x-6">
            <Link
              to="about"
              smooth
              duration={500}
              spy
              activeClass="text-white py-2 px-4 rounded transition duration-500 border-b-2 border-secondary"
              className={`text-secondary hover:text-white py-2 px-4 rounded transition duration-500  md:hover:border-b-2 md:hover:border-secondary ${
                activeLink === 'about'
                  ? 'text-white py-2 px-4 border-b-2 border-secondary'
                  : ''
              }`}
              offset={-70}
              onClick={() => handleLinkClick('about')}
            >
              About
            </Link>
            <Link
              to="skills"
              smooth
              duration={500}
              spy
              activeClass="text-white py-2 px-4 rounded transition duration-500 border-b-2 border-secondary"
              className={`text-secondary hover:text-white py-2 px-4 rounded transition duration-500 md:hover:border-b-2 md:hover:border-secondary ${
                activeLink === 'skills'
                  ? 'text-white py-2 px-4 border-b-2 border-secondary'
                  : ''
              }`}
              offset={-70}
              onClick={() => handleLinkClick('skills')}
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth
              duration={500}
              spy
              activeClass="text-white py-2 px-4 rounded transition duration-500 border-b-2 border-secondary"
              className={`text-secondary hover:text-white py-2 px-4 rounded transition duration-500  md:hover:border-b-2 md:hover:border-secondary ${
                activeLink === 'projects'
                  ? 'text-white py-2 px-4 border-b-2 border-secondary'
                  : ''
              }`}
              offset={-70}
              onClick={() => handleLinkClick('projects')}
            >
              Projects
            </Link>
            <Link
              to="blog"
              smooth
              duration={500}
              spy
              activeClass="text-white py-2 px-4 rounded transition duration-500 border-b-2 border-secondary"
              className={`text-secondary hover:text-white py-2 px-4 rounded transition duration-500 md:hover:border-b-2 md:hover:border-secondary ${
                activeLink === 'blog'
                  ? 'text-white py-2 px-4 border-b-2 border-secondary'
                  : ''
              }`}
              offset={-70}
              onClick={() => handleLinkClick('blog')}
            >
              Blog
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              spy
              activeClass="text-white py-2 px-4 rounded transition duration-500 border-b-2 border-secondary"
              className={`text-secondary hover:text-white py-2 px-4 rounded transition duration-500 md:hover:border-b-2 md:hover:border-secondary ${
                activeLink === 'contact'
                  ? 'text-white py-2 px-4 border-b-2 border-secondary'
                  : ''
              }`}
              offset={-70}
              onClick={() => handleLinkClick('contact')}
            >
              Contact
            </Link>
          </div>

          {/* Hire Me Button (right-aligned) */}
          <div className="hidden md:flex items-center">
            <Link to="/hire-me">
              <button
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="button font-lexend"
              >
                Hire <span className="text-red-500">M</span>e
              </button>
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-secondary hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <RxCross1 className="h-6 w-6" />
              ) : (
                <GiHamburgerMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-14 left-0 mx-8 py-2 w-[calc(100%-64px)] rounded-md bg-[#111827] shadow-lg transition-all duration-300 z-50 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="space-y-2 p-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="about"
                smooth
                duration={500}
                spy
                activeClass="block text-white bg-secondary py-2 px-4 rounded-md transition duration-200"
                className="block text-secondary hover:text-white py-2 px-4 rounded-md transition duration-200 active:bg-[#1b1238] hover:bg-[#3d2689]"
                offset={-70}
                onClick={() => handleLinkClick('about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth
                duration={500}
                spy
                activeClass="block text-white bg-secondary py-2 px-4 rounded-md transition duration-200"
                className="block text-secondary hover:text-white py-2 px-4 rounded-md transition duration-200 active:bg-[#1b1238] hover:bg-[#3d2689]"
                offset={-70}
                onClick={() => handleLinkClick('projects')}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth
                duration={500}
                spy
                activeClass="block text-white bg-secondary py-2 px-4 rounded-md transition duration-200"
                className="block text-secondary hover:text-white py-2 px-4 rounded-md transition duration-200 active:bg-[#1b1238] hover:bg-[#3d2689]"
                offset={-70}
                onClick={() => handleLinkClick('services')}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="blog"
                smooth
                duration={500}
                spy
                activeClass="block text-white bg-secondary py-2 px-4 rounded-md transition duration-200"
                className="block text-secondary hover:text-white py-2 px-4 rounded-md transition duration-200 active:bg-[#1b1238] hover:bg-[#3d2689]"
                offset={-70}
                onClick={() => handleLinkClick('blog')}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth
                duration={500}
                spy
                activeClass="block text-white bg-secondary py-2 px-4 rounded-md transition duration-200"
                className="block text-secondary hover:text-white py-2 px-4 rounded-md transition duration-200 active:bg-[#1b1238] hover:bg-[#3d2689]"
                offset={-70}
                onClick={() => handleLinkClick('contact')}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
