import React, { useEffect, useState } from 'react';
import { FaBars, FaBell, FaCog, FaMoon, FaRegUserCircle, FaSearch, FaSignOutAlt, FaSun } from 'react-icons/fa';
import ProfileDownDrop from '@/container/ProfileDropDown';
import NotificationDropDown from '@/container/NotificationDropDown';
import { ButtonSlidebar } from './TheSlidebar';

const TheNavbarAcc: React.FC = () => {



  return (
    <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
      <div className="container flex items-center justify-end h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        <ButtonSlidebar />
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
