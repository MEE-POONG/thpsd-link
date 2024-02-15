import React from 'react';
import RootLayout from '@/components/RootLayout';
import TitleHead from '@/container/Index/TitleHead';
import ShortenLink from '@/container/All/ShortenLink';
import Tips from '@/container/All/Tip';
import Questions from '@/container/Index/Questions';
import TrialShow from '@/container/All/TrialShow';


const IndexPage: React.FC = () => {
  return (
    <RootLayout>
      <TitleHead />
      <ShortenLink />
      <TrialShow />
      <Tips />
      <Questions />
    </RootLayout >
  )
}

export default IndexPage;