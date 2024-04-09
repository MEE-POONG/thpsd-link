import RootLayout from "@/components/RootLayout";
import Link from "next/link";

const RegiterPage: React.FC = () => {
    return (
        <RootLayout>
            <div className="container mx-auto py-24">
                <div className="w-[350px] md:w-80 p-9 bg-white shadow-lg rounded-2xl border m-auto">
                    <p className="text-xl font-black mb-5">Create your account</p>
                    {/* <div className="my-7">
                        <p className="text-sm">Firstname</p>
                        <input type="text" className="w-full border-b p-1.5 text-base mb-5 focus:outline-none placeholder:italic placeholder:text-xs" placeholder="Enter Firstname" />
                        <p className="text-sm">Lastname</p>
                        <input type="text" className="w-full border-b p-1.5 text-base mb-5 focus:outline-none placeholder:italic placeholder:text-xs" placeholder="Enter Lastname" />
                        <p className="text-sm">Username</p>
                        <input type="text" className="w-full border-b p-1.5 text-base mb-5 focus:outline-none placeholder:italic placeholder:text-xs" placeholder="Enter Username" />
                        <p className="text-sm">Password</p>
                        <input type="text" className="w-full border-b p-1.5 text-base mb-5 focus:outline-none placeholder:italic placeholder:text-xs" placeholder="Enter Password" />
                        <p className="text-sm">Confirm-Password</p>
                        <input type="text" className="w-full border-b p-1.5 text-base mb-5 focus:outline-none placeholder:italic placeholder:text-xs" placeholder="Enter Password" />
                        <p className="text-sm">E-Mail</p>
                        <input type="text" className="w-full border-b p-1.5 text-base mb-5 focus:outline-none placeholder:italic placeholder:text-xs" placeholder="Enter E-Mail" />
                    </div> */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <p className="text-sm">Username</p>
                            <input type="text" className="w-full border-b p-1.5 text-base mb-5 focus:outline-none placeholder:italic placeholder:text-xs" placeholder="Enter Username" />
                        </div>
                        <div>
                            <p className="text-sm">Firstname</p>
                            <input type="text" className="w-full border-b p-1.5 text-base mb-5 focus:outline-none placeholder:italic placeholder:text-xs" placeholder="Enter Firstname" />
                        </div>
                        <div>
                            <p className="text-sm">Lastname</p>
                            <input type="text" className="w-full border-b p-1.5 text-base mb-5 focus:outline-none placeholder:italic placeholder:text-xs" placeholder="Enter Lastname" />
                        </div>
                        <div className="col-span-2">
                            <p className="text-sm">E-Mail</p>
                            <input type="text" className="w-full border-b p-1.5 text-base mb-5 focus:outline-none placeholder:italic placeholder:text-xs" placeholder="Enter E-Mail" />
                        </div>
                        <div>
                            <p className="text-sm">Password</p>
                            <input type="text" className="w-full border-b p-1.5 text-base mb-5 focus:outline-none placeholder:italic placeholder:text-xs" placeholder="Enter Password" />
                        </div>
                        <div>
                            <p className="text-sm">Confirm-Password</p>
                            <input type="text" className="w-full border-b p-1.5 text-base mb-5 focus:outline-none placeholder:italic placeholder:text-xs" placeholder="Enter Password" />
                        </div>

                    </div>
                    <button className="py-2 px-4 bg-black hover:bg-white hover:text-black border-2 hover:border-black text-white w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md rounded-lg mb-3">
                        Create Account
                    </button>
                    <p className="text-sm leading-relaxed text-grey-900 mt-5">
                        Already have an acconut
                        <Link href='./login' className="font-bold text-gray-700 hover:underline ml-2">Login</Link>
                    </p>
                </div>

            </div>
        </RootLayout>
    )
}
export default RegiterPage;