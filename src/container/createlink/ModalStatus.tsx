import React, { useEffect, useRef, useState } from 'react';
import { FaRedo, FaTimes } from 'react-icons/fa';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    dataState: {
        title: string;
        destination: string;
        linkBuild: string;
    };
    statusCheck: string;
}

const ModalStatus: React.FC<ModalProps> = ({ isOpen, onClose, dataState, statusCheck }) => {
    // State to manage the opacity transition
    const [opacity, setOpacity] = useState(0);
    const modalRef = React.useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null); // Specify the ref type

    const handleCopy = (): void => { // Specify the function return type
        const input = inputRef.current;
        if (input) { // Check if input is not null
            input.select();
            document.execCommand('copy');
        }
    };

    const handleClose = () => {
        setOpacity(0);
        setTimeout(() => {
            onClose();
        }, 300); // Delay close to match transition duration
    };

    useEffect(() => {
        if (isOpen) {
            setOpacity(100);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalRef]);

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300" style={{ opacity: `${opacity}%` }}>
            <div ref={modalRef} className={`relative p-8 border-2 bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow-lg transition-all duration-300 transform ${statusCheck === 'success' ? 'border-green-500' : statusCheck === 'loading' ? 'border-yellow-500' : 'border-red-500'}`} style={{ scale: isOpen ? 100 : 95 }}>
                <div>
                    <h2 className="text-2xl text-center font-semibold">สร้างลิงค์ {dataState?.title} {statusCheck === 'success' ? 'สำเร็จ' : statusCheck === 'loading' ? 'รอสักครู่' : 'ล้มเหลว'}</h2>
                    <div className="flex items-center space-x-2 py-4 justify-center">
                        {statusCheck === 'loading' && (
                            <FaRedo className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-500" />
                        )}
                        {statusCheck === 'error' && (
                            <FaTimes className="w-8 h-8 dark:text-gray-600 fill-red-500" />
                        )}
                        {statusCheck === 'success' && (
                            <>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={dataState?.linkBuild}
                                    className="flex-1 p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    readOnly
                                />
                                <button
                                    onClick={handleCopy}
                                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md shadow-sm transition-colors duration-200 ease-in-out"
                                >
                                    Copy
                                </button>
                            </>
                        )}
                    </div>

                </div>
                <div className="flex justify-center mt-4">
                    <button onClick={handleClose} className={`px-4 py-2 bg-white border-2 ${statusCheck === 'success' ? 'border-green-500 hover:bg-green-500 text-green-500' : statusCheck === 'loading' ? 'border-yellow-500 hover:bg-yellow-500 text-yellow-500' : 'border-red-500 hover:bg-red-500 text-red-500'} hover:text-white rounded  focus:outline-none`}>
                        Close
                    </button>
                </div>
            </div>
        </div >
    );
};

export default ModalStatus;