import React, { useEffect, useState } from 'react';
import RootLayoutAccount from '@/components/RootLayoutAcc';
import { TableLinkData } from '@/data/default';
import { FaAngleDown, FaCopy, FaSearch, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import PageSelect from '@/components/Pagination';


interface LinkListData {
  id: string;
  title: string;
  origUrl: string;
  shortUrl: string;
  pathShortUrl: string;
  clicks: number;
}

const TableLinkPage: React.FC = (props) => {

  const [linkListData, setLinkListData] = useState<LinkListData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); // Example total pages
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const fetchLinkListData = async () => {
      try {
        const response = await axios.get<LinkListData[]>('/api/short');
        setLinkListData(response.data);
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching the data.');
      }
    };

    fetchLinkListData();
  }, []);

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    alert('Link copied!');
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/short/${id}`);
      setLinkListData(prev => prev.filter(link => link.id !== id));
      alert('Link deleted successfully!');
    } catch (err) {
      alert('Failed to delete the link.');
    }
  };
  if (error) return <p>Error: {error}</p>;



  return (
    <RootLayoutAccount>
      <div className="table-link container px-6 mx-auto mt-6 grid">
        <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
          <div className="flex justify-between flex-1">
            <h2 className="font-semibold text-gray-700 dark:text-gray-200 lg:text-xl lx:text-2xl flex items-center">
              Your Linklists.
            </h2>
            <div className="relative w-full lg:w-72 md:w-64 focus-within:text-purple-500">
              <div className="absolute inset-y-0 flex items-center pl-2">
                <FaSearch />
              </div>
              <input
                className="w-full pl-8 pr-2 py-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-gray-100 focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                type="text" placeholder="Search for projects" aria-label="Search" />
            </div>
          </div>
          <div className="items-center justify-center py-4">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              {/* <table className="text-left w-full border border-gray-300">
                <thead className="flex w-full text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-xs overflow-y-scroll scroll-cler">
                  <tr className="flex w-full">
                    <th className="p-2 border border-gray-300 w-12">No.</th>
                    <th className="p-2 border border-gray-300 w-1/6">Title</th>
                    <th className="p-2 border border-gray-300 w-[40%]">Your Link</th>
                    <th className="p-2 border border-gray-300 w-[30%]">Link Build</th>
                    <th className="p-2 border border-gray-300 ">Count Use</th>
                    <th className="p-2 border border-gray-300"></th>
                  </tr>
                </thead>
                <tbody className="bg-grey-light text-center flex flex-col items-center justify-between overflow-y-scroll w-full h-auto md:max-h-[70vh] max-h-[67vh]">
                  {linkListData.map((link, index) => (
                    <tr key={index} className="flex w-full">
                      <td className="p-2 border border-gray-300 w-12 text-right">{index + 1}</td>
                      <td className="p-2 border border-gray-300 w-1/6">{link?.title}</td>
                      <td className="p-2 border border-gray-300 w-[40%]">{link?.origUrl}</td>
                      <td className="p-2 border border-gray-300 w-[30%]">
                        {link?.shortUrl}
                        <button
                          onClick={() => handleCopyLink(link.shortUrl)}
                          className='ml-2 text-green-500 hover:text-green-800'
                        >
                          <FaCopy />
                        </button>
                      </td>
                      <td className="p-2 border border-gray-300 ">
                        <p className="text-md font-medium text-gray-600 dark:text-white">
                          {link?.click}dd
                        </p>
                      </td>
                      <td className="p-2 border border-gray-300 text-center">
                        <button
                          onClick={() => handleDelete(link.id)}
                          className='flex justify-center items-center w-full h-full text-red-500 hover:text-red-800'
                          aria-label="Delete link"
                        >
                          <FaTimes />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table> */}
              <table className='tbody-scroll w-full'>
                <thead className='table w-full table-fixed' style={{ width: `calc( 100% - 1em )` }}>
                  <tr>
                    <th className="p-2 border border-gray-300 w-16">No.</th>
                    <th className="p-2 border border-gray-300 ">Title</th>
                    <th className="p-2 border border-gray-300 ">Your Link</th>
                    <th className="p-2 border border-gray-300 ">Link Build</th>
                    <th className="p-2 border border-gray-300 w-24">Count Use</th>
                    <th className="p-2 border border-gray-300 w-10">
                      -
                    </th>
                  </tr>
                </thead>
                <tbody className='block h-[500px] overflow-y-scroll	'>
                  {linkListData.map((link, index) => (
                    <tr key={index} className='table w-full table-fixed'>
                      <td className="p-2 border border-gray-300 w-16 text-right">{index + 1}</td>
                      <td className="p-2 border border-gray-300 ">{link?.title}</td>
                      <td className="p-2 border border-gray-300 ">{link?.origUrl}</td>
                      <td className="p-2 border border-gray-300 ">
                        {link?.shortUrl}
                        <button
                          onClick={() => handleCopyLink(link.shortUrl)}
                          className='ml-2 text-green-500 hover:text-green-800'
                        >
                          <FaCopy />
                        </button>
                      </td>
                      <td className="p-2 border border-gray-300 w-24">
                        <p className="text-md font-medium text-gray-600 dark:text-white text-center">
                          {link?.clicks}
                        </p>
                      </td>
                      <td className="p-2 border border-gray-300 text-center w-10">
                        <button
                          onClick={() => handleDelete(link.id)}
                          className='flex justify-center items-center w-full h-full text-red-500 hover:text-red-800'
                          aria-label="Delete link"
                        >
                          <FaTimes />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <PageSelect
            page={currentPage}
            totalPages={totalPages}
            onChangePage={setCurrentPage}
            onChangePageSize={setPageSize}
          />
        </div>
      </div>
    </RootLayoutAccount >
  )
}

export default TableLinkPage;