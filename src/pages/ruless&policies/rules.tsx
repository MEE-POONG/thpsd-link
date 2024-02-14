import React from 'react';
import RootLayout from '@/components/RootLayout';
import TitleHead from '@/container/Home/TitleHead';
import ShortenLink from '@/container/All/ShortenLink';
import Tips from '@/container/All/Tip';
import Questions from '@/container/Home/Questions';
import TrialShow from '@/container/All/TrialShow';


const RulesPage: React.FC = () => {
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

export default RulesPage;