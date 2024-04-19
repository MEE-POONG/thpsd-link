import ModalAPI from "@/components/Modal/ModalAPI";
import RootLayout from "@/components/RootLayout";
import { useRouter } from 'next/router';
import useAxios from "axios-hooks";
import Link from "next/link";
import { useState } from "react";
import { User, useUser } from "@/context/UserContext";
interface UserData {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
}
interface ValidationErrors {
    username?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

const RegiterPage: React.FC = () => {
    const router = useRouter();
    const { login } = useUser()!;

    const [userData, setUserData] = useState<UserData>({
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState<ValidationErrors>({});

    const validate = (): boolean => {
        let valid = true;
        let newErrors: ValidationErrors = {};

        if (!userData.username.trim()) {
            newErrors.username = 'Username is required.';
            valid = false;
        } else if (userData.username.length < 6) {
            newErrors.username = 'Username must be at least 6 characters long.';
            valid = false;
        }

        if (!userData.firstname.trim()) {
            newErrors.firstname = 'Firstname is required.';
            valid = false;
        }

        if (!userData.lastname.trim()) {
            newErrors.lastname = 'Lastname is required.';
            valid = false;
        }

        if (!userData.email.trim()) {
            newErrors.email = 'Email is required.';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
            newErrors.email = 'Email is invalid.';
            valid = false;
        }

        if (!userData.password) {
            newErrors.password = 'Password is required.';
            valid = false;
        } else if (userData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long.';
            valid = false;
        }

        if (userData.password !== userData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const [{ data: postData, loading: postLoading, error: postError }, executePost] = useAxios({
        url: '/api/user/register', // URL to your API endpoint
        method: 'POST'
    }, { manual: true });
    const [modalOpen, setModalOpen] = useState(false);
    const [modalStatus, setModalStatus] = useState<'processing' | 'success' | 'error'>('processing');
    const [modalMessage, setModalMessage] = useState('');
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!validate()) return;
        if (userData.password !== userData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        setModalOpen(true);
        setModalStatus('processing');
        setModalMessage('Processing your registration...');
        try {
            const response = await executePost({
                data: userData
            });
            if (response.status === 201) {
                const userResponse: User = response.data.user; // Adjust based on actual API response
                login(userResponse);  // Update context with user info
                router.push('/management');
            } else {
                throw new Error('An error occurred during registration');
            }
        } catch (error: any) {
            setModalStatus('error');
            setModalMessage(error.response?.data.error || 'Registration failed.');
            console.error('Error:', error);
        }
    };



    return (
        <RootLayout>
            <ModalAPI isOpen={modalOpen} status={modalStatus} message={modalMessage} onClose={() => setModalOpen(false)} />
            <div className="container mx-auto py-24">
                <div className="w-[300px] md:w-[350px] p-9 bg-white shadow-lg rounded-2xl border m-auto">
                    <p className="text-xl font-black mb-5">Create your account</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <p className="text-sm">Username</p>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={userData.username}
                                onChange={handleInput}
                                className="w-full border-b p-1.5 text-base mb-1 focus:outline-none placeholder:italic placeholder:text-xs"
                                placeholder="Enter Username"
                                aria-invalid={!!errors.username}
                                aria-describedby="usernameError"
                            />
                            {errors.username && <p id="usernameError" className="text-red-500 text-xs italic">{errors.username}</p>}
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
                            />
                            {errors.firstname && <p className="text-red-500 text-xs italic">{errors.firstname}</p>}
                        </div>
                        <div>
                            <p className="text-sm">Lastname</p>
                            <input
                                type="text"
                                name="lastname"
                                value={userData.lastname}
                                onChange={handleInput}
                                className="w-full border-b p-1.5 text-base mb-5 focus:outline-none placeholder:italic placeholder:text-xs"
                                placeholder="Enter Lastname"
                            />
                            {errors.lastname && <p className="text-red-500 text-xs italic">{errors.lastname}</p>}
                        </div>
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
                            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}

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
                            />
                            {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}

                        </div>
                        <div>
                            <p className="text-sm">Confirm-Password</p>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={userData.confirmPassword}
                                onChange={handleInput}
                                className="w-full border-b p-1.5 text-base mb-5 focus:outline-none placeholder:italic placeholder:text-xs"
                                placeholder="Enter Password"
                            />
                            {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword}</p>}

                        </div>
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