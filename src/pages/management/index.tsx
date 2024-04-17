import React, { useEffect } from 'react';
import RootLayoutAccount from '@/components/RootLayoutAcc';
import AlertsImportant from '@/container/Home/AlertsImportant';
import SummaryCard from '@/container/Home/SummaryCard';
import TotalUsage from '@/container/Home/TotalUsage';
import { useUser } from '@/context/UserLogin';

const ManagementPage: React.FC = () => {
  const { user } = useUser() ?? { user: null }; // Handle potential null context

  useEffect(() => {
    if (user) {
      console.log("User Account:", user);
    } else {
      console.log("No user data available.");
    }
  }, [user]);


  return (
    <RootLayoutAccount>
      <div className="home container px-6 mx-auto grid">
        {/* <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          สร้าง Link
        </h2>
        <AlertsImportant />
        <SummaryCard />
        <TotalUsage /> */}
        <SummaryCard />
        {/* แสดงข้อมูลผู้ใช้ที่ได้จาก context */}
        {/* Display user information if available */}
        {user ? (
          <p>User Account: {user.username} - {user.email}</p> // Displaying username and email as example
        ) : (
          <p>No user data available.</p>
        )}
      </div>
    </RootLayoutAccount >
  );
};

export default ManagementPage;
