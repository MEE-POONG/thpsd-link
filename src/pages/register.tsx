import RootLayout from "@/components/RootLayout";
import Link from "next/link";
import { useState } from "react";

const RegiterPage: React.FC = () => {
    const [userData, setUserData] = useState({
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        console.log(e);
        
        e.preventDefault();
        if (userData.password !== userData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const response = await fetch('/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Registration successful', data);
            } else {
                throw new Error(data.error || 'An error occurred');
            }
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <RootLayout>
            <div className="container mx-auto py-24">
                <div className="w-[300px] md:w-[350px] p-9 bg-white shadow-lg rounded-2xl border m-auto">
                    <p className="text-xl font-black mb-5">Create your account</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <p className="text-sm">Username</p>
                            <input
                                type="text"
                                name="username"
                                value={userData.username}
                                onChange={handleInput}
                                className="w-full border-b p-1.5 text-base mb-5 focus:outline-none placeholder:italic placeholder:text-xs"
                                placeholder="Enter Username"
                            />
                        </div>
                        <div>
                            <p className="text-sm">Firstname</p>
                            <input
                                type="text"
                                name="firstname"
                                value={userData.firstname}
                                onChange={handleInput}
                                className="w-full border-b p-1.5 text-base mb-5 focus:outline-none placeholder:italic placeholder:text-xs"
                                placeholder="Enter Firstname"
                            />                        </div>
                        <div>
                            <p className="text-sm">Lastname</p>
                            <input
                                type="text"
                                name="lastname"
                                value={userData.lastname}
                                onChange={handleInput}
                                className="w-full border-b p-1.5 text-base mb-5 focus:outline-none placeholder:italic placeholder:text-xs"
                                placeholder="Enter Lastname"
                            />                        </div>
                        <div className="md:col-span-2">
                            <p className="text-sm">E-Mail</p>
                            <input
                                type="text"
                                name="email"
                                value={userData.email}
                                onChange={handleInput}
                                className="w-full border-b p-1.5 text-base mb-5 focus:outline-none placeholder:italic placeholder:text-xs"
                                placeholder="Enter E-Mail"
                            />
                        </div>
                        <div>
                            <p className="text-sm">Password</p>
                            <input
                                type="password"
                                name="password"
                                value={userData.password}
                                onChange={handleInput}
                                className="w-full border-b p-1.5 text-base mb-5 focus:outline-none placeholder:italic placeholder:text-xs"
                                placeholder="Enter Password"
                            />                        </div>
                        <div>
                            <p className="text-sm">Confirm-Password</p>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={userData.confirmPassword}
                                onChange={handleInput}
                                className="w-full border-b p-1.5 text-base mb-5 focus:outline-none placeholder:italic placeholder:text-xs"
                                placeholder="Enter Password"
                            />                        </div>
                    </div>
                    <button onClick={handleSubmit} className="py-2 px-4 bg-black hover:bg-white hover:text-black border-2 hover:border-black text-white w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md rounded-lg mb-3">
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