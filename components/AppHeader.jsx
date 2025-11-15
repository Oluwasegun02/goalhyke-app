/**
 * Component: AppHeader
 * Scope: Authenticated/app pages (e.g., dashboard). This is the in-app navbar.
 * Props:
 * - onMenuToggle?: function to open the mobile sidebar.
 * Behavior:
 * - Renders brand + secondary links.
 * - Shows alerts, token button, and profile avatar.
 */
"use client";
import React from 'react';
import { Bell, ChevronDown, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// --- Configuration ---
const GOAL_HYKE_PURPLE = '#5B48CC';
const GOAL_HYKE_BLUE = '#4a76ff';

const USER_MOCK_DATA = {
  avatar: "logo.jpg" // Placeholder
};

const SECONDARY_LINKS = [
    { title: "HOW IT WORKS", href: "/how-it-works" },
    { title: "ABOUT US", href: "/about-us" },
    { title: "HELP CENTER", href: "/help-center" },
];

// Custom Link component to replace unsupported router/link dependencies
const CustomLink = ({ href, className, children }) => (
    <Link href={href} className={className}>
        {children}
    </Link>
);


/**
 * Renders the main navigation header for a logged-in user.
 * It is fully responsive and changes structure on mobile.
 */
const AppHeader = ({ onMenuToggle }) => {
    const pathname = usePathname();
    return (
    <header className="sticky top-0 z-30 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        
        {/* Left Section: Logo & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
            {/* Mobile Menu Button (Only visible if the sidebar is normally hidden/collapsed) */}
            <button 
                onClick={onMenuToggle} 
                className="lg:hidden text-gray-600 hover:text-gray-900 rounded-full p-2 transition"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Logo (linked to dashboard/home) */}
            <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white border border-gray-200 shadow-sm">
                    <Image src="/logo.jpg" alt="GoalHyke Logo" width={40} height={40} priority className="object-contain" />
                </div>
                <span className="text-xl font-bold text-gray-900 hidden sm:inline group-hover:text-[#4a76ff] transition-colors">GoalHyke</span>
            </Link>
        </div>


        {/* Center Section: Info Links (Desktop Only) */}
                <nav className="hidden md:flex items-center space-x-1 p-1 rounded-full bg-[#4a76ff]">
                    {SECONDARY_LINKS.map(item => {
                        const active = pathname === item.href;
                        return (
                            <CustomLink
                                key={item.title}
                                href={item.href}
                                className={`px-4 py-2 text-sm font-semibold tracking-wider rounded-full transition duration-150 ${active ? 'bg-white text-[#4a76ff]' : 'text-white hover:bg-blue-700/20'}`}
                            >
                                {item.title}
                            </CustomLink>
                        );
                    })}
                </nav>

        {/* Right Section: Actions (Alert, Token, Profile) */}
        <div className="flex items-center space-x-3">
            
            {/* Alert/Notification Icon */}
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition duration-150 relative">
                <Bell className="w-6 h-6" />
                {/* Mock Notification Indicator */}
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
                        {/* Get Token Button */}
                        <Link 
                            href="/token" 
                            className="px-4 py-2 text-sm font-semibold rounded-full border-2 hidden sm:block transition duration-150 hover:bg-blue-50/50"
                            style={{ borderColor: GOAL_HYKE_PURPLE, color: GOAL_HYKE_PURPLE }}
                        >
                            GET TOKEN
                        </Link>

            {/* Profile Dropdown Button */}
                        <div className="flex items-center cursor-pointer p-1 pr-2 rounded-full transition duration-150 hover:bg-gray-100" style={{ backgroundColor: GOAL_HYKE_PURPLE, borderRadius: '9999px', padding: '0px 0px 0px 4px' }}>
                            <span className="overflow-hidden rounded-full w-8 h-8 bg-[#4a76ff] flex items-center justify-center text-white text-sm font-medium">
                                U
                            </span>
                            <ChevronDown className="w-4 h-4 text-white ml-2" />
                        </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;