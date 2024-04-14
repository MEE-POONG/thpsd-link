import React from 'react';

interface ModalAPIProps {
    isOpen: boolean;
    status: 'processing' | 'success' | 'error';
    message: string;
    onClose: () => void;
}

const ModalAPI: React.FC<ModalAPIProps> = ({ isOpen, status, message, onClose }) => {
    const handleModalClose = () => {
        onClose(); // Propagate the close event to parent component
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
            <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow-lg">
                <div>
                    <h2 className="text-2xl font-semibold capitalize ">{status}</h2>
                    <p className="mt-4">{message}</p>
                </div>
                <div className="flex justify-end mt-4">
                    <button onClick={handleModalClose} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalAPI;
