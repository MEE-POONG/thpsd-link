import React, { useEffect, useState } from 'react';
import RootLayoutAccount from '@/components/RootLayoutAcc';

const TableLinkPage: React.FC = () => {

  return (
    <RootLayoutAccount>
      <div className="table-link container px-6 mx-auto mt-6 grid">

        <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            รายการ Get Link
          </h2>
        </div>
      </div>
    </RootLayoutAccount >
  )
}

export default TableLinkPage;