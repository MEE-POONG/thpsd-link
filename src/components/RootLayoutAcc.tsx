import React, { useEffect } from 'react';
import type { Metadata } from 'next'
import TheNavbarAcc from './TheNavbarAcc'
import { Kanit } from 'next/font/google'
import TheSlidebar from './TheSlidebar';
import { useUser } from '@/context/UserLogin';
import { useRouter } from 'next/router';
// import TheFooter from './TheFooter';

const kanit = Kanit({
  weight: '400',
  subsets: ['latin'],
})

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const RootLayoutAccount: React.FC<LayoutProps> = ({ children }) => {

  const { user } = useUser() ?? { user: null }; // Handle potential null context
  const router = useRouter();

  useEffect(() => {
    // Check if there is no user and we are not on the login page already
    if (!user && router.pathname !== '/login') {
      router.push('/login');
    }
  }, [user, router]);

  // If there's no user, you can also return null or a placeholder here
  // to avoid rendering the navbar until we redirect
  if (!user) return null;

  return (
    <div className={`${kanit.className} flex h-screen bg-gray-50 dark:bg-gray-900`}
    // style="{'overflow-hidden': isSideMenuOpen }"
    >
      <TheSlidebar />
      {/* <TheTestbar /> */}
      <div className="flex flex-col flex-1 w-full">
        <TheNavbarAcc />
        <main className="h-full overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
export default RootLayoutAccount;