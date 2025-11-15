/**
 * Component: Sidebar
 * Scope: App pages. Collapsible on desktop, sticky under AppHeader.
 * Behavior:
 * - Sticky at `top-16` to sit directly under the 64px AppHeader.
 * - Uses `usePathname` to highlight active route.
 */
"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { 
    ChevronLeft,
    LayoutGrid,
    Target,
    Link as LinkIcon,
    BarChart3,
    Settings,
    User,
    LogOut,
    BookOpen,
    BrainCircuit
} from 'lucide-react';

// --- Configuration ---
const GOAL_HYKE_BLUE = '#4a76ff';
const ACTIVE_COLOR_CLASS = `text-white bg-[${GOAL_HYKE_BLUE}]`;
const DORMANT_COLOR_CLASS = 'text-gray-500 hover:text-gray-800';

// NAV_ITEMS order matches design screenshot (grid first then goal-related etc.)
const NAV_ITEMS = [
    { id: 'dashboard', title: 'Dashboard', icon: LayoutGrid, href: '/dashboard' },
    { id: 'goals', title: 'Goals', icon: Target, href: '/goals' },
    { id: 'habits', title: 'Habits', icon: BrainCircuit, href: '/habits' },
    { id: 'progress', title: 'Progress', icon: BarChart3, href: '/progress' },
    { id: 'library', title: 'Resources', icon: BookOpen, href: '/resources' },
    { id: 'settings', title: 'Settings', icon: Settings, href: '/settings' },
    { id: 'profile', title: 'Profile', icon: User, href: '/profile' }
];

// --- Sub-Components ---

/**
 * Renders a single navigation link.
 */
const NavItem = ({ item, isCollapsed, isActive, onClick }) => {
    // Determine base classes based on active state
    const baseClasses = `flex items-center rounded-xl p-3 mb-2 transition-all duration-200 
                         ${isActive ? ACTIVE_COLOR_CLASS : 'hover:bg-blue-100/70'}`;
    
    // Icon color handling
    const iconColor = isActive ? 'text-white' : `text-[${GOAL_HYKE_BLUE}]`;
    const iconHoverColor = isActive ? 'text-white' : 'hover:text-gray-800';


    return (
        <a 
            href={item.href}
            onClick={(e) => { e.preventDefault(); onClick(item.id); }}
            className={baseClasses}
        >
            {/* Icon */}
            <item.icon className={`w-6 h-6 shrink-0 ${iconColor} ${isCollapsed ? 'mx-auto' : ''}`} />
            
            {/* Text Label (only visible when not collapsed) */}
            <span className={`ml-4 text-base font-medium whitespace-nowrap 
                             ${isCollapsed ? 'hidden' : 'inline'} 
                             ${isActive ? 'text-white' : 'text-gray-700'}`}
            >
                {item.title}
            </span>
        </a>
    );
};


// --- Main Component ---

/**
 * Collapsible Sidebar for the Goal Hyke dashboard.
 */
const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const pathname = usePathname();
    const activeItem = NAV_ITEMS.find(item => pathname.startsWith(item.href))?.id || 'dashboard';

    // Calculate width based on collapse state
    const sidebarWidth = isCollapsed ? 'w-20' : 'w-64';

    return (
        <div 
            className={`hidden lg:flex flex-col sticky top-16 h-[calc(100vh-4rem)] bg-white shadow-2xl border-r border-gray-100 transition-all duration-300 ease-in-out ${sidebarWidth}`}
            style={{ backgroundColor: '#ffffff' }}
        >
            {/* 1. Header / Collapse Toggle */}
            <div className={`flex ${isCollapsed ? 'justify-center' : 'justify-end'} p-4 relative`}>
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className={`p-2 rounded-full transition-all duration-300 ease-in-out 
                                 text-gray-500 hover:text-gray-800 hover:bg-gray-100
                                 ${isCollapsed ? '' : 'rotate-0'}`}
                >
                    <ChevronLeft className={`w-6 h-6 transform ${isCollapsed ? 'rotate-180' : 'rotate-0'}`} />
                </button>
            </div>

            {/* 2. Navigation Links */}
            <nav className="flex-grow p-4 overflow-y-auto">
                {NAV_ITEMS.map((item) => (
                    <NavItem
                        key={item.id}
                        item={item}
                        isCollapsed={isCollapsed}
                        isActive={activeItem === item.id}
                        onClick={() => { /* navigation handled by Link if added later */ }}
                    />
                ))}
            </nav>

            {/* 3. Footer: Logout */}
            <div className={`p-4 border-t border-gray-100 ${isCollapsed ? 'flex justify-center' : ''}`}>
                <a 
                    href="/logout"
                    onClick={(e) => { e.preventDefault(); console.log('Logging out...'); }}
                    className={`flex items-center rounded-xl p-3 transition-all duration-200 hover:bg-red-500/10 ${DORMANT_COLOR_CLASS}`}
                >
                    {/* Logout Icon */}
                    <LogOut className={`w-6 h-6 shrink-0 transform rotate-180 text-red-500 ${isCollapsed ? 'mx-auto' : ''}`} />
                    
                    {/* Text Label */}
                    <span className={`ml-4 text-base font-medium whitespace-nowrap text-red-500 
                                     ${isCollapsed ? 'hidden' : 'inline'}`}
                    >
                        Logout
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;