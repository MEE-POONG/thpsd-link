
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBell, FaCog, FaRegUserCircle, FaSignOutAlt } from 'react-icons/fa';

const NotificationDropDown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <>

            <button onClick={toggleDropdown} className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple" aria-label="Notifications"
                aria-haspopup="true">
                <FaBell />
                <span aria-hidden="true"
                    className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"></span>
            </button>
            {isOpen && (
                <ul className="transition opacity-100 ease-in duration-150 absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                    aria-label="submenu">
                    <li className="flex">
                        <Link className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                            href="#">
                            <FaRegUserCircle className="w-4 h-4 mr-3" />
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li className="flex">
                        <Link className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                            href="#">
                            <FaCog className="w-4 h-4 mr-3" />
                            <span>Settings</span>
                        </Link>
                    </li>
                    <li className="flex">
                        <Link className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                            href="#">
                            <FaSignOutAlt className="w-4 h-4 mr-3" />
                            <span>Log out</span>
                        </Link>
                    </li>
                </ul>
            )}
        </>
    );
};

export default NotificationDropDown;
