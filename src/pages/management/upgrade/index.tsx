import React, { useEffect, useState } from 'react';
import RootLayoutAccount from '@/components/RootLayoutAcc';
import { PriceData, TableLinkData } from '@/data/default';
import { FaAngleDown, FaCheckCircle, FaCopy, FaSearch, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { PackageData } from '@prisma/client';
import axios from 'axios';


interface PricingData {
  packages: PackageData[];
}
const UpgradePage: React.FC = (props) => {

  const [packagesData, setPackagesData] = useState<PackageData[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchLinkListData = async () => {
      try {
        const response = await axios.get<PackageData[]>('/api/package');
        setPackagesData(response.data);
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching the data.');
      }
    };

    fetchLinkListData();
  }, []);

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
      <div className="upgrade container mx-auto mt-6 grid">
        <div className="min-w-0 p-10 bg-white rounded-lg shadow-xs dark:bg-gray-800">
          <div className="max-w-screen-xl mx-auto">
            <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-purple-700 dark:text-white">
                Designed for
                business teams like yours
              </h2>
              <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Here at Landwind we focus on
                markets where technology, innovation, and capital can unlock long-term value and drive economic
                growth.
              </p>
            </div>


            {/* Card */}
            <div className="flex flex-wrap justify-center gap-5">
              {packagesData.map((packages, index) => (
                <div key={index} className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
                  <p className="mb-4 text-xl font-medium text-purple-700 dark:text-gray-50">
                    {packages?.name}
                  </p>
                  <p className="text-3xl font-bold text-purple-700 dark:text-white">
                    ฿{packages?.price}
                    <span className="text-sm text-gray-300">
                      / เดือน
                    </span>
                  </p>
                  <p className="mt-4 text-xs text-gray-600 dark:text-gray-100">

                  </p>

                  <ul className="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
                    <li className="mb-3 flex items-center gap-2 ">
                      <FaCheckCircle />
                      {packages.setlink} ลิงค์/เดือน
                    </li>
                    <li className="mb-3 flex items-center gap-2 ">
                      <FaCheckCircle />
                      {packages.setQR} QR Code/เดือน
                    </li>
                  </ul>

                  <Link  href={`/management/upgrade/${packages.id}`} passHref
                    className="py-2 px-4 block w-full bg-purple-700 hover:bg-white hover:text-purple-700 border-2 border-purple-700 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
                    ปรับแผน
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RootLayoutAccount >
  )
}

export default UpgradePage;