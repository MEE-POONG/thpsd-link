import React from 'react';
import RootLayout from '@/components/Layout';


const HomePage: React.FC = () => {
  return (

    <RootLayout>

      <div className="grid-container">
        <div className="inner-content grid-x grid-margin-x grid-padding-x">
          <div className="cell large-12 centered">
            <h1 className='text-center'>Make every
              <span className="color-[#2a5bd7]">connection</span>

              count</h1>
            <h2 className='text-center'>Create short links, QR Codes, and Link-in-bio pages. Share them anywhere.
              <br className="show-for-large" />Track what’s working, and what’s not. All inside the
              <strong>Bitly Connections Platform</strong>.</h2>
          </div>
        </div>
      </div>

    </RootLayout>
  )
}

export default HomePage;