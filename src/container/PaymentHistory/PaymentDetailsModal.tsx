import React from 'react';

interface PaymentDetailsModalProps {
    show: boolean;
    onClose: () => void;
    content: string;
}

const PaymentDetailsModal: React.FC<PaymentDetailsModalProps> = ({ show, onClose, content }) => {
    if (!show) return null;

    return (
        <div className="fixed z-20 inset-0 px-5">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 transition-opacity" onClick={onClose}>
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="bg-white rounded overflow-hidden shadow-xl transform transition-all md:max-w-6xl w-full h-full pb-5">
                    {/* Modal content here */}
                    <div className=" p-4 flex justify-between bg-gray-200">
                        <h3 className="text-lg font-semibold">รายละเอียดการชำระเงิน</h3>
                        <button className="text-gray-600 hover:text-purple-600" onClick={onClose}>
                            Close
                        </button>
                    </div>
                    <div className='mt-5'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentDetailsModal;
