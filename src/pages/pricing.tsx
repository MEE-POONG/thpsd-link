import RootLayout from "@/components/Layout";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PricingPage = () => {
    return (
        <RootLayout>
            <div className='container mx-auto p-5 lg:p-24 drop-shadow-xl'>
                <div className="flex items-center mt-10 mb-12 ">
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
                            $0
                            <span className="text-sm text-gray-300">
                                / month
                            </span>
                        </p>
                        {/* <p className="mt-4 text-xs text-gray-600 dark:text-gray-100">
                            For individuals who want to increase their search channels.
                        </p> */}
                        <ul className="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
                            <li className="mb-3 flex items-center gap-2 ">
                                <FaCheckCircle />
                                All illimited components
                            </li>
                            <li className="mb-3 flex items-center gap-2 ">
                                <FaCheckCircle />
                                Own custom Tailwind styles
                            </li>
                            <li className="mb-3 flex items-center gap-2 ">
                                <FaCheckCircle />
                                Unlimited Templates
                            </li>
                        </ul>
                        <button type="button" className="py-2 px-4 bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
                            Choose plan
                        </button>
                    </div>
                    {/* card2 */}
                    <div className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
                        <p className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">
                            Core
                        </p>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">
                            $0
                            <span className="text-sm text-gray-300">
                                / month
                            </span>
                        </p>

                        <ul className="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
                            <li className="mb-3 flex items-center gap-2 ">
                                <FaCheckCircle />
                                All illimited components
                            </li>
                            <li className="mb-3 flex items-center gap-2 ">
                                <FaCheckCircle />
                                Own custom Tailwind styles
                            </li>
                            <li className="mb-3 flex items-center gap-2 ">
                                <FaCheckCircle />
                                Unlimited Templates
                            </li>
                        </ul>
                        <button type="button" className="py-2 px-4 bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg">
                            Choose plan
                        </button>
                    </div>
                    {/* card3 */}
                    <div className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
                        <p className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">
                            Growth
                        </p>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">
                            $0
                            <span className="text-sm text-gray-300">
                                / month
                            </span>
                        </p>

                        <ul className="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
                            <li className="mb-3 flex items-center gap-2 ">
                                <FaCheckCircle />
                                All illimited components
                            </li>
                            <li className="mb-3 flex items-center gap-2 ">
                                <FaCheckCircle />
                                Own custom Tailwind styles
                            </li>
                            <li className="mb-3 flex items-center gap-2 ">
                                <FaCheckCircle />
                                Unlimited Templates
                            </li>
                        </ul>
                        <button type="button" className="py-2 px-4 bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg">
                            Choose plan
                        </button>
                    </div>
                    {/* card4 */}
                    <div className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
                        <p className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">
                            Premium
                        </p>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">
                            $0
                            <span className="text-sm text-gray-300">
                                / month
                            </span>
                        </p>

                        <ul className="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
                            <li className="mb-3 flex items-center gap-2 ">
                                <FaCheckCircle />
                                All illimited components
                            </li>
                            <li className="mb-3 flex items-center gap-2 ">
                                <FaCheckCircle />
                                Own custom Tailwind styles
                            </li>
                            <li className="mb-3 flex items-center gap-2 ">
                                <FaCheckCircle />
                                Unlimited Templates
                            </li>
                        </ul>
                        <button type="button" className="py-2 px-4 bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg">
                            Choose plan
                        </button>
                    </div>
                </div>




            </div>
        </RootLayout>
    )
}
export default PricingPage