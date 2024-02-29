import React from 'react';
import { useRouter } from 'next/router';
import RootLayoutAccount from '@/components/RootLayoutAcc';
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';
import { PriceData } from '@/data/default';

const SelectPackagePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Extract the id from the URL

  // Find the matching package data by id
  const packageData = PriceData.find((pkg) => pkg.id === id);
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
        <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
          <div className="max-w-screen-xl mx-auto flex">
            <div className='w-7/12 bg-yellow-500 mx-2 p-2'>
              <div className="max-w-screen-md mx-auto mb-8 lg:mb-12">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  เลิอกแพ็คเกจ {packageData?.title}
                </h2>
                <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                  Here at Landwind we focus on
                  markets where technology, innovation, and capital can unlock long-term value and drive economic
                  growth.
                </p>
              </div>
            </div>
            <div className='w-5/12 bg-yellow-500 mx-2 p-2'>
              <div className="max-w-screen-md mx-auto mb-8 lg:mb-12">
                <p>สรุปรายการแพ็คเกจ</p>
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  แพ็คเกจ {packageData?.title}
                </h2>
                {/* ราคา */}
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-semibold text-slate-900">
                    Package {packageData?.title}
                  </h1>
                  <div className="text-lg font-semibold text-slate-500">
                    $110.00
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
                <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ข้าพเจ้ายอมรับ
                  <Link href="/requirements/terms" className=" hover:underline">
                    ข้อกำหนดการใช้บริการ
                  </Link>
                </label>
              </div>
              <div>
                <button className='w-full bg-purple-700 p-4 text-white'>
                  ยืนยันการสั่งซื้อ
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