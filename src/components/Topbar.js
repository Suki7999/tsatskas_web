'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle navigation without using <a> tag
  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <header className="text-white shadow-md">
      <div className="px-20 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer" onClick={() => handleNavigation('/')}>
          Tsatsa's nail art salon
        </div>

        {/* Menu Button for Mobile */}
        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <nav className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex space-x-6">
            <li>
              <button
                className="hover:text-gray-400"
                onClick={() => handleNavigation('/')}
              >
                Нүүр
              </button>
            </li>
            <li>
              <button
                className="hover:text-gray-400"
                onClick={() => handleNavigation('/about')}
              >
                Бидний тухай
              </button>
            </li>
            <li>
              <button
                className="hover:text-gray-400"
                onClick={() => handleNavigation('/services')}
              >
                Services
              </button>
            </li>
            <li>
              <button
                className="hover:text-gray-400"
                onClick={() => handleNavigation('/contact')}
              >
                Холбоо барих
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Topbar;
