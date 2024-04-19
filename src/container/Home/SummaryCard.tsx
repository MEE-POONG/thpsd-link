import Link from "next/link";
import React from "react";

const SummaryCard: React.FC = () => {
    return (
        <div className="home my-6 ">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Welcome, this is your platform.
            </h2>
            <div className="grid gap-6 mb-8 md:grid-cols-2 my-6">
                <div>
                    <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                        Getting started with Bitly
                    </h2>
                    <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                        <Link href={`/management/createlink`} className="p-1 mr-3 rounded border-2 border-purple-500 text-purple-500 hover:bg-purple-200">
                            Create a link
                        </Link>
                        สร้างลิงค์ใหม่
                    </div>
                </div>
                <div>
                    <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                        How to use
                    </h2>
                    <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">

                    </div>
                </div>
            </div>
        </div>

    )
}
export default SummaryCard;
