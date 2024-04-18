
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaCog, FaRegUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { useRouter } from 'next/router';

const ProfileDownDrop: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);
    const router = useRouter();  // Use the useRouter hook to handle redirection

    const toggleDropdown = () => setIsOpen(!isOpen);

    // Function to handle user logout
    const handleLogout = () => {
        // Clear user session/token here
        localStorage.removeItem('user'); // Example: Clearing token from localStorage
        router.push('/login'); // Redirect user to login page
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
            <button onClick={toggleDropdown} className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                aria-label="Account" aria-haspopup="true">
                <img className="object-cover w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                    alt="" aria-hidden="true" />
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
                        <button onClick={handleLogout}  className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                            <FaSignOutAlt className="w-4 h-4 mr-3" />
                            <span>Log out</span>
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default ProfileDownDrop;
