import { FaDonate, FaHome, FaLink, FaList, FaTable, FaUpload } from "react-icons/fa";

export const NavDefault = [
    { name: 'home', href: '/', current: true },
    { name: 'pricing', href: '/pricing', current: false },
];
export const NavAccount = [
    { name: 'home', icon: <FaHome className="w-5 h-5" />, href: '/management', head: false },
    { name: 'create link', icon: <FaLink className="w-5 h-5" />, href: '/management/createlink', head: false },
    { name: 'list link', icon: <FaList />, href: '/management/tableLink', head: false },
    { name: 'payment', icon: <FaDonate />, href: '/management/paymentHistory', head: false },
    { name: 'upgrade', icon: <FaUpload />, href: '/management/upgrade', head: false },
    {
        name: 'Requirements', icon: <FaTable />, href: '/management/requirements', head: true, loopPage: [
            { name: 'Rules', href: '' },
            { name: 'Terms of Service', href: '/terms' },
            { name: 'Policy', href: '/policy' },
        ]
    },
];