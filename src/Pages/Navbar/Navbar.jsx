import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-secondary font-manrope">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo (left-aligned) */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="w-32" src="/src/assets/logo.png" alt="" />
            </Link>
          </div>

          {/* Navbar Links (center-aligned) */}
          <div className="hidden md:flex flex-grow justify-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-white py-2 px-4 rounded transition duration-500 border-b-2 border-secondary'
                  : 'text-secondary hover:text-white py-2 px-4 rounded transition duration-500 border-b-2 border-transparent hover:border-secondary'
              }
            >
              Home
            </NavLink>
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

          {/* Profile Button (right-aligned) */}
          <div className="hidden md:flex items-center">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? 'text-white py-2 px-4 rounded transition duration-500 border-b-2 border-secondary'
                  : 'text-secondary hover:text-white py-2 px-4 rounded transition duration-500 border-b-2 border-transparent hover:border-secondary'
              }
            >
              Profile
            </NavLink>
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
        className={`absolute top-14 left-0 w-full bg-[#675C9C] shadow-lg transition-all duration-300 z-50 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="space-y-2 p-4">
          <ul>
            <li>
              <NavLink
                to="/"
                className="block text-secondary hover:bg-gray-700 hover:text-white hover:border-transparent   py-2 px-4 rounded transition duration-200 border-b-2 border-secondary"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block text-secondary hover:bg-gray-700 hover:text-white hover:border-transparent   py-2 px-4 rounded transition duration-200 border-b-2 border-secondary"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="block text-secondary hover:bg-gray-700 hover:text-white hover:border-transparent   py-2 px-4 rounded transition duration-200 border-b-2 border-secondary"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block text-secondary hover:bg-gray-700 hover:text-white hover:border-transparent   py-2 px-4 rounded transition duration-200 border-b-2 border-secondary"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className="block text-secondary hover:bg-gray-700 hover:text-white hover:border-transparent   py-2 px-4 rounded transition duration-200"
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
