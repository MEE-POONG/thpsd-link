import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
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

const MenuLinkDropDown: React.FC<MenuDropDownProps> = ({ NewsItem }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        const isActive = router.pathname === NewsItem.href ||
            !!NewsItem.loopPage?.some(subItem => router.pathname === `${NewsItem.href}${subItem.href}`);
        
        setIsOpen(isActive);
    }, [router.pathname, NewsItem.href, NewsItem.loopPage]);
    
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


    return (
        <div ref={dropdownRef} className="relative">
            <button onClick={toggleDropdown}
                className={`border-l-4 px-6 py-3 text-gray-950 hover:border-purple-600 inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 ${isOpen ? 'text-purple-600 border-purple-600' : ''} hover:text-purple-600 dark:hover:text-gray-200`}
                >
                {NewsItem.icon}
                <span>{NewsItem.name}</span>
                <FaChevronDown className={`${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="transition-opacity duration-300 ease-in-out opacity-100 max-h-xl p-2 my-2 mx-4 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900">
                    <div className="py-1">
                        {NewsItem.loopPage?.map((subItem, index) => (
                            <li key={index} className={`relative px-4 py-2 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${router.pathname === NewsItem.href + subItem.href ? 'border-l-4 border-purple-600' : 'hover:border-l-4 hover:border-purple-600'}`}>
                                <Link key={subItem.href} href={`${NewsItem.href}${subItem.href}`} className="w-full">
                                    {subItem.name}
                                </Link>
                            </li>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuLinkDropDown;