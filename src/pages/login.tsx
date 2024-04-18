import React, { useState } from 'react';
import RootLayout from "@/components/RootLayout";
import Link from "next/link";
import { useRouter } from 'next/router';
import { User, useUser } from "@/context/UserLogin";
import useAxios from 'axios-hooks';

interface LoginState {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const [loginState, setLoginState] = useState<LoginState>({ username: '', password: '' });
    const [error, setError] = useState<string | null>(null);
    const { login } = useUser()!;
    const router = useRouter();
    const [{ data: postData, loading: postLoading, error: postError }, executePost] = useAxios({
        url: '/api/user/login',
        method: 'POST'
    }, { manual: true });
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLoginState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLogin = async () => {
        setError(null);
        if (loginState.username && loginState.password) {
            try {
                const response = await executePost({
                    method: "POST",
                    data: loginState
                });
                if (response.status === 200) {
                    const userResponse: User = response.data.user;
                    login(userResponse);
                    router.push('/management');
                } else {
                    setError('Invalid username or password');
                }
            } catch (error) {
                setError('Login failed due to server error');
            }
        } else {
            setError('Please enter both username and password');
        }
    };

    return (
        <RootLayout>
            <div className="container mx-auto py-24">
                <div className="w-[320px] md:w-80 p-7 bg-white shadow-lg rounded-2xl border m-auto">
                    <p className="text-xl font-black mb-5">Login to your account</p>
                    {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                    <div>
                        <p className="text-sm">Username</p>
                        <input
                            type="text"
                            name="username"
                            value={loginState.username}
                            onChange={handleInputChange}
                            className="w-full border-b p-1.5 text-base mb-5 focus:outline-none"
                            placeholder="Enter Username"
                        />

                        <p className="text-sm">Password</p>
                        <input
                            type="password"
                            name="password"
                            value={loginState.password}
                            onChange={handleInputChange}
                            className="w-full border-b p-1.5 text-base focus:outline-none"
                            placeholder="Enter Password"
                        />
                    </div>
                    <button
                        onClick={handleLogin}
                        className="py-2 px-4 bg-black hover:bg-white hover:text-black border-2 hover:border-black text-white w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md rounded-lg my-5"
                    >
                        Login
                    </button>
                    <Link href='/forgot-password' className="text-sm hover:underline">Forgot password?</Link>
                    <div className="mt-8">
                        <div className="flex justify-center items-center">
                            <p className="text-sm">Not registered yet?</p>
                            <Link href='/register' className="ml-2 font-bold hover:underline">Create an Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </RootLayout>
    );
};

export default Login;
