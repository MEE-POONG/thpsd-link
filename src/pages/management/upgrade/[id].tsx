import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import RootLayoutAccount from '@/components/RootLayoutAcc';
import { PackageData } from '@prisma/client';
import axios from 'axios';
import Link from 'next/link';
import { FaArrowLeft } from "react-icons/fa";

const SelectPackagePage: React.FC = (props) => {
  const [packageData, setPackageData] = useState<PackageData | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (typeof id === 'string') { // id is expected to be a string
      axios.get<PackageData>(`/api/package/${id}`)
        .then(response => {
          setPackageData(response.data);
        })
        .catch(error => {
          console.error('Error fetching package data:', error);
          // Handle error
        });
    }
  }, [id]);

  if (!packageData) {
    return <div>Loading...</div>; // or some loading spinner
  }


  if (!packageData) {
    return (
      <RootLayoutAccount>
        <div className="upgrade container px-6 mx-auto mt-6 grid">
          <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Package not found.
            </h2>
          </div>
        </div>
      </RootLayoutAccount>
    );
  }

  return (
    <RootLayoutAccount>
      <div className="upgrade container px-6 mx-auto mt-6 grid">
        <Link href='/management/upgrade' className='flex items-center text-sm gap-2 mb-5'><FaArrowLeft />Back</Link>
        <div className="min-w-0 p-5 bg-white rounded-lg shadow-xs border">
          <div className="max-w-screen-xl mx-auto flex">
            <div className='w-7/12 mx-2 p-2'>
              <div className="max-w-screen-md mx-auto mb-8 lg:mb-12">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  เลือกแพ็คเกจ  {packageData?.name}
                </h2>
                <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">

                </p>
              </div>
              <ul className="list-disc">
              </ul>
            </div>
            <div className='w-5/12 mx-2 p-2'>
              <div className="max-w-screen-md mx-auto mb-8 lg:mb-12">
                <p>สรุปรายการแพ็คเกจ</p>
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  {packageData?.name}
                </h2>
                {/* ราคา */}
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-semibold text-slate-900">
                    {packageData?.name}
                  </h1>
                  <div className="text-lg font-semibold text-slate-500">
                    ${packageData?.price}
                  </div>
                </div>
                {/* ส่วนลด */}
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-semibold text-slate-900">
                    ส่วนลด
                  </h1>
                  <div className="text-lg font-semibold text-slate-500">
                    -{'$110.00'}
                  </div>
                </div>
                <hr className='border-1	border-slate-500' />
                {/* รวม */}
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-semibold text-slate-900">
                    รวม
                  </h1>
                  <div className="text-lg font-semibold text-slate-500">
                    $0.00
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">ข้าพเจ้ายอมรับ
                  <Link href="/requirements/terms" className="underline hover:underline" target="_blank" >
                    ข้อกำหนดการใช้บริการ
                  </Link>
                </label>
              </div>
              <div className='mt-10'>
                <button
                  className='w-full bg-purple-700 p-3 text-white'>
                  <Link href={`/payment`}>ยืนยัน</Link>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </RootLayoutAccount >
  )
}

export default SelectPackagePage;