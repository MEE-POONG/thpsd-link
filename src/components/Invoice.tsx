const Invoice = () => {
    return (
        <div className="h-[297mm] w-[210mm] p-12 bg-white  overflow-hidden shadow-xl transform transition-all">
            <div className="flex justify-between">
                <div>
                    <p className="pb-2 text-2xl">ME PROMPT TECHNOLOGY COMPANY LIMITED </p>
                    <p className="text-sm text-gray-400">206/3 ซอยโรงต้ม ต.ในเมือง อ.เมือง </p>
                    <p className="text-sm text-gray-400">จ.นครราชสีมา 3000</p>
                </div>
                <div>
                    <img src="/images/Logo.png" className="w-28" />
                </div>
            </div>
            <div className="flex justify-between pt-16">
                <div>
                    <p>01/31/2024</p>
                    <p className="pb-3 text-4xl font-bold">INVOICE</p>
                    <p className="text-sm font-bold">INVOICE NO. <span className="pl-1 font-normal">0001</span></p>
                    <p className="text-sm font-bold">DUE DATE: <span className="pl-1 font-normal">02/15/2002</span></p>
                </div>
                <div className="pl-2 text-right">
                    <p className="text-gray-400">CLIENT</p>
                    <p className="font-bold">Tony Stark</p>
                    <p className="text-sm">Avengers Mansion</p>
                    <p className="text-sm">890 Fifth Avenue</p>
                    <p className="text-sm">Manhattan New York 10004</p>
                </div>
            </div>
            <div className="pt-16">
                <table className="w-full table-auto text-sm">
                    <thead className="border-b-2">
                        <tr className="h-10 text-left">
                            <th>ITEM</th>
                            <th>QUANTITY</th>
                            <th>PRICE $</th>
                            <th className="text-right">TOTAL $</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="h-24">
                            <td className="px-1">Promotion Plan A1</td>
                            <td className="">1</td>
                            <td>360.00</td>
                            <td className="text-right px-1">360.00</td>
                        </tr>
                        <tr className="h-1">
                            <td></td>
                            <td></td>
                            <td className="font-semibold p-2 bg-blue-200">Subtotal:</td>
                            <td className="text-right bg-blue-200 px-1">360.00</td>
                            
                        </tr>
                        <tr className="">
                            <td></td>
                            <td></td>
                            <td className="font-semibold p-2 bg-blue-200 border-b">Tax(0%):</td>
                            <td className="text-right bg-blue-200 px-1 border-b" >0.00</td>
                        </tr>
                        <tr className="h-10 bg-gray-200">
                            <td></td>
                            <td></td>
                            <td className="font-bold text-xl p-2">Total:</td>
                            <td className="text-right text-xl font-bold px-1 ">360.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <div className="flex justify-end">
                <p className="pt-6 text-xl font-bold">1860.00 $</p>
            </div> */}
            <div className="pt-16 text-sm">
                <p className="font-bold">PAYMENT ADVICE</p>
                <p>Account name: Me Prompt Technology</p>
                <p>Bank name: Kasukorn</p>
                {/* <p>IBAN: GB95BARC20038428989175</p> */}
            </div>
        </div>
    )
}
export default Invoice;