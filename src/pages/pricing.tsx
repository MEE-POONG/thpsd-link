import RootLayout from "@/components/RootLayout";
import TrialShow from "@/container/All/TrialShow";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PricingPage: React.FC = () => {
    return (
        <RootLayout>
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
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
                    <div className="flex items-center justify-center max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                        <img width="35" height="35" src="https://img.icons8.com/office/30/price-tag.png" alt="price-tag" />
                        <h1 className="font-bold text-3xl">Pricing Rates </h1>
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
                            <button type="button" className="py-2 px-4 bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
                                <Link href='./payment'>  เลือกแผนนี้</Link>
                            </button>
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
                            <button type="button" className="py-2 px-4 bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg">
                                <Link href=''>เลือกแผนนี้</Link>
                            </button>
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
                            <button type="button" className="py-2 px-4 bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg">
                                <Link href=''>เลือกแผนนี้</Link>
                            </button>
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
                            <button type="button" className="py-2 px-4 bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg">
                                <Link href=''>เลือกแผนนี้</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <TrialShow />
        </RootLayout >
    )
}
export default PricingPage