import React from 'react';
import RootLayout from '@/components/Layout';
import Tips from '@/container/All/Tip';
import Link from 'next/link';
import Questions from '@/container/Home/Questions';
import TitleHead from '@/container/Home/TitleHead';


const HomePage: React.FC = () => {
  return (
    <RootLayout>
      <TitleHead />
      <Tips />
      <Questions />
    </RootLayout >
  )
}

export default HomePage;