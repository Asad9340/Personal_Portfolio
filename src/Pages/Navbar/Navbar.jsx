import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <nav className="bg-primary text-secondary font-manrope">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="w-32" src="/src/assets/logo.png" alt="Logo" />
            </Link>
          </div>

          {/* Navbar Links */}
          <div className="hidden md:flex flex-grow justify-center space-x-6">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-white py-2 px-4 rounded transition duration-500 border-b-2 border-secondary'
                  : 'text-secondary hover:text-white py-2 px-4 rounded transition duration-500 border-b-2 border-transparent hover:border-secondary'
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? 'text-white py-2 px-4 rounded transition duration-500 border-b-2 border-secondary'
                  : 'text-secondary hover:text-white py-2 px-4 rounded transition duration-500 border-b-2 border-transparent hover:border-secondary'
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? 'text-white py-2 px-4 rounded transition duration-500 border-b-2 border-secondary'
                  : 'text-secondary hover:text-white py-2 px-4 rounded transition duration-500 border-b-2 border-transparent hover:border-secondary'
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? 'text-white py-2 px-4 rounded transition duration-500 border-b-2 border-secondary'
                  : 'text-secondary hover:text-white py-2 px-4 rounded transition duration-500 border-b-2 border-transparent hover:border-secondary'
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-white py-2 px-4 rounded transition duration-500 border-b-2 border-secondary'
                  : 'text-secondary hover:text-white py-2 px-4 rounded transition duration-500 border-b-2 border-transparent hover:border-secondary'
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Hire Me Button */}
          <div className="hidden md:flex items-center">
            <Link to="/hire-me">
              <button className="button font-lexend">
                Hire <span className="text-red-500">M</span>e
              </button>
            </Link>
          </div>

          {/* Hamburger Menu */}
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
        ref={menuRef}
        className={`absolute top-14 left-0 mx-8 py-2 w-[calc(100%-64px)] rounded-md bg-[#111827] shadow-lg transition-all duration-300 z-50 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="space-y-2 p-4">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/about"
                className="block text-secondary hover:text-white py-2 px-4 rounded-md transition duration-200 active:bg-[#1b1238] hover:bg-[#3d2689]"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="block text-secondary hover:text-white py-2 px-4 rounded-md transition duration-200 active:bg-[#1b1238] hover:bg-[#3d2689]"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="block text-secondary hover:text-white py-2 px-4 rounded-md transition duration-200 active:bg-[#1b1238] hover:bg-[#3d2689]"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="block text-secondary hover:text-white py-2 px-4 rounded-md transition duration-200 active:bg-[#1b1238] hover:bg-[#3d2689]"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block text-secondary hover:text-white py-2 px-4 rounded-md transition duration-200 active:bg-[#1b1238] hover:bg-[#3d2689]"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <Link to="/hire-me">
                <button className="button font-lexend">
                  Hire <span className="text-red-500">M</span>e
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
