import { FaDonate, FaHome, FaLink, FaList, FaTable } from "react-icons/fa";

export const NavDefault = [
    { name: 'home', href: '/', current: true },
    { name: 'pricing', href: '/pricing', current: false },
];
export const NavAccount = [
    { name: 'home', icon: <FaHome className="w-5 h-5" />, href: '/home', head: false },
    { name: 'create link', icon: <FaLink className="w-5 h-5" />, href: '/createlink', head: false },
    { name: 'list link', icon: <FaList />, href: '/tableLink', head: false },
    { name: 'payment', icon: <FaDonate />, href: '/payment', head: false },
    {
        name: 'Requirements', icon: <FaTable />, href: '/requirements', head: true, loopPage: [
            { name: 'Rules', href: '' },
            { name: 'Terms of Service', href: '/terms' },
            { name: 'Policy', href: '/policy' },
        ]
    },
];