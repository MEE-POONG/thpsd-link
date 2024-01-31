import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavDefault } from '@/data/navber';

const TheNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const checkPath = router.pathname;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-cyan-500">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button*/}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700" aria-controls="mobile-menu" aria-expanded="false" onClick={toggleMenu}>
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu open */}
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon for menu close */}
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Links section */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              {/* Your Logo Here */}
              <img
                className="block lg:hidden h-8 w-auto"
                src={"https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/7511fb7d-e4d0-4cfb-ac7a-d76528b5f800/250"}
                alt="Your Logo"
                style={{ filter: 'invert(100%) brightness(200%)' }}
              />

              <img
                className="hidden lg:block h-8 w-auto"
                src={"https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/7511fb7d-e4d0-4cfb-ac7a-d76528b5f800/250"}
                alt="Your Logo"
                style={{ filter: 'invert(100%) brightness(200%)' }}
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* Your navigation links */}
                {NavDefault.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-white hover:underline px-3 py-2 rounded-md text-sm font-bold ${checkPath === item.href ? 'font-bold' : ''}`}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* More links */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* Your mobile navigation links */}
          {NavDefault.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-white hover:underline px-3 py-2 rounded-md text-sm font-bold ${checkPath === item.href ? 'font-bold' : ''}`}
            >
              {item.name}
            </Link>
          ))}
          {/* More links */}
        </div>
      </div>
    </nav>
  );
};

export default TheNavbar;
