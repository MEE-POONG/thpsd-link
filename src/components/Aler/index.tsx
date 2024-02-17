import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface AlertProps {
    message: string;
    type: 'success' | 'error' | 'warning';
}

const AlertIndex: React.FC<AlertProps> = ({ message, type }) => {

    return (
        <div className={`p-4 fixed mt-3 right-3 text-sm flex ${type === "success" ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"} rounded-lg`} role="alert">
            {message}
            <button className='ml-3'>
                <FaTimes />
            </button>
        </div>
    );
};

export default AlertIndex;
