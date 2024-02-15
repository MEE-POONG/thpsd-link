import React from "react";
import Link from "next/link"
import { FaStar } from "react-icons/fa";

const AlertsImportant: React.FC = () => {
    return (
        <a className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
            href="https://github.com/estevanmaito/windmill-dashboard">
            <div className="flex items-center">
                <FaStar className="w-5 h-5 mr-2" />
                <span>Star this project on GitHub</span>
            </div>
            <span>View more &RightArrow;</span>
        </a>
    )
}
export default AlertsImportant;
