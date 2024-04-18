import RootLayoutAccount from "@/components/RootLayoutAcc";
import PaymentDetailsModal from "@/container/PaymentHistory/PaymentDetailsModal";
import { useState } from "react";
import { BiReceipt } from "react-icons/bi";

const PaymentHistory: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleViewDetails = () => {
        setModalContent('Details about Package-A, amount $20, paid on 13 Mar, 2024.');
        setShowModal(true);
    };
    return (
        <RootLayoutAccount>
            <div className="container mx-auto mt-6 min-w-0 p-4 bg-white rounded-lg shadow-sm">
                <h2 className="font-semibold text-gray-700 lg:text-xl">
                    ประวัติการชำระค่าบริการ
                </h2>
                <div className="block w-full overflow-x-auto mt-6">
                    <table className="items-center bg-transparent w-full border-collapse ">
                        <thead>
                            <tr>
                                <th className="px-6 bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs  lg:text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Package name
                                </th>
                                <th className="px-6 bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs lg:text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Amount
                                </th>
                                <th className="px-6 bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs lg:text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    date requested
                                </th>
                                <th className="px-6 bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs lg:text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Date Paid
                                </th>
                                <th className="px-6 bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs lg:text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Payment Status
                                </th>
                                <th className="px-6 bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs lg:text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Receip
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs lg:text-sm whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                    Package-A
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs lg:text-sm whitespace-nowrap p-4 ">
                                    $20
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs lg:text-sm whitespace-nowrap p-4 ">
                                    May 15, 2024
                                </td>
                                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs lg:text-sm whitespace-nowrap p-4">
                                    13 Mar, 2024
                                </td>
                                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs lg:text-sm whitespace-nowrap p-4 text-gray-600 italic">
                                    Paid
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs lg:text-sm whitespace-nowrap p-4">
                                    <button className="text-green-500 hover:underline flex items-center"
                                        onClick={handleViewDetails}
                                    >
                                        view <BiReceipt />
                                    </button>
                                </td>
                            </tr>

                        </tbody>

                    </table>
                </div>
            </div>
            <PaymentDetailsModal show={showModal} onClose={() => setShowModal(false)} content={modalContent} />
        </RootLayoutAccount>
    )
}
export default PaymentHistory;