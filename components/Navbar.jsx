/**
 * Component: Navbar
 * Scope: Marketing-only pages (/, /login, /signup). Not used on app pages.
 * Behavior:
 * - Centers secondary links on desktop in a blue pill.
 * - Highlights active auth buttons (Log in / Sign up).
 * - Collapsible mobile menu with accessible toggle.
 */
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((v) => !v);

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.jpg" alt="Goal Hyke Logo" width={32} height={32} loading="lazy" />
          <span className="text-xl font-bold text-gray-800">Goal Hyke</span>
        </Link>

        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <div className="bg-blue-500 text-white rounded-full px-4 py-2 flex items-center space-x-4">
            <Link href="/how-it-works" className="px-3 py-1 rounded-full hover:bg-blue-600 transition">HOW IT WORKS</Link>
            <Link href="/about" className="px-3 py-1 rounded-full hover:bg-blue-600 transition">ABOUT US</Link>
            <Link href="/contact" className="px-3 py-1 rounded-full hover:bg-blue-600 transition">HELP CENTER</Link>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-3">
          {['/login', '/signup'].map((route) => {
            const isActive = pathname === route;
            const label = route === '/login' ? 'LOG IN' : 'SIGN UP';
            return (
              <Link
                key={route}
                href={route}
                className={
                  `px-5 py-2 rounded-full border border-[#5B48CC] text-sm font-semibold transition duration-300 ` +
                  (isActive
                    ? 'bg-primary-purple text-white shadow-sm'
                    : 'text-[#5B48CC] hover:bg-primary-purple/10')
                }
              >
                {label}
              </Link>
            );
          })}
        </div>
        <div className="md:hidden">
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-purple"
          >
            {open ? (
              // Close (X) icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="container mx-auto px-4 pt-2 pb-4 space-y-2 border-t">
          <div className="flex flex-col space-y-1">
            <Link href="/how-it-works" className="px-3 py-2 rounded-md hover:bg-gray-100" onClick={closeMenu}>
              HOW IT WORKS
            </Link>
            <Link href="/about" className="px-3 py-2 rounded-md hover:bg-gray-100" onClick={closeMenu}>
              ABOUT US
            </Link>
            <Link href="/contact" className="px-3 py-2 rounded-md hover:bg-gray-100" onClick={closeMenu}>
              HELP CENTER
            </Link>
          </div>

          <div className="pt-2 flex flex-col space-y-3">
            {['/login', '/signup'].map((route) => {
              const isActive = pathname === route;
              const label = route === '/login' ? 'LOG IN' : 'SIGN UP';
              return (
                <Link
                  key={route}
                  href={route}
                  onClick={closeMenu}
                  className={
                    `px-5 py-2 rounded-full border border-[#5B48CC] text-sm font-semibold text-center transition duration-300 ` +
                    (isActive
                      ? 'bg-primary-purple text-white shadow-sm'
                      : 'text-[#5B48CC] hover:bg-primary-purple/10')
                  }
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;