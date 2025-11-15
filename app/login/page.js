/**
 * Page: /login
 * Purpose: Standalone login experience with a two-column layout.
 * Header: Uses marketing `Navbar` (not AppHeader).
 */
"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// --- 1. Container Component for the Two-Column Layout ---

// Custom colors based on the diagram:
const GOAL_HYKE_PURPLE = '#5B48CC';
const GOAL_HYKE_BLUE = '#4a76ff'; 

// --- Component for the Two-Column Container (Now including the image) ---
const AuthContainer = ({ children }) => (
    // Centered the entire content block for better viewing
    <main className="flex items-center justify-center min-h-screen bg-white p-4 sm:p-8">
        {/* Adjusted margin to mimic a 2px boundary around the content block */}
        <div className="bg-white max-w-7xl w-full mx-0 my-0 border-2 border-transparent"> 
            <div className="flex flex-col md:flex-row min-h-[80vh] items-center mt-5">
                
                {/* Left Side: Illustration Area - Uses 100% of its side width, centered */}
                <div className="md:w-1/2 flex items-center justify-center p-0 relative order-2 md:order-1 h-full">
                    {/* Image size adjusted to maximize the space and fill 100% area */}
                    <Image 
                        src="/image-placeholder-diagram.png" 
                        alt="Goal setting illustration"
                        width={600}
                        height={600}
                        style={{ objectFit: 'contain' }}
                        className="w-full h-auto max-w-full"
                        // Added onError to use a fallback placeholder if the custom path fails
                        onError={(e) => { e.target.src = "https://placehold.co/600x600/f0f0f0/666666?text=Login+Art+Placeholder"; }}
                    />
                </div>
                
                {/* Right Side: Form Area - Padding adjusted to create a slight visual space */}
                <div className="md:w-1/2 flex items-center justify-center p-6 order-1 md:order-2">
                    {children}
                </div>
            </div>
        </div>
    </main>
);

// --- Component for the Login Form ---
const LoginPage = () => (
    <div className="w-full max-w-sm mx-auto p-0"> 
        {/* Title: Centered, 20px bottom margin (mb-5 approx 20px) */}
        <h2 className="text-3xl font-normal text-gray-900 mb-5 text-center">Login</h2>

        <form onSubmit={(e) => { e.preventDefault(); /* Handle Login */ }} className="space-y-6">
            <div>
                {/* Label: 5px bottom margin (mb-1.5 approx 6px, close enough to 5px) */}
                <label className="block text-base font-normal text-gray-900 mb-1.5">Email</label>
                {/* Input: 2px gray border (border-2 border-gray-400) */}
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    required 
                    className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                />
            </div>
            <div>
                <label className="block text-base font-normal text-gray-900 mb-1.5">Password</label>
                <input 
                    type="password" 
                    placeholder="Enter a password" 
                    required 
                    className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                />
            </div>

            {/* Login Button: 20px top margin (mt-5 approx 20px), rounded-full, text center (default) */}
            <button 
                type="submit" 
                className="w-full text-white py-3 rounded-full font-normal text-lg hover:opacity-90 transition duration-300 shadow-md mt-10"
                style={{ backgroundColor: GOAL_HYKE_PURPLE }}
            >
                Login
            </button>
        </form>

        {/* OR Divider */}
        <div className="my-8 flex items-center" aria-label="Divider">
            <span className="h-px flex-grow bg-gray-300" />
            <span className="px-4 text-gray-500 text-sm">or</span>
            <span className="h-px flex-grow bg-gray-300" />
        </div>

        <div className="space-y-4">
            {/* Google Button: Icon and text centered, 4px spacing (space-x-1) */}
            <button 
                className="w-full flex items-center justify-center border border-gray-300 bg-white py-3 rounded-lg shadow-sm hover:bg-gray-50 transition duration-300 text-gray-700 font-normal space-x-1"
            >
                {/* Placeholder Google Icon */}
                <Image src="/google-icon.png" alt="Google" width={20} height={20} />
                <span>Sign in with Google</span>
            </button>
            
            {/* Apple Button: Icon and text centered, 4px spacing (space-x-1) */}
            <button 
                className="w-full flex items-center justify-center bg-gray-900 text-white py-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-300 font-normal space-x-1"
            >
                {/* Placeholder Apple Icon */}
                <Image src="/apple-icon.svg" alt="Apple" width={20} height={20} />
                <span>Sign in with Apple</span>
            </button>
        </div>

        {/* Links: Adjusted top margin for sufficient spacing */}
        <p className="mt-8 text-center text-gray-600 font-normal">
            Forgot your password? 
            <Link href="/reset-password" className="font-normal hover:underline ml-1" style={{ color: GOAL_HYKE_PURPLE }}>
                Reset it
            </Link>
        </p>
        <p className="mt-2 text-center text-gray-600 font-normal">
            Don&apos;t have an account? 
            <Link href="/signup" className="hover:underline ml-1" style={{ color: GOAL_HYKE_PURPLE }}>
                Sign up
            </Link>
        </p>
    </div>
);

// --- Main Wrapper Component ---
const LoginPageWrapper = () => (
    <div className="min-h-screen bg-white">
        <style jsx global>{`
            /* Custom CSS for consistency */
            .text-primary-purple { color: ${GOAL_HYKE_PURPLE}; }
            .bg-primary-purple { background-color: ${GOAL_HYKE_PURPLE}; }
            .border-primary-purple { border-color: ${GOAL_HYKE_PURPLE}; }
            body { font-family: 'Inter', sans-serif; background-color: white; }
        `}</style>
        <Navbar />
        <AuthContainer>
            <LoginPage />
        </AuthContainer>
        <Footer />
    </div>
);

export default LoginPageWrapper;