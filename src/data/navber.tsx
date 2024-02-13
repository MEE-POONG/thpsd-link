import { FaDonate, FaHome, FaLink, FaList, FaTable } from "react-icons/fa";

export const NavDefault = [
    { name: 'home', href: '/', current: true },
    { name: 'pricing', href: '/pricing', current: false },
];
export const NavAccount = [
    { name: 'home', icon: <FaHome className="w-5 h-5" />, href: '/home', head: false },
    { name: 'create link', icon: <FaLink className="w-5 h-5" />, href: '/create', head: false },
    { name: 'table', icon: <FaList />, href: '/table', head: false },
    { name: 'payment', icon: <FaDonate />, href: '/payment', head: false },
    {
        name: 'page', icon: <FaTable />, href: '/page', head: true, loopPage: [
            { name: 'login', href: '/login' },
            { name: 'Create account', href: '/create' },
            { name: 'Forgot password', href: '/forgotpass' },
            { name: '404', href: '/404' },
            { name: 'blank', href: '/blank' },
        ]
    },
    {
        name: 'page two', icon: <FaTable />, href: '/pagetwo', head: true, loopPage: [
            { name: 'check', href: '/check' },
            { name: 'account', href: '/account' },
            { name: 'money', href: '/money' },
        ]
    },

];