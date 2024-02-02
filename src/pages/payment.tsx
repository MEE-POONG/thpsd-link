import RootLayout from "@/components/RootLayout";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PricingPage = () => {
    return (
        <RootLayout>
            <div className='container mx-auto p-5 lg:p-24 drop-shadow-xl'>
                <h2 className="">Payment</h2>
                <div className="md:grid grid-cols-10 justify-center gap-6">
                    <div className="col-span-7">
                        <p>แผนที่เลือก</p>
                        <div className="border w-64 shadow-md bg-gray-100 p-5 rounded-lg my-5">
                            <p>แผน 2</p>
                            <p className="text-2xl font-bold"> ฿150/เดือน</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold mb-5">ข้อมูลติดต่อ</p>

                            <p className="text-base mb-3">First name</p>
                            <input type="text" className="w-full text-base py-2 px-3 border-b-2 border-purple-600 rounded-lg hover:outline-none drop-shadow-lg" />

                            <p className="text-base mb-3 mt-6">Last name</p>
                            <input type="text" className="w-full text-base py-2 px-3 border-b-2 border-purple-600 rounded-lg hover:outline-none drop-shadow-lg" />

                            <p className="text-base mb-3 mt-6">Email address</p>
                            <input type="text" className="w-full text-base py-2 px-3 border-b-2 border-purple-600 rounded-lg hover:outline-none drop-shadow-lg" />

                            <p className="text-base mb-3 mt-6">Phone number</p>
                            <input type="text" className="w-full text-base py-2 px-3 border-b-2 border-purple-600 rounded-lg hover:outline-none drop-shadow-lg" />
                        </div>
                    </div>

                    <div className="col-span-3 mt-5 md:mt-0">
                        <div className="bg-blue-100 p-5 rounded-lg w-full">
                            <p>สรุปการซื้อ</p>
                            <p className="text-xl font-bold flex justify-between ">แผนที่ 2  <span>฿150/เดือน</span></p>
                        </div>
                    </div>
                </div>


            </div>
        </RootLayout >
    )
}
export default PricingPage
