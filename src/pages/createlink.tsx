import React from 'react';
import RootLayoutAccount from '@/components/RootLayoutAcc';
import AlertsImportant from '@/container/Home/AlertsImportant';
import SummaryCard from '@/container/Home/SummaryCard';
import TotalUsage from '@/container/Home/TotalUsage';

const CreateLinkPage: React.FC = () => {
  return (
    <RootLayoutAccount>
      <div className="create-link container px-6 mx-auto grid mt-6">
        <div className="space-y-12 mt-3 p-4 bg-white">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Welcome, this is your plathtmlForm.
          </h2>
          <div className="pb-12">
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
              <div className="sm:col-span-4 items-center ">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                    <input type="text" name="username" id="username" autoComplete="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="เช่น เสื้อโปโร" />
                  </div>
                  <p className="mt-1 text-sm leading-6 text-gray-600">หัวข้อลิงค์นี้</p>
                </div>
              </div>
              <div className="sm:col-span-4 items-center ">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Destination</label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                    <input type="text" name="username" id="username" autoComplete="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="https://example.com/my-long-url" />
                  </div>
                  <p className="mt-1 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
          </div>
        </div>
      </div>
    </RootLayoutAccount >
  )
}

export default CreateLinkPage;