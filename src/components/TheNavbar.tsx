import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavDefault } from '@/data/navber';
import { FaBars } from 'react-icons/fa';

const TheNavbar: React.FC = () => {
  const router = useRouter();
  const checkPath = router.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-purple-700 border-gray-200 py-4 drop-shadow-xl fixed w-full z-50">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Link href="#" className="flex items-center">
          <img src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/7511fb7d-e4d0-4cfb-ac7a-d76528b5f800/250" className="h-6 mr-3 sm:h-9 bg-white" alt="Landwind Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">ThPsd</span>
        </Link>
        <div className="flex items-center lg:order-2">
          <Link href="/login"
            className="text-white bg-black hover:bg-gray-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 ">
            เข้าสู่ระบบ
          </Link>
          <button data-collapse-toggle="mobile-menu-2" type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="mobile-menu-2" aria-expanded="false">
            <FaBars />
          </button>
        </div>
        <div className={`${isMenuOpen ? '' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {NavDefault.map((item) => (
              <li key={item?.name}>
                <Link href={item?.href}
                  className={`block py-2 pl-3 pr-4 ${checkPath === item.href ? 'text-white underline' : 'text-gray-100'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-black lg:p-0 `}>
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TheNavbar;
