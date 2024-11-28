import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-secondary font-manrope">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo (left-aligned) */}
          <div className="flex-shrink-0">
            <img className='w-32' src="/src/assets/logo.png" alt="" />
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
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-primary shadow-lg transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="space-y-2 p-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'block text-white py-2 px-4 rounded transition duration-200 border-b-2 border-secondary'
                : 'block text-secondary hover:bg-gray-700 hover:text-white py-2 px-4 rounded transition duration-200 border-b border-transparent'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'block text-white py-2 px-4 rounded transition duration-200 border-b-2 border-secondary'
                : 'block text-secondary hover:bg-gray-700 hover:text-white py-2 px-4 rounded transition duration-200 border-b border-transparent'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? 'block text-white py-2 px-4 rounded transition duration-200 border-b-2 border-secondary'
                : 'block text-secondary hover:bg-gray-700 hover:text-white py-2 px-4 rounded transition duration-200 border-b border-transparent'
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'block text-white py-2 px-4 rounded transition duration-200 border-b-2 border-secondary'
                : 'block text-secondary hover:bg-gray-700 hover:text-white py-2 px-4 rounded transition duration-200 border-b border-transparent'
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? 'block text-white py-2 px-4 rounded transition duration-200 border-b-2 border-secondary'
                : 'block text-secondary hover:bg-gray-700 hover:text-white py-2 px-4 rounded transition duration-200'
            }
          >
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
