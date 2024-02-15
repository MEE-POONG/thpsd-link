import React, { useEffect, useState } from 'react';
import { FaChevronDown, FaTable } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavAccount } from '@/data/navber';
import MenuDropDown from '@/container/menuDropDown';

const TheSlidebar: React.FC = () => {
    const router = useRouter();

    return (
        <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
            <div className="py-4 text-gray-500 dark:text-gray-400">
                <Link className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
                    Windmill
                </Link>
                <ul className="mt-6">
                    {NavAccount.map((item, index) =>
                        item.head ? (
                            <MenuDropDown key={index} NewsItem={item} />
                        ) : (
                            <li key={item.href} className={`relative px-6 py-3 text-gray-800 border-l-4 hover:border-purple-600 hover:text-purple-600 dark:hover:text-gray-200 ${router.pathname === item.href ? 'text-purple-600 border-purple-600' : ''}`}>
                                <Link href={item.href} className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 `}>
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