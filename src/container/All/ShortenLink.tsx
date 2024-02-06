import Link from "next/link"
import { FormEvent, useState } from "react";
import { FaCopy } from "react-icons/fa";

type LinkShortenerProps = {
    // define your props here
};


const ShortenLink: React.FC<LinkShortenerProps> = () => {
    const [longUrl, setLongUrl] = useState('');
    const [backHalf, setBackHalf] = useState('');

    // Handle your form submission logic here
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        // Implement your URL shortening logic
        // Use 'longUrl' and 'backHalf' as needed
    };
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                       สร้างลิงค์ URL ของคุณ
                    </h2>
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        ง่าย รวดเร็ว ปลอดภัย ใช้ได้นาน
                    </p>
                </div>
                {/* <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0"> */}
                <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <div className="sm:col-span-4 text-left">
                        <label htmlFor="username" className="block text-lg font-medium leading-6 text-gray-900">
                            Paste a long URL
                        </label>
                        <div className="mt-2">
                            <input type="text" className="w-full border-b p-1.5 text-lg mb-5 focus:outline-none placeholder:italic placeholder:text-md" placeholder="Example: http://super-long-link.com/shorten-it" />
                        </div>
                    </div>
                    <a href="#"
                        className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">
                        Short URLs
                    </a>
                    <div className="mb-8 mt-12">
                        <label htmlFor="domain" className="block text-lg font-medium text-gray-700">Domain</label>
                        <div className="mt-1 flex rounded-md shadow-sm text-lg">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 ">thpsd.com</span>
                            <input
                                type="text"
                                id="domain"
                                className="flex-1 block border-2 w-full text-lg rounded-none border-gray-300 focus:border-gray-300 focus:outline-none hover:border-gray-300 bg-gray-50 text-gray-500 placeholder:text-sm p-1"
                                placeholder="Enter a back-half (optional)"
                                value={backHalf}
                                onChange={(e) => setBackHalf(e.target.value)}
                            />
                            <span className="inline-flex items-center px-3 rounded-r-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 ">
                                <FaCopy />
                            </span>

                            {/* ทำปุ่มคัดลอกให้ด้วย */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                    <div className="max-w-screen-sm mx-auto text-center">
                        <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                            Start your free trial today
                        </h2>
                        <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                            Try Landwind Platform for 30
                            days. No credit card required.
                        </p>
                        <a href="#"
                            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
                            Free
                            trial for 30 days
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default ShortenLink