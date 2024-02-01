import React from 'react';
import RootLayout from '@/components/RootLayout';
import TitleHead from '@/container/Home/TitleHead';
import ShortenLink from '@/container/All/ShortenLink';
import Tips from '@/container/All/Tip';
import Questions from '@/container/Home/Questions';


const HomePage: React.FC = () => {
  return (
    <RootLayout>
      <TitleHead />
      <ShortenLink />
      <Tips />
      <Questions />
    </RootLayout >
  )
}

export default HomePage;