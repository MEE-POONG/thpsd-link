import React, { useState } from "react";
import RootLayoutAccount from "@/components/RootLayoutAcc";
import Link from "next/link";
import PaymentDetailsModal from "@/components/Modal/PaymentDetailsModal";
import InvoiceModal from "@/components/Modal/InvoiceModal";


const PaymentPage: React.FC = () => {

    const [isPaymentDetailsModalOpen, setIsPaymentDetailsModalOpen] = useState(false);
    const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);

    const handleViewDetails = () => {
        setIsPaymentDetailsModalOpen(true);
    };

    const handleOpenInvoice = () => {
        setIsInvoiceModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsPaymentDetailsModalOpen(false);
        setIsInvoiceModalOpen(false);
    };

    return (
        <RootLayoutAccount>
            <div className="container mx-auto my-10 p-5 text-sm">
                <h2 className="text-2xl font-semibold ">ประวัติการชำระเงิน</h2>
                <p className="text-gray-400 text-base mt-1">ดูประวัติการชำระเงินทั้งหมดได้ที่นี่</p>
                <hr />
                <div className="overflow-x-auto drop-shadow-xl mt-8">
                    <table className="w-full my-0 bg-white rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-purple-500 text-gray-50">
                                <th className="py-3 px-4 text-left">วันที่ชำระ</th>
                                <th className="py-3 px-4 text-left">รายละเอียด</th>
                                <th className="py-3 px-4 text-left">เดือนที่ใช้</th>
                                <th className="py-3 px-4 text-left">จำนวนเงิน <span className="text-xs ">(รวมภาษี)</span></th>
                                <th className="py-3 px-4 text-left">รายละเอียดการชำระเงิน</th>
                                <th className="py-3 px-4 text-left">Status</th>
                                <th className="py-3 px-4 text-left">ข้อมูลใบกำกับภาษี</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-blue-gray-200 hover:bg-purple-50">
                                <td className="py-3 px-4">12/02/2567</td>
                                <td className="py-3 px-4">พรีเมียม</td>
                                <td className="py-3 px-4">12/02/2567 - 11/03/2567</td>
                                <td className="py-3 px-4">฿ 600.08</td>
                                <td className="py-3 px-4 text-purple-500">
                                    <button className="text-purple-500 underline" onClick={handleViewDetails}>View</button>
                                </td>
                                <td className="py-3 px-4 text-green-500">success</td>
                                <td className="py-3 px-4 text-purple-500">
                                    <button onClick={handleOpenInvoice}>Open Invoice</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <PaymentDetailsModal isOpen={isPaymentDetailsModalOpen} onClose={handleCloseModal} />
            <InvoiceModal isOpen={isInvoiceModalOpen} onClose={handleCloseModal} />
        </RootLayoutAccount>
    )
}
export default PaymentPage;