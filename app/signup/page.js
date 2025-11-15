/**
 * Page: /signup
 * Purpose: User registration with validation-ready structure.
 * Header: Uses marketing `Navbar`.
 */
"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const AuthContainer = ({ children }) => (
    <main className="flex items-center justify-center min-h-screen bg-white p-4 sm:p-8">
        <div className="bg-white max-w-7xl w-full mx-0 my-0 border-2 border-transparent">
            <div className="flex flex-col md:flex-row min-h-[80vh] items-center mt-5">
                <div className="md:w-1/2 flex items-center justify-center p-0 relative order-2 md:order-1 h-full">
                    <Image
                        src="/image-placeholder-diagram.png"
                        alt="Signup illustration"
                        width={600}
                        height={600}
                        style={{ objectFit: 'contain' }}
                        className="w-full h-auto max-w-full"
                        onError={(e) => { e.target.src = "https://placehold.co/600x600/f0f0f0/666666?text=Signup+Art"; }}
                    />
                </div>
                <div className="md:w-1/2 flex items-center justify-center p-6 order-1 md:order-2">
                    {children}
                </div>
            </div>
        </div>
    </main>
);


// --- 3. Individual Page Components (Forms) ---

const SignUpPage = () => (
    <div className="w-full max-w-sm mx-auto p-0">
        <h2 className="text-3xl font-normal text-gray-900 mb-5 text-center">Sign up</h2>
        <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-6">
            <div>
                <label className="block text-base font-normal text-gray-900 mb-1.5">Full Name</label>
                <input type="text" placeholder="Enter your full name" required className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
                <label className="block text-base font-normal text-gray-900 mb-1.5">Email</label>
                <input type="email" placeholder="Enter your email" required className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
                <label className="block text-base font-normal text-gray-900 mb-1.5">Password</label>
                <input type="password" placeholder="Create a password" required className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                <p className="mt-1 text-xs text-gray-500">Use 8+ characters, including a number.</p>
            </div>
            <div>
                <label className="block text-base font-normal text-gray-900 mb-1.5">Confirm Password</label>
                <input type="password" placeholder="Repeat your password" required className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <button type="submit" className="w-full text-white py-3 rounded-full font-normal text-lg hover:opacity-90 transition duration-300 shadow-md mt-10" style={{ backgroundColor: '#5B48CC' }}>
                Create Account
            </button>
        </form>
        <div className="my-8 flex items-center" aria-label="Divider">
            <span className="h-px flex-grow bg-gray-300" />
            <span className="px-4 text-gray-500 text-sm">or</span>
            <span className="h-px flex-grow bg-gray-300" />
        </div>
        <div className="space-y-4">
            <button className="w-full flex items-center justify-center border border-gray-300 bg-white py-3 rounded-lg shadow-sm hover:bg-gray-50 transition duration-300 text-gray-700 font-normal space-x-1">
                <Image src="/google-icon.png" alt="Google" width={20} height={20} />
                <span>Sign up with Google</span>
            </button>
            <button className="w-full flex items-center justify-center bg-gray-900 text-white py-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-300 font-normal space-x-1">
                <Image src="/apple-icon.svg" alt="Apple" width={20} height={20} />
                <span>Sign up with Apple</span>
            </button>
        </div>
        <p className="mt-6 text-xs text-gray-500 text-center">By creating an account you agree to our <Link href="/terms" className="underline" style={{ color: '#5B48CC' }}>Terms</Link> and <Link href="/privacy" className="underline" style={{ color: '#5B48CC' }}>Privacy Policy</Link>.</p>
        <p className="mt-8 text-center text-gray-600 font-normal">Already have an account? <Link href="/login" className="hover:underline ml-1" style={{ color: '#5B48CC' }}>Login</Link></p>
    </div>
);


// --- 4. Main Application Component ---
const SignUpPageWrapper = () => (
    <div className="min-h-screen bg-white">
        <style jsx global>{`
            .text-primary-purple { color: #5B48CC; }
            .bg-primary-purple { background-color: #5B48CC; }
            .hover\\:bg-primary-purple:hover { background-color: #5B48CC; }
            .border-primary-purple { border-color: #5B48CC; }
            .focus\\:border-primary-purple:focus { border-color: #5B48CC; }
            .focus\\:ring-primary-purple:focus { --tw-ring-color: #5B48CC; }
            body { font-family: 'Inter', sans-serif; }
        `}</style>
        <Navbar />
        <AuthContainer>
            <SignUpPage />
        </AuthContainer>
        <Footer />
    </div>

);

export default SignUpPageWrapper;