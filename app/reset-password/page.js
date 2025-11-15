"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AuthContainer = ({ children }) => (
    <main className="flex items-center justify-center py-16 px-4 min-h-[90vh]">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl w-full">
            <div className="flex flex-col md:flex-row min-h-[70vh]">
                <div className="md:w-1/2 bg-gray-200 flex items-center justify-center p-8">
                    <Image 
                        src="/image.png"
                        alt="Security Illustration"
                        width={500}
                        height={500}
                        style={{ objectFit: 'contain' }}
                        className="w-full max-w-sm h-auto"
                    />
                </div>
                <div className="md:w-1/2 flex items-center justify-center p-6 sm:p-12">
                    {children}
                </div>
            </div>
        </div>
    </main>
);

const ResetPasswordPage = () => (
    <div className="w-full max-w-lg mx-auto p-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-center sm:text-left">Reset Password</h2>
        <p className="text-gray-600 mb-8 text-center sm:text-left">
            Enter your email address and we&apos;ll send you a link to reset your password.
        </p>

        <form onSubmit={(e) => { e.preventDefault(); /* Handle Reset */ }} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" placeholder="Enter your email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-purple focus:border-primary-purple" />
            </div>

            <button type="submit" className="w-full bg-primary-purple text-white py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition duration-300 shadow-md">
                Send Reset Link
            </button>
        </form>

        <p className="mt-8 text-center text-gray-600">
            Remember your password? <Link href="/login" className="text-primary-purple font-semibold hover:underline">Back to Login</Link>
        </p>
    </div>
);

const ResetPasswordPageWrapper = () => (
    <div className="min-h-screen bg-gray-50">
         <style jsx global>{`
            .text-primary-purple { color: #5B48CC; }
            .bg-primary-purple { background-color: #5B48CC; }
            .border-primary-purple { border-color: #5B48CC; }
            .focus\\:border-primary-purple:focus { border-color: #5B48CC; }
            .focus\\:ring-primary-purple:focus { --tw-ring-color: #5B48CC; }
            body { font-family: 'Inter', sans-serif; }
        `}</style>
        <AuthContainer>
            <ResetPasswordPage />
        </AuthContainer>
    </div>
);

export default ResetPasswordPageWrapper;
