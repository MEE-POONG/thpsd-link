import React from "react";
import Invoice from "../Invoice";
import InvoicePDFPage from "../Invoicepdf";

interface InvoiceModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const InvoiceModal: React.FC<InvoiceModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed z-20 inset-0">
            <div className="flex items-center justify-center ">
                <div className="fixed inset-0 transition-opacity" onClick={onClose}>
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <div className=" bg-white z-50">
                    {/* <InvoicePDFPage /> */}
                    <Invoice />

                </div>
            </div>
        </div>
    );
};

export default InvoiceModal;
