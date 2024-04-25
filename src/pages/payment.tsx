import RootLayout from "@/components/RootLayout";
import { useEffect, useState } from "react";
import QRCodeDisplay from "@/components/Payment/QRCodeDisplay";
import { useRouter } from "next/router";
import { PackageData } from "@prisma/client";
import axios from "axios";
import Link from "next/link";

const ModalSuccess: React.FC<{ onCancel: () => void; onConfirm: () => void }> = ({ onCancel, onConfirm }) => {
    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
            <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
                <p>ยืนยันการชำระเงิน</p>
                <div className="flex justify-end gap-4">
                    <button onClick={onCancel} className="bg-gray-200 text-black p-2 rounded">
                        Cancel
                    </button>
                    <button onClick={onConfirm} className="bg-green-500 text-white p-2 rounded">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};


const Payment: React.FC = (props) => {

    const [selectedPackage, setSelectedPackage] = useState<PackageData | null>(null);
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        const packageId = router.query.id;

        if (packageId) {
            // Fetch the package data from the API or state management store
            // Example:
            const fetchPackageData = async () => {
                try {
                    const response = await axios.get<PackageData>(`/api/package/${packageId}`);
                    setSelectedPackage(response.data);
                } catch (err: any) {
                    setError(err.message || 'An error occurred while fetching the package data.');
                }
            };

            fetchPackageData();
        }
    }, [router.query.id]);

    // State for form inputs
    const [cardNumber, setCardNumber] = useState('');
    const [expMonth, setExpMonth] = useState('');
    const [expYear, setExpYear] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [showCardDetails, setShowCardDetails] = useState(false);
    const [showQrCode, setShowQrCode] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
    const [country, setCountry] = useState(''); // State for selected country


    // Handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: Process the payment
    };
    // Function to handle clicking on payment method buttons
    const selectPaymentMethod = (method: string) => {
        setSelectedPaymentMethod(method);
        setShowCardDetails(method === 'card');
        setShowQrCode(method === 'qrCode');
    };

    // Toggle the card details form
    const toggleCardDetails = () => {
        setShowCardDetails(!showCardDetails);
    };

    // When checkout button is clicked, show the modal
    const handleCheckout = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setShowModal(true);
    };

    // When the modal confirm button is clicked, redirect to the management page
    const handleConfirmPayment = () => {
        setShowModal(false);
        // Here, you would handle the payment confirmation and then redirect
        router.push('/management');
    };

    // When the modal cancel button is clicked, just hide the modal
    const handleCancel = () => {
        setShowModal(false);
    };


    const buttonClass = (method: string) =>
        `w-full p-3 rounded-md shadow-lg ${method === selectedPaymentMethod ? 'border-2 border-purple-500' : 'bg-gray-200'}`;

    // Array of countries for the dropdown
    const countries = ["Thailand", "United States", "Singapore", "Canada", "United Kingdom", "Australia", "Germany", "Japan", "Vietnam", "Kenya", "Korea", "Laos"];

    return (
        <RootLayout>
            <div className="bg-white p-3 lg:p-20">
                <h2 className="text-center text-3xl font-black mb-5">C H E C K O U T </h2>
                <div className="container mx-auto lg:w-5/6 border shadow-lg rounded-md overflow-hidden">
                    {/*Payment Method  */}
                    {selectedPackage && (
                        <div className="lg:grid grid-cols-12">
                            <div className="col-span-8 p-6">
                                <p className="text-2xl font-bold mb-5">Package: {selectedPackage.name}</p>

                                <hr />
                                <div className="mt-5">
                                    <i className="text-gray-400 mb-2">payment</i>
                                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                        Your Email
                                    </label>
                                    <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

                                    <p className="text-xl font-bold mt-5">Select Payment Method</p>


                                    <form onSubmit={handleSubmit} className="mt-4">
                                        {/* Payment method buttons */}
                                        <div className="flex flex-wrap -mx-2 mb-6 text-xs lg:text-base">
                                            <div className="px-2 w-1/3 mb-4">
                                                <button
                                                    type="button"
                                                    onClick={() => selectPaymentMethod('card')}
                                                    className={buttonClass('card')}>
                                                    Credit or Debit
                                                </button>
                                            </div>
                                            <div className="px-2 w-1/3 mb-4">
                                                <button
                                                    type="button"
                                                    onClick={() => selectPaymentMethod('qrCode')}
                                                    className={buttonClass('qrCode')}>
                                                    QR Code
                                                </button>
                                            </div>
                                        </div>

                                        {/* Conditional rendering for the Card Details form */}
                                        {showCardDetails && (
                                            <div>
                                                {/* Card Details */}
                                                <div className="mb-6">
                                                    <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">
                                                        Card Number
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="cardNumber"
                                                        value={cardNumber}
                                                        onChange={(e) => setCardNumber(e.target.value)}
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        placeholder="1234 1234 1234 1234"
                                                    />
                                                </div>
                                                {/* Expiration Month and Year */}
                                                <div className="flex flex-wrap -mx-2 mb-6">
                                                    <div className="px-2 w-1/2">
                                                        <label htmlFor="expMonth" className="block text-gray-700 text-sm font-bold mb-2">
                                                            Expiration Month
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="expMonth"
                                                            value={expMonth}
                                                            onChange={(e) => setExpMonth(e.target.value)}
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                            placeholder="MM"
                                                        />
                                                    </div>
                                                    <div className="px-2 w-1/2">
                                                        <label htmlFor="expYear" className="block text-gray-700 text-sm font-bold mb-2">
                                                            Expiration Year
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="expYear"
                                                            value={expYear}
                                                            onChange={(e) => setExpYear(e.target.value)}
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                            placeholder="YY"
                                                        />
                                                    </div>
                                                </div>
                                                {/* Security Code */}
                                                <div className="mb-6">
                                                    <label htmlFor="securityCode" className="block text-gray-700 text-sm font-bold mb-2">
                                                        CVC
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="securityCode"
                                                        value={securityCode}
                                                        onChange={(e) => setSecurityCode(e.target.value)}
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        placeholder="CVC"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {/* Conditional rendering for the QR Code */}
                                        {showQrCode && (
                                            <div className="mb-6">
                                                <QRCodeDisplay />
                                            </div>
                                        )}

                                        <div className="mb-6">
                                            <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">
                                                Country
                                            </label>
                                            <select
                                                id="country"
                                                value={country}
                                                onChange={(e) => setCountry(e.target.value)}
                                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            >
                                                <option value="" className="text-xs">Select a country...</option>
                                                {countries.map((country) => (
                                                    <option key={country} value={country} className="text-xs">
                                                        {country}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        {/* Submit button */}
                                        <div className="flex items-center justify-between">
                                            <button
                                                onClick={handleCheckout}
                                                className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                                Checkout
                                            </button>
                                        </div>
                                    </form>

                                </div>
                                <div className="flex items-center mt-10 ">
                                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-black dark:text-gray-300">ข้าพเจ้ายอมรับ
                                        <Link href="/management/requirements/terms" className="underline hover:underline" target="_blank" >
                                            ข้อกำหนดการใช้บริการ
                                        </Link>
                                    </label>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="col-span-4 bg-purple-900 drop-shadow-lg text-white p-5">
                                <p>SUMMARY</p>
                                <div className="grid grid-cols-7">
                                    <div className="col-span-5">
                                        <p>{selectedPackage.name}</p>
                                        <ul className="list-disc text-xs pl-6 bg-slate-400/25 p-2">
                                            <li>{selectedPackage.setlink} Link/mo.</li>
                                            <li>{selectedPackage.setQR} QR Code/mo.</li>
                                        </ul>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-right">{selectedPackage.price}</p>
                                    </div>

                                </div>
                                
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* Show the ModalSuccess component based on showModal state */}
            {showModal && <ModalSuccess onCancel={handleCancel} onConfirm={handleConfirmPayment} />}
        </RootLayout>
    )
}
export default Payment;