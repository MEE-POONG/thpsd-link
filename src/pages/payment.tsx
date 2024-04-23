import RootLayout from "@/components/RootLayout";
import { useState } from "react";
import IndexPage from './index';
import QRCodeDisplay from "@/container/QRCodeDisplay";

const Payment: React.FC = (props) => {

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

    const buttonClass = (method: string) =>
        `w-full p-3 rounded-md shadow-lg ${method === selectedPaymentMethod ? 'border-2 border-purple-500' : 'bg-gray-200'}`;

    // Array of countries for the dropdown
    const countries = ["United States", "Canada", "United Kingdom", "Australia", "Germany"];

    return (
        <RootLayout>
            <div className="bg-white p-3 lg:p-20">
                <h2 className="text-center text-3xl font-black mb-5">C H E C K O U T </h2>
                <div className="container mx-auto lg:w-5/6 border shadow-lg rounded-md overflow-hidden">
                    {/*Payment Method  */}
                    <div className="lg:grid grid-cols-12">
                        <div className="col-span-8 p-6">
                            <p className="text-2xl font-bold">Pagkage A</p>
                            <div className="">
                                <p className="text-gray-500 font-bold my-5">Detail:</p>
                            </div>
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
                                        <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                            Proceed to Checkout
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>

                        {/* Total */}
                        <div className="col-span-4 bg-purple-900 drop-shadow-lg text-white p-5">
                            <p>SUMMARY</p>
                            <div className="grid grid-cols-7">
                                <div className="col-span-5">
                                    <p>Package A</p>
                                    <ul className="list-disc text-xs pl-6 bg-slate-400/25 p-2">
                                        <li>20 Link/mo.</li>
                                        <li>2 QR Code/mo.</li>
                                    </ul>
                                </div>
                                <div className="col-span-2">
                                    <p className="text-right">$9.99</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </RootLayout>
    )
}
export default Payment;