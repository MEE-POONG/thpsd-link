import React from 'react';
import RootLayoutAccount from '@/components/RootLayoutAcc';
import AlertsImportant from '@/container/Home/AlertsImportant';
import SummaryCard from '@/container/Home/SummaryCard';
import TotalUsage from '@/container/Home/TotalUsage';

const HomePage: React.FC = () => {
  return (
    <RootLayoutAccount>
      <div className="home container px-6 mx-auto grid">
        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          สร้าง Link
        </h2>
        <AlertsImportant />
        <SummaryCard />
        <TotalUsage />
        <SummaryCard />
      </div>
    </RootLayoutAccount >
  )
}

export default HomePage;