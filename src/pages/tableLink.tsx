import React, { useEffect, useState } from 'react';
import RootLayoutAccount from '@/components/RootLayoutAcc';
import { TableLinkData } from '@/data/default';
import { FaAngleDown, FaCopy, FaSearch, FaTimes } from 'react-icons/fa';

const TableLinkPage: React.FC = () => {

  const handleCopyLink = async (link: any) => {
    try {
      await navigator.clipboard.writeText(link);
      alert('Success to copy!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  return (
    <RootLayoutAccount>
      <div className="table-link container px-6 mx-auto mt-6 grid">

        <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">

          <div className="flex justify-between  flex-1">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
              รายการ Get Link
            </h2>
            <div className="relative w-full max-w-xl focus-within:text-purple-500">
              <div className="absolute inset-y-0 flex items-center pl-2">
                <FaSearch />
              </div>
              <input
                className="w-full pl-8 pr-2 py-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-gray-100 focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                type="text" placeholder="Search for projects" aria-label="Search" />
            </div>
          </div>
          <div className='my-4'>
            <table className="w-full border-separate border-spacing-1 border rounded-md border-slate-500 ">
              <thead>
                <tr>
                  <th className='w-8 border rounded-md border-slate-600'>No.</th>
                  <th className='border rounded-md border-slate-600'>Title</th>
                  <th className='border rounded-md border-slate-600'>Prototype</th>
                  <th className='border rounded-md border-slate-600'>Link Build</th>
                  <th className='w-20 border rounded-md border-slate-600'>Count Use</th>
                  <th className='w-8 border rounded-md border-slate-600'></th>
                </tr>
              </thead>
              <tbody>
                {TableLinkData?.map((item, index) => (
                  <tr key={index} className='text-center border rounded-md border-slate-700'>
                    <td className='text-right border rounded-md border-slate-700 px-1'>{index + 1}</td>
                    <td className='border rounded-md border-slate-700'>{item?.title}</td>
                    <td className='border rounded-md border-slate-700'>{item?.destination}</td>
                    <td className='flex border rounded-md border-slate-700 justify-center items-center'>
                      {item?.linkBuild}
                      <button
                        onClick={() => handleCopyLink(item?.linkBuild)}
                        className='ml-2 text-green-500 hover:text-green-800'
                      >
                        <FaCopy />
                      </button>
                    </td>
                    <td className='border rounded-md border-slate-700'>{item?.count}</td>
                    <td className='w-8 border rounded-md border-slate-700'>
                      <button className='flex justify-center w-full h-full text-red-500 hover:text-red-800'>
                        <FaTimes className='' />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between">

            <nav aria-label="Page navigation example">
              <ul className="inline-flex items-center -space-x-px">
                <li>
                  <a href="#" className="block py-2 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    <span className="sr-only">Previous</span>
                    &lsaquo;
                  </a>
                </li>
                <li>
                  <a href="#" aria-current="page" className="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100">1</a>
                </li>
                <li>
                  <a href="#" className="py-2 px-3 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                </li>
                <li>
                  <a href="#" className="py-2 px-3 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">3</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    <span className="sr-only">Next</span>
                    &rsaquo;
                  </a>
                </li>
              </ul>
            </nav>
            <div className="relative inline-block w-24 text-gray-700">
              <select
                className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
                aria-placeholder='Regular input'
              >
                <option>10</option>
                <option>50</option>
                <option>100</option>
                <option>500</option>
                <option>1000</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <FaAngleDown className='text-black-500' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayoutAccount >
  )
}

export default TableLinkPage;