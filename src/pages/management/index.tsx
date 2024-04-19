import React, { useEffect, useState } from 'react';
import RootLayoutAccount from '@/components/RootLayoutAcc';
import AlertsImportant from '@/container/Home/AlertsImportant';
import SummaryCard from '@/container/Home/SummaryCard';
import TotalUsage from '@/container/Home/TotalUsage';
import { useUser } from '@/context/UserContext';
import useAxios from 'axios-hooks';
import Swal from 'sweetalert2';

const ManagementPage: React.FC = () => {
  const { user } = useUser() ?? { user: null }; // Handle potential null context
  const [origUrl, setOrigUrl] = useState('');
  const [{ data, loading, error }, executePost] = useAxios(
    {
      url: '/api/links',
      method: 'POST'
    },
    { manual: true } // This option is necessary to trigger the request manually
  );
  const [shortUrl, setShortUrl] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      console.log("User Account:", user);
    } else {
      console.log("No user data available.");
    }
  }, [user]);
  // const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!origUrl) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please enter a URL before submitting!',
      });
      return;
    }

    executePost({
      data: { origUrl }
    }).then(response => {
      setOrigUrl(''); // Clear the input after success
    }).catch(error => {
      console.error('Error creating short link:', error);
    });
  };
  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to create short link!',
      });
    }
  }, [error]);

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
      </div>
    </RootLayoutAccount >
  );
};

export default ManagementPage;
