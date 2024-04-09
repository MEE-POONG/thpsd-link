import RootLayout from "@/components/RootLayout";
import TrialShow from "@/container/All/TrialShow";
import { PriceData } from "@/data/default";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PricingPage: React.FC = () => {
    return (
        <RootLayout>
            <section className="pricing-page">
                <div className="max-w-screen-xl px-4 py-24 mx-auto lg:py-36 lg:px-6">
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
                        {PriceData.map((item) => (
                            <div key={item?.id} className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
                                <p className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">
                                    {item?.title}
                                </p>
                                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                                    ฿{item?.price}
                                    <span className="text-sm text-gray-300">
                                        / เดือน
                                    </span>
                                </p>
                                <p className="mt-4 text-xs text-gray-600 dark:text-gray-100">
                                    {item?.subtitle}
                                </p>
                                <ul className="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
                                    <li className="mb-3 flex items-center gap-2 ">
                                        <FaCheckCircle />
                                        {item?.addOn?.linkMax} ลิงค์/เดือน
                                    </li>
                                    <li className="mb-3 flex items-center gap-2 ">
                                        <FaCheckCircle />
                                        {item?.addOn?.qr} QR Code/เดือน
                                    </li>
                                    {item?.addOn?.backoffice ?
                                        <li className="mb-3 flex items-center gap-2 ">
                                            <FaCheckCircle />
                                            ระบบจัดการ
                                        </li>
                                        : ''}
                                </ul>
                                <Link href={`/upgrade/${item?.id}`} className="py-2 px-4 block w-full bg-black hover:bg-white hover:text-black border-2 border-black text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
                                    เลือกแผนนี้
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <TrialShow />
        </RootLayout >
    )
}
export default PricingPage