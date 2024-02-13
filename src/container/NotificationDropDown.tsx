
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaBell, } from 'react-icons/fa';

const NotificationDropDown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);
    // Close the dropdown if the click is outside of it
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);
    return (
        <div ref={dropdownRef}>
            <button onClick={toggleDropdown} className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple" aria-label="Notifications"
                aria-haspopup="true">
                <FaBell />
                <span aria-hidden="true"
                    className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"></span>
            </button>
            {isOpen && (
                <ul className="transition opacity-100 ease-in duration-150 absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700">
                    <li className="flex">
                        <Link className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                            href="#">
                            <span>Messages</span>
                            <span
                                className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                                13
                            </span>
                        </Link>
                    </li>
                    <li className="flex">
                        <Link className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                            href="#">
                            <span>Sales</span>
                            <span
                                className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                                2
                            </span>
                        </Link>
                    </li>
                    <li className="flex">
                        <Link className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                            href="#">
                            <span>Alerts</span>
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default NotificationDropDown;
