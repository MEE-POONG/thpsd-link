import RootLayout from "@/components/Layout";
import Link from "next/link";
import React from "react";

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
                    <div className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
                        <p className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">
                            Entreprise
                        </p>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">
                            $0
                            <span className="text-sm text-gray-300">
                                / month
                            </span>
                        </p>
                        <p className="mt-4 text-xs text-gray-600 dark:text-gray-100">
                            For most businesses that want to optimize web queries.
                        </p>
                        <ul className="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
                            <li className="mb-3 flex items-center ">
                                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                All illimited components
                            </li>
                            <li className="mb-3 flex items-center ">
                                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                Own custom Tailwind styles
                            </li>
                            <li className="mb-3 flex items-center ">
                                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                Unlimited Templates
                            </li>
                        </ul>
                        <button type="button" className="py-2 px-4 bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
                            Choose plan
                        </button>
                    </div>

                    <div className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
                        <p className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">
                            Entreprise
                        </p>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">
                            $0
                            <span className="text-sm text-gray-300">
                                / month
                            </span>
                        </p>
                        <p className="mt-4 text-xs text-gray-600 dark:text-gray-100">
                            For most businesses that want to optimize web queries.
                        </p>
                        <ul className="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
                            <li className="mb-3 flex items-center ">
                                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                All illimited components
                            </li>
                            <li className="mb-3 flex items-center ">
                                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                Own custom Tailwind styles
                            </li>
                            <li className="mb-3 flex items-center ">
                                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                Unlimited Templates
                            </li>
                        </ul>
                        <button type="button" className="py-2 px-4 bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg">
                            Choose plan
                        </button>
                    </div>
                    <div className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
                        <p className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">
                            Entreprise
                        </p>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">
                            $0
                            <span className="text-sm text-gray-300">
                                / month
                            </span>
                        </p>
                        <p className="mt-4 text-xs text-gray-600 dark:text-gray-100">
                            For most businesses that want to optimize web queries.
                        </p>
                        <ul className="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
                            <li className="mb-3 flex items-center ">
                                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                All illimited components
                            </li>
                            <li className="mb-3 flex items-center ">
                                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                Own custom Tailwind styles
                            </li>
                            <li className="mb-3 flex items-center ">
                                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                Unlimited Templates
                            </li>
                        </ul>
                        <button type="button" className="py-2 px-4 bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg">
                            Choose plan
                        </button>
                    </div>
                    <div className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
                        <p className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">
                            Entreprise
                        </p>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">
                            $0
                            <span className="text-sm text-gray-300">
                                / month
                            </span>
                        </p>
                        <p className="mt-4 text-xs text-gray-600 dark:text-gray-100">
                            For most businesses that want to optimize web queries.
                        </p>
                        <ul className="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
                            <li className="mb-3 flex items-center ">
                                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                All illimited components
                            </li>
                            <li className="mb-3 flex items-center ">
                                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                Own custom Tailwind styles
                            </li>
                            <li className="mb-3 flex items-center ">
                                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
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