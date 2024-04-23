import React, { useEffect, useState } from 'react';
import RootLayoutAccount from '@/components/RootLayoutAcc';
import { FaCopy, FaSearch, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import PageSelect from '@/components/Pagination';
import useAxios from 'axios-hooks';

interface LinkListData {
  id: string;
  title: string;
  origUrl: string;
  shortUrl: string;
  pathShortUrl: string;
  clicks: number;
}
interface Params {
  page: number;
  pageSize: number;
  search: string;
  group: string;
  totalPages: number;
}

const TableLinkPage: React.FC = () => {
  const [filteredData, setFilteredData] = useState<LinkListData[]>([]);
  const [params, setParams] = useState<Params>({
    page: 1,
    pageSize: 10,
    search: "",
    group: "",
    totalPages: 1
  });
  const [{ data, loading, error }, refetch] = useAxios({
    url: `/api/short/search?page=${params?.page}&pageSize=${params?.pageSize}&search=${params?.search}&group=${params?.group}`,
    method: "GET",
  });

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    alert('Link copied!');
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/short/${id}`);
      // Refetch the list after deletion
      refetch();
    } catch (err) {
      alert('Failed to delete the data.');
    }
  };


  useEffect(() => {
    if (data) {
      setFilteredData(data.dataList || []);
      setParams(prevParams => ({
        ...prevParams,
        totalPages: data?.pagination?.totalPages || 1
      }));
    }
  }, [data]);

  const handleChangePage = (page: number) => {
    setParams((prevParams) => ({
      ...prevParams,
      page: page,
    }));
  };

  const handleChangePageSize = (size: number) => {
    setParams((prevParams) => ({
      ...prevParams,
      page: 1,
      pageSize: size,
    }));
  };

  if (error) return <p>Error: {error.message}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <RootLayoutAccount>
      <div className="table-link container mx-auto mt-6 grid h-full">
        <div className="flex justify-between flex-1">
          <h2 className="font-semibold text-purple-700 dark:text-gray-200 lg:text-xl lx:text-2xl flex items-center">
            Your Linklists
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
            <table className='tbody-scroll w-full'>
              <thead className='table w-full table-fixed' style={{ width: `calc( 100% - 1em )` }}>
                <tr>
                  <th className="p-2 border border-gray-300 w-16">No.</th>
                  <th className="p-2 border border-gray-300 ">Title</th>
                  <th className="p-2 border border-gray-300 ">Your Link</th>
                  <th className="p-2 border border-gray-300 ">Link Build</th>
                  <th className="p-2 border border-gray-300 w-24">Count Use</th>
                  <th className="p-2 border border-gray-300 w-10">-</th>
                </tr>
              </thead>
              <tbody className='block h-[600px] overflow-y-scroll	'>
                {filteredData?.map((list, index) => (
                  <tr key={index} className='table w-full table-fixed'>
                    <td className="p-2 border border-gray-300 w-16 text-right">{index + 1}</td>
                    <td className="p-2 border border-gray-300 truncate overflow-hidden">{list.title}</td>
                    <td className="p-2 border border-gray-300 truncate overflow-hidden">{list.origUrl}</td>
                    <td className="p-2 border border-gray-300 truncate overflow-hidden text-center">
                      {list.shortUrl}
                      <button onClick={() => handleCopyLink(list.shortUrl)} className='ml-4 text-green-500 hover:text-green-800'>
                        <FaCopy />
                      </button>
                    </td>
                    <td className="p-2 border border-gray-300 w-24 text-center">{list.clicks}</td>
                    <td className="p-2 border border-gray-300 text-center w-10">
                      <button onClick={() => handleDelete(list.id)} className='text-red-500 hover:text-red-800'>
                        <FaTimes />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <PageSelect page={params?.page} pageSize={params?.pageSize} totalPages={params?.totalPages} onChangePage={handleChangePage} onChangePageSize={handleChangePageSize} />
      </div>
    </RootLayoutAccount>
  )
}

export default TableLinkPage;
