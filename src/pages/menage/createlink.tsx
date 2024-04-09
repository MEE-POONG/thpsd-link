import React, { useEffect, useState } from 'react';
import RootLayoutAccount from '@/components/RootLayoutAcc';
import ModalStatus from '@/container/createlink/ModalStatus';

interface FormState {
  title: string;
  destination: string;
  linkBuild: string;
}

const CreateLinkPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState<FormState>({ title: '', destination: '', linkBuild: '' });
  const [modalStatus, setModalStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleConfirm = () => {
    setFormState(prevState => ({
      ...prevState,
      linkBuild: 'www.sssxx.com'
    }));
    setModalStatus('loading');

    setTimeout(() => {
      setModalStatus('success');
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  useEffect(() => {
    if (modalStatus !== '') {
      setIsModalOpen(true);
    }
  }, [modalStatus]);

  useEffect(() => {
    if (!isModalOpen) {
      setModalStatus('');
    }
  }, [isModalOpen]);


  return (
    <RootLayoutAccount>
      <div className="create-link mx-auto mt-6 max-w-screen-md">
        <div className=" container px-6 grid">
          <div className="space-y-12 mt-3 p-4 bg-white">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Welcome, this is your plathtmlForm.
            </h2>
            <div className="">
              <div className="sm:col-span-4 items-center ">
                <label htmlFor="title" className="block text-md font-medium leading-6 text-gray-900">Title</label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                    <input type="text"
                      onChange={handleChange}
                      value={formState.title}
                      name="title" id="title" autoComplete="title" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-md sm:leading-6" placeholder="หัวข้อ" />
                  </div>
                  <p className="mt-1 text-sm leading-6 text-gray-600">หัวข้อลิงค์นี้</p>
                </div>
              </div>
              <div className="sm:col-span-4 items-center ">
                <label htmlFor="destination" className="block text-md font-medium leading-6 text-gray-900">Destination</label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                    <input
                      type="text"
                      name="destination"
                      id="destination"
                      onChange={handleChange}
                      placeholder="Destination URL"
                      value={formState.destination}
                      autoComplete="destination" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-md sm:leading-6" />
                  </div>
                  <p className="mt-1 text-sm leading-6 text-gray-600">Enter the link you want.</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              {/* <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                onClick={() => setIsModalOpen(true)}
              >
                Open Modal
              </button> */}
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                onClick={handleConfirm}
              >
                ยืนยัน
              </button>
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
              {/* <button type="button" onClick={toggleSuccess} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Save</button> */}
            </div>
          </div>
        </div>
      </div>
      <ModalStatus isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} dataState={formState} statusCheck={modalStatus} />
      {/* <ModalIndex isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
    </RootLayoutAccount >
  )
}

export default CreateLinkPage;