import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const menuRef = useRef(null);

  const navItems = [
    { name: 'About', link: 'about' },
    { name: 'Skills', link: 'skills' },
    { name: 'Experience', link: 'experience' },
    { name: 'Projects', link: 'projects' },
    { name: 'Blog', link: 'blog' },
    { name: 'Contact', link: 'contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleScroll = () => {
      if (isOpen) closeMenu();
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

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
          {/* Logo */}
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

          {/* Navbar Links for Desktop */}
          <div className="hidden md:flex flex-grow justify-center space-x-6">
            {navItems.map(item => (
              <Link
                key={item.link}
                to={item.link}
                smooth
                duration={500}
                spy
                activeClass="text-white py-2 px-4 rounded border-b-2 border-secondary"
                className={`text-secondary hover:text-white py-2 px-4 rounded transition duration-500 ${
                  activeLink === item.link ? 'border-b-2 border-secondary' : ''
                }`}
                offset={-70}
                onClick={() => handleLinkClick(item.link)}
              >
                {item.name}
              </Link>
            ))}
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
        className={`absolute top-16 left-0 mx-8 py-2 w-[calc(100%-64px)] rounded-md bg-[#111827] shadow-lg transition-all duration-300 z-50 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        ref={menuRef}
      >
        <div className="space-y-2 p-4">
          <ul className="space-y-2">
            {navItems.map(item => (
              <li key={item.link}>
                <Link
                  to={item.link}
                  smooth
                  duration={500}
                  spy
                  activeClass="block text-[#1b1238] bg-secondary py-2 px-4 rounded-md transition duration-200"
                  className="block text-secondary hover:text-white py-2 px-4 rounded-md transition duration-200 active:bg-[#1b1238] hover:bg-[#3d2689]"
                  offset={-70}
                  onClick={() => handleLinkClick(item.link)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
