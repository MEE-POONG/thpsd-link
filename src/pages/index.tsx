import React from 'react';
import RootLayout from '@/components/Layout';
import Tips from '@/components/Other/Tip';


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
      <div className='container mx-auto p-5 md:p-24 drop-shadow-xl'>
        <h1 className='mt-10 mb-12 font-bold text-3xl'>Create Your ShortURL</h1>
        {/* <div className="input-container">
          <input type="text" placeholder="Enter link here" />
          <button className="button">Create</button>
        </div> */}

        <div className='md:flex justify-center gap-5 drop-shadow-2xl'>
          <input type="url" className='p-3 border rounded w-full md:w-5/6' placeholder='Enter link here' />
          <button className='bg-black font-bold p-2 rounded text-white w-full md:w-1/6 mt-3 md:mt-0 hover:scale-105 hover:drop-shadow-xl'>Create URL</button>
        </div>

        {/* Tips */}
        <Tips />
      </div>

    </RootLayout>
  )
}

export default HomePage;