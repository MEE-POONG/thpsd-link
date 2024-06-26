import React, { useEffect } from 'react';
import TheNavbarAcc from './TheNavbarAcc'
import { Kanit } from 'next/font/google'
import TheSlidebar from './TheSlidebar';
import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/router';
// import TheFooter from './TheFooter';
const kanit = Kanit({
  weight: '400',
  subsets: ['latin'],
})

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayoutAccount: React.FC<LayoutProps> = ({ children }) => {
  const { user, isLoading } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!isLoading && !user && router.pathname !== '/login') {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <div>Loading...</div>; // Optionally handle the loading state visually
  }


  // if (!user) {
  //   return null; // or a loading indicator until the redirect kicks in
  // }

  return (
    <div className={`${kanit.className} flex bg-gray-50 dark:bg-gray-900`} >
      <TheSlidebar />
      {/* <TheTestbar /> */}
      <div className="flex flex-col flex-1 w-full h-screen " >
        <TheNavbarAcc />
        {children}
      </div>
    </div >
  )
}
export default RootLayoutAccount;