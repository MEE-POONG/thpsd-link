import React from 'react';
import TitleHead from '@/container/Index/TitleHead';
import ShortenLink from '@/container/All/ShortenLink';
import Tips from '@/container/All/Tip';
import Questions from '@/container/Index/Questions';
import TrialShow from '@/container/All/TrialShow';
import RootLayoutAccount from '@/components/RootLayoutAcc';


const IndexPage: React.FC = (props) => {
  return (
    <RootLayoutAccount>
    <div className="requirements container px-6 mx-auto mt-6 grid">
     <div>
     <h2>Policy</h2>
     
     </div>
    </div>
  </RootLayoutAccount >
  )
}

export default IndexPage;