import React, { useEffect, useRef, useState } from 'react';

interface ModalProps {
    status: 'loading' | 'success' | 'error' | '';
    title: string;
    link: string;
    onClose: () => void;
}
const ModalStatus: React.FC<ModalProps> = ({ status, title, link, onClose }) => {
    // State to manage the opacity transition
    const [opacity, setOpacity] = useState(0);
    const modalRef = React.useRef<HTMLDivElement>(null);
    let content;
    switch (status) {
        case 'loading':
            content = <p>Loading...</p>;
            break;
        case 'success':
            content = (
                <>
                    <p>Creation Successful!</p>
                    <div>
                        <input value="aaa" readOnly />
                        <button onClick={() => navigator.clipboard.writeText("aaa")}>Copy</button>
                    </div>
                </>
            );
            break;
        case 'error':
            content = <p>Error occurred.</p>;
            break;
        default:
            content = null;
    }
    // Handle closing with transition
    const handleClose = () => {
        setOpacity(0);
        setTimeout(() => {
            onClose();
        }, 300); // Delay close to match transition duration
    };
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

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300" style={{ opacity: `${opacity}%` }}>
            <div ref={modalRef} className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow-lg transition-all duration-300 transform" style={{ scale: true ? 100 : 95 }}>
                <div>
                    <h2 className="text-2xl font-semibold">สร้างลิงค์ { }</h2>
                    <p className="mt-4">This is a simple modal. You can place any content here, such as text, images, or forms.</p>
                </div>
                <div className="flex justify-end mt-4">
                    <button onClick={handleClose} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalStatus;