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
        name: 'Rules & policies', icon: <FaTable />, href: '/rules&policies', head: true, loopPage: [
            { name: 'กฏ', href: '/' },
            { name: 'นโยบาบ', href: '/policies' },
        ]
    },
    {
        name: 'Rules & policies', icon: <FaTable />, href: '/policies', head: true, loopPage: [
            { name: 'นโยบาบ', href: '/' },
            { name: 'กฏ', href: '/rules' },
        ]
    },
];