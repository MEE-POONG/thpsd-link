import React from 'react';

interface PaymentDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentDetailsModal: React.FC<PaymentDetailsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-20 inset-0 px-5">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-2xl w-full">
          {/* Modal content here */}
          <div className="p-4">
            <h3 className="text-lg font-semibold">รายละเอียดการชำระเงิน</h3>
            <p>รายละเอียดโปรที่ลูกค้าเลือก</p>
          </div>
          <div className="bg-gray-100 p-4 flex justify-end">

            <button className="text-gray-600 hover:text-purple-600" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailsModal;
