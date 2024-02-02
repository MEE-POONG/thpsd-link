import Link from 'next/link';
import React from 'react';


const TitleHead: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="space-y-4">
        <div className="w-96 bg-white shadow rounded">
          w-96
        </div>
        <div className="w-80 bg-white shadow rounded">
          w-80
        </div>
        <div className="w-72 bg-white shadow rounded">
          w-72
        </div>
        <div className="w-64 bg-white shadow rounded">
          w-64
        </div>
        <div className="w-60 bg-white shadow rounded">
          w-60
        </div>
        <div className="w-56 bg-white shadow rounded">
          w-56
        </div>
        <div className="w-52 bg-white shadow rounded">
          w-52
        </div>
        <div className="w-48 bg-white shadow rounded">
          w-48
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
        <div>09</div>
      </div>
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Building digital
            <br />products & brands.</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">This free and open-source landing page template was built using the utility classes from
            <Link href="https://tailwindcss.com" className="hover:underline">Tailwind CSS
            </Link> and based on the components from the
            <Link href="https://flowbite.com/docs/getting-started/introduction/" className="hover:underline">Flowbite Library
            </Link> and the
            <Link href="https://flowbite.com/blocks/" className="hover:underline">Blocks System
            </Link>.
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <Link href="./" className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              สมัครสมาชิก

            </Link>
            <Link href="./login" className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              เข้าสู่ระบบ

            </Link>
          </div>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex hidden">
          <img className='w-full ' src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/7511fb7d-e4d0-4cfb-ac7a-d76528b5f800/250" alt="hero image" />
        </div>
      </div>
    </section>

  )
}

export default TitleHead;