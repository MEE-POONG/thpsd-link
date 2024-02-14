import React, { useEffect, useState } from 'react';
import { FaAngleDown, FaBars, FaChevronDown, FaHome, FaTable, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavAccount } from '@/data/navber';

const TheSlidebar: React.FC = () => {
    const router = useRouter();
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const toggleMenu = (menuName: string) => {
        setOpenMenu(openMenu === menuName ? null : menuName);
    };

    return (
        <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
            <div className="py-4 text-gray-500 dark:text-gray-400">
                <Link className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
                    Windmill
                </Link>
                <ul className="mt-6">
                    {NavAccount.map((item) =>
                        item.head ? (
                            <li key={item.href} className="relative px-6 py-3 text-gray-800">
                                <button onClick={() => toggleMenu(item.href)}
                                    className={`inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 ${openMenu === item.href ? 'text-purple-600' : ''} hover:text-purple-600 dark:hover:text-gray-200 `}>
                                    <span className="inline-flex items-center">
                                        <FaTable className="w-5 h-5" />
                                        <span className="ml-4 font-bold">{item.name}</span>
                                    </span>
                                    <FaChevronDown />
                                </button>

                                {openMenu === item.href && (
                                    <ul className="transition-opacity duration-300 ease-in-out opacity-100 max-h-xl p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900">
                                        {item.loopPage?.map((subItem) => (
                                            <li key={subItem.href} className={`relative px-4 py-2 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 border-l-4 hover:border-purple-600 ${router.pathname === item.href + subItem.href ? 'border-purple-600' : ''}`}>
                                                <Link href={`${item.href}${subItem.href}`} className="w-full">{subItem.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li key={item.href} className="relative px-6 py-3 text-gray-800 border-l-4 hover:border-purple-600">
                                {/* <span className={`absolute inset-y-0 left-0 w-1 ${router.pathname === item.href ? 'bg-purple-600' : ''} rounded-tr-lg rounded-br-lg`} /> */}
                                <Link href={item.href} className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-purple-600 dark:hover:text-gray-200 ${router.pathname === item.href ? 'text-purple-600' : ''}`}>
                                    {item.icon}
                                    <span className="ml-4">{item.name}</span>
                                </Link>
                            </li>
                        )
                    )}
                </ul>
                {/* <div className="px-6 my-6">
                    <button
                        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                        Create account
                        <span className="ml-2" aria-hidden="true">+</span>
                    </button>
                </div> */}
            </div>
        </aside>
    );
};

export default TheSlidebar;