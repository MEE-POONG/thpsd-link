
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaBell, FaChevronDown, FaTable, } from 'react-icons/fa';
import { useRouter } from 'next/router';

interface NewsItem {
    name: string;
    icon: JSX.Element; // Assuming it's a React element, such as an icon
    href: string;
    head: boolean;
    loopPage?: {
        name: string;
        href: string;
    }[];
}
interface MenuDropDownProps {
    NewsItem: NewsItem;
}
const MenuDropDown: React.FC<MenuDropDownProps> = ({ NewsItem }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const isActiveSubPage = (itemHref: string) => router.pathname.startsWith(itemHref);
    useEffect(() => {
        if (isActiveSubPage(NewsItem.href)) {
            setIsOpen(true);
        }
    }, []);

    return (
        <li className='relative' >
            <button onClick={toggleDropdown}
                className={`border-l-4 px-6 py-3 hover:border-purple-600 inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 ${isOpen || isActiveSubPage(NewsItem?.href) ? 'text-purple-600 border-purple-600' : ''} hover:text-purple-600 dark:hover:text-gray-200`}>
                <span className="inline-flex items-center">
                    <FaTable className="w-5 h-5" />
                    <span className="ml-4 font-bold">
                        {NewsItem.name}
                    </span>
                </span>
                <FaChevronDown />
            </button>
            {isOpen && (
                <ul className="transition-opacity duration-300 ease-in-out opacity-100 max-h-xl p-2 my-2 mx-4 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900">
                    {NewsItem.loopPage?.map((subItem, index) => (
                        <li key={index} className={`relative px-4 py-2 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${router.pathname === NewsItem.href + subItem.href ? 'border-l-4 border-purple-600' : 'hover:border-l-4 hover:border-purple-600'}`}>
                            <Link href={`${NewsItem.href}${subItem.href}`} className="w-full">
                                {subItem.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default MenuDropDown;
