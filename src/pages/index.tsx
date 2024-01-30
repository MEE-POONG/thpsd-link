import RootLayout from '@/components/Layout';
import Tips from '@/components/Other/Tip';

export default function Home() {
  return (
    <RootLayout>
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
        <Tips/>

      </div>
    </RootLayout>
  );
}
