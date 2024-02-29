import React from 'react';
import RootLayoutAccount from '@/components/RootLayoutAcc';
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

const UpgradePage: React.FC = () => {

  return (
    <RootLayoutAccount>
      <div className="upgrade container px-6 mx-auto mt-6 grid">
        <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
          <div className="max-w-screen-xl mx-auto">
            <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Designed for
                business teams like yours
              </h2>
              <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Here at Landwind we focus on
                markets where technology, innovation, and capital can unlock long-term value and drive economic
                growth.
              </p>
            </div>
            {/* Card */}
            <div className="flex flex-wrap justify-center gap-5">
              {/* card1 */}
              <div className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
                <p className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">
                  Free
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  ฿0
                  <span className="text-sm text-gray-300">
                    / เดือน
                  </span>
                </p>
                <p className="mt-4 text-xs text-gray-600 dark:text-gray-100">
                  Best option for personal use & for your next project.
                </p>
                <ul className="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
                  <li className="mb-3 flex items-center gap-2 ">
                    <FaCheckCircle />
                    20 ลิงค์/เดือน
                  </li>
                  <li className="mb-3 flex items-center gap-2 ">
                    <FaCheckCircle />
                    3 QR Code/เดือน
                  </li>
                  <li className="mb-3 flex items-center gap-2 ">
                    <FaCheckCircle />
                    Unlimited Templates
                  </li>
                </ul>
                <Link href='/payment' className="py-2 px-4 block w-full bg-black hover:bg-white hover:text-black border-2 border-black text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
                  เลือกแผนนี้
                </Link>
              </div>
              {/* card2 */}
              <div className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
                <p className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">
                  Core
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  ฿299
                  <span className="text-sm text-gray-300">
                    / เดือน
                  </span>
                </p>
                <p className="mt-4 text-xs text-gray-600 dark:text-gray-100">
                  Best option for personal use & for your next project.
                </p>
                <ul className="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
                  <li className="mb-3 flex items-center gap-2 ">
                    <FaCheckCircle />
                    30 ลิงค์/เดือน
                  </li>
                  <li className="mb-3 flex items-center gap-2 ">
                    <FaCheckCircle />
                    10 QR Codes/เดือน
                  </li>
                  <li className="mb-3 flex items-center gap-2 ">
                    <FaCheckCircle />
                    Unlimited Templates
                  </li>
                </ul>
                <Link href='/payment' className="py-2 px-4 block w-full bg-black hover:bg-white hover:text-black border-2 border-black text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
                  เลือกแผนนี้
                </Link>
              </div>
              {/* card3 */}
              <div className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800 ">
                <p className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">
                  Growth
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  ฿999
                  <span className="text-sm text-gray-300">
                    / เดือน
                  </span>
                </p>
                <p className="mt-4 text-xs text-gray-600 dark:text-gray-100">
                  Relevant for multiple users, extended & premium support.
                </p>
                <ul className="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
                  <li className="mb-3 flex items-center gap-2 ">
                    <FaCheckCircle />
                    2,000 ลิงค์/เดือน
                  </li>
                  <li className="mb-3 flex items-center gap-2 ">
                    <FaCheckCircle />
                    50 QR Codes/เดือน
                  </li>
                  <li className="mb-3 flex items-center gap-2 ">
                    <FaCheckCircle />
                    Unlimited Templates
                  </li>
                </ul>
                <Link href='/payment' className="py-2 px-4 block w-full bg-black hover:bg-white hover:text-black border-2 border-black text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
                  เลือกแผนนี้
                </Link>
              </div>
              {/* card4 */}
              <div className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
                <p className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">
                  Premium
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  ฿7000
                  <span className="text-sm text-gray-300">
                    / เดือน
                  </span>
                </p>
                <p className="mt-4 text-xs text-gray-600 dark:text-gray-100">
                  Best for large scale uses and extended redistribution rights.
                </p>
                <ul className="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
                  <li className="mb-3 flex items-center gap-2 ">
                    <FaCheckCircle />
                    5,000 ลิงค์/เดือน
                  </li>
                  <li className="mb-3 flex items-center gap-2 ">
                    <FaCheckCircle />
                    100 QR Codes/เดือน
                  </li>
                  <li className="mb-3 flex items-center gap-2 ">
                    <FaCheckCircle />
                    Unlimited Templates
                  </li>
                </ul>
                <Link href='/payment' className="py-2 px-4 block w-full bg-black hover:bg-white hover:text-black border-2 border-black text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
                  เลือกแผนนี้
                </Link>
              </div>
            </div>
            <Link href='/payment' className="mt-8 py-2 px-4 block w-full bg-black hover:bg-white hover:text-black border-2 border-black text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
              จัดการแผนเอง
            </Link>
          </div>

        </div>
      </div>
    </RootLayoutAccount >
  )
}

export default UpgradePage;