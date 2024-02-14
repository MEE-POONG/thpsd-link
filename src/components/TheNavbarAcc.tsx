import React, { useState } from 'react';
import { FaBars, FaBell, FaCog, FaMoon, FaRegUserCircle, FaSearch, FaSignOutAlt, FaSun } from 'react-icons/fa';
import ProfileDownDrop from '@/container/ProfileDropDown';
import NotificationDropDown from '@/container/NotificationDropDown';

const TheNavbarAcc: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        <button className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
          aria-label="Menu">
          <FaBars />
        </button>
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <FaSearch />
            </div>
            <input
              className="w-full pl-8 pr-2 py-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-gray-100 focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
              type="text" placeholder="Search for projects" aria-label="Search" />
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          <li className="flex">
            <button className="rounded-md focus:outline-none focus:shadow-outline-purple"
              aria-label="Toggle color mode">
              <FaSun className='hidden' />
              <FaMoon />
            </button>
          </li>
          <li className="relative">
            <NotificationDropDown />
          </li>
          <li className="relative">
            <ProfileDownDrop />
          </li>
        </ul>
      </div>
    </header>

  );
};

export default TheNavbarAcc;
