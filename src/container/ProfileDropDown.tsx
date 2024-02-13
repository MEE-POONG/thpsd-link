
import React, { useState } from 'react';
import Link from 'next/link';

const ProfileDownDrop: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <>
           <button onClick={toggleDropdown} className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                aria-label="Account" aria-haspopup="true">
                <img className="object-cover w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                    alt="" aria-hidden="true" />
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
        </>
    );
};

export default ProfileDownDrop;
