import React, { useEffect, useState } from 'react';
import { FaBars, FaChevronDown, FaTable } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavAccount } from '@/data/navber';

const TheSlidebar: React.FC = () => {
    const router = useRouter();
    const isActiveSubPage = (itemHref: string) => router.pathname.startsWith(itemHref);
    return (
        <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
            <div className="py-4 text-gray-500 dark:text-gray-400">
                <Link className="flex items-center ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
                    <img className='w-8' src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/7511fb7d-e4d0-4cfb-ac7a-d76528b5f800/250" alt="hero image" />
                    <span className='ml-2'>
                        THPsd
                    </span>
                </Link>
                <ul className="mt-6">
                    {NavAccount.map((item, index) =>
                        item.head ? (
                            <li key={index} className={`relative px-6 py-1 text-gray-500 border-l-4 hover:border-purple-600 hover:text-purple-600 dark:hover:text-gray-200 ${isActiveSubPage(item?.href) ? 'text-purple-600 border-purple-600' : ''} `}>
                                <div className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 `}>
                                    {item.icon}
                                    <span className="ml-4">{item.name}</span>
                                </div>
                                <ul className="transition-opacity duration-300 ease-in-out opacity-100 max-h-xl p-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900">
                                    {item.loopPage?.map((subItem, index) => (
                                        <li key={index} className={`relative px-4 py-1 transition-colors duration-150 border-l-4 hover:text-gray-800 dark:hover:text-gray-200 ${router.pathname === item.href + subItem.href ? 'border-l-4 border-purple-600' : 'hover:border-l-4 hover:border-purple-600'}`}>
                                            <Link href={`${item.href}${subItem.href}`} className="w-full flex">
                                                {subItem.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ) : (
                            <li key={index} className={`relative px-6 py-1 text-gray-800 border-l-4 hover:border-purple-600 hover:text-purple-600 dark:hover:text-gray-200 ${router.pathname === item.href ? 'text-purple-600 border-purple-600' : ''}`}>
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

export const ButtonSlidebar: React.FC = () => {
    return (
        <button className="p-1 mr-auto -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
            aria-label="Menu">
            <FaBars />
        </button>
    );

};


