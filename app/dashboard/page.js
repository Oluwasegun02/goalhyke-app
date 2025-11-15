/**
 * Page: /dashboard
 * Purpose: Authenticated user dashboard (goals, commitments, promotional banner).
 * Header: Uses `AppHeader`; Sidebar is sticky beneath header.
 * Notes:
 * - Replace remaining <img> tags with <Image /> for optimization later.
 */
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import AppHeader from '../../components/AppHeader';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import BehavioralSolutions from '../../components/BehavioralSolutions';
import {
    Menu, ChevronLeft, LogOut, Settings, User, Bell, ChevronDown, Award,
    Grip, Goal, Link as LinkIcon, BarChart3, Star
} from 'lucide-react';

// --- Configuration & Mock Data ---
const GOAL_HYKE_PURPLE = '#5B48CC';
const GOAL_HYKE_BLUE = '#4a76ff';
const ACTIVE_COLOR_CLASS = `text-white bg-[${GOAL_HYKE_BLUE}]`;
const USER_MOCK_DATA = { avatar: "https://placehold.co/32x32/7C3AED/ffffff?text=U" };

const NAV_ITEMS = [
    { id: 'dashboard', title: 'Dashboard', icon: Grip, href: '/dashboard' },
    { id: 'goals', title: 'Goals', icon: Goal, href: '/goals' },
    { id: 'habits', title: 'Habits', icon: LinkIcon, href: '/habits' },
    { id: 'progress', title: 'Progress', icon: BarChart3, href: '/progress' },
    { id: 'settings', title: 'Settings', icon: Settings, href: '/settings' },
    { id: 'profile', title: 'Profile', icon: User, href: '/profile' },
];

const SECONDARY_LINKS = [
    { title: "HOW IT WORKS", href: "/how-it-works" },
    { title: "ABOUT US", href: "/about-us" },
    { title: "HELP CENTER", href: "/help-center" },
];

// Dashboard goal categories mapped to actual PNG assets in /public
// Filenames chosen to match provided design images.
const GOAL_CATEGORIES = [
    { name: 'Lose weight', description: 'Start goal', image: '/lose.png', alt: 'Lose weight illustration' },
    { name: 'Exercise regularly', description: 'Start goal', image: '/exercise.png', alt: 'Exercise regularly illustration' },
    { name: 'Grow wealth', description: 'Start goal', image: '/grow.png', alt: 'Grow wealth illustration' },
    { name: 'Strengthen your spirit', description: 'Start goal', image: '/strengthen.png', alt: 'Strengthen your spirit illustration' },
    { name: 'Level up your career', description: 'Start goal', image: '/level.png', alt: 'Level up career illustration' },
    { name: 'Excel academically', description: 'Start goal', image: '/excel.png', alt: 'Excel academically illustration' },
    { name: 'Master tech skill', description: 'Start goal', image: '/master.png', alt: 'Master tech skill illustration' },
    { name: 'Read more', description: 'Start goal', image: '/read.png', alt: 'Read more illustration' },
    { name: 'Stay healthy', description: 'Start goal', image: '/stay.png', alt: 'Stay healthy illustration' }
];

const COMMITMENT_CARDS = [
    { name: "John Doe", goal: "Quit smoking", avatar: "/avatar-5.jpeg" },
    { name: "John Doe", goal: "Quit smoking", avatar: "/avatar-7.jpeg" },
    { name: "John Doe", goal: "Quit smoking", avatar: "/avatar-9.png" },
];

// --- Utility Components ---

// --- 1. Dashboard Content Components ---

import Image from 'next/image';
const GoalCard = ({ goal }) => {
    return (
        <div className="relative p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 ease-in-out flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-4 rounded-full overflow-hidden flex items-center justify-center bg-[#f5f7fa]">
                <Image
                    src={goal.image}
                    alt={goal.alt || goal.name}
                    width={96}
                    height={96}
                    className="object-contain w-full h-full"
                    loading="lazy"
                />
            </div>
            <h3 className="text-sm font-medium text-gray-800 mb-2 text-center leading-snug">{goal.name}</h3>
            <button
                className="text-xs font-medium px-4 py-1 rounded-full bg-[#5B48CC] text-white hover:opacity-90 transition shadow-sm"
                aria-label={`Start goal: ${goal.name}`}
            >
                {goal.description} <span aria-hidden>↗</span>
            </button>
        </div>
    );
};

const CommitmentCard = ({ user }) => (
    <div className="relative p-4 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between h-32 w-full max-w-xs transition-shadow duration-300 w-64">
        <div className="flex items-center space-x-2">
            <Image src={user.avatar} alt={user.name} width={30} height={30} className="rounded-full object-cover" />
            <span className="text-sm font-medium text-gray-800">{user.name}</span>
        </div>
        <p className="text-lg font-normal text-gray-600 mb-2">{user.goal}</p>
        <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full p-1 shadow-lg border-2 border-gray-100">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
        </div>
    </div>
);



// --- . Main Page Component (dashboard/page.jsx) ---

const DashboardPage = () => {
    // State for the desktop sidebar (collapsed/open)
    const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
    // State for the mobile sidebar (open/closed overlay)
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const desktopSidebarWidth = isDesktopCollapsed ? '20' : '64';

    return (
        <div className="min-h-screen bg-white flex">
            {/* Sidebar fixed on large screens */}
            <div className="hidden lg:block">
                <Sidebar />
            </div>
            {/* Content area */}
            <div className="flex-1 flex flex-col">
                <AppHeader onMenuToggle={() => setIsMobileOpen(true)} />
                <main className="p-6 md:p-10 flex-grow">
                        {/* Top-right create goal button under header */}
                        <div className="mb-8 flex justify-end">
                            <Link href="/goals/create" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5B48CC] text-white text-sm font-medium shadow hover:opacity-90 transition" aria-label="Create a goal">
                                Create a goal +
                            </Link>
                        </div>

                    {/* Set a Goal Section */}
                    <div className="mb-16">
                        <div className="flex justify-center mb-10">
                          <div className="relative inline-flex items-center">
                            <h1 className="text-4xl font-normal text-gray-900"><span className=" rounded-full bg-[#4a76ff] text-white px-3 text-left"><strong>S</strong></span>et a goal</h1>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {GOAL_CATEGORIES.map((goal, index) => (
                                <GoalCard key={index} goal={goal} />
                            ))}
                        </div>
                    </div>

                    {/* Community Commitments Section (3 static cards) */}
                    <div className="mb-16">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-normal text-gray-800">Community Commitments</h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                            {COMMITMENT_CARDS.slice(0,3).map((user, index) => (
                                <div key={index} className="relative mb-8">
                                    <CommitmentCard user={user} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Habit Solutions Component */}
                    <div className="max-w-6xl mx-auto">
                      <BehavioralSolutions />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default DashboardPage;