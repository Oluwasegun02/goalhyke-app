"use client";
import React from 'react';
import Link from 'next/link';
import AppHeader from '../../components/AppHeader';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const GOAL_CATEGORIES = [
  { name: 'Exercise regularly', image: '/exercise.png', href: '/goals/exercise' },
  { name: 'Lose weight', image: '/lose.png', href: '/goals/lose-weight' },
  { name: 'Grow wealth', image: '/grow.png', href: '/goals/grow-wealth' },
  { name: 'Strengthen your spirit', image: '/strengthen.png', href: '/goals/strengthen-your-spirit' },
];

const CategoryCard = ({ c }) => (
  <Link href={c.href} className="group bg-white rounded-2xl shadow border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-lg transition">
    <div className="w-24 h-24 mb-4 rounded-full overflow-hidden flex items-center justify-center bg-[#f5f7fa]">
      <Image src={c.image} alt={c.name} width={96} height={96} className="object-contain" />
    </div>
    <h3 className="text-sm font-medium text-gray-800 mb-2 group-hover:text-[#4a76ff]">{c.name}</h3>
    <span className="text-xs font-medium px-4 py-1 rounded-full bg-[#5B48CC] text-white group-hover:opacity-90 transition shadow-sm">Open ↗</span>
  </Link>
);

export default function GoalsIndexPage() {
  return (
    <div className="min-h-screen bg-white flex">
      <div className="hidden lg:block"><Sidebar /></div>
      <div className="flex-1 flex flex-col">
        <AppHeader />
        <main className="p-6 md:p-10 flex-grow">
          <div className="flex justify-center mb-10">
            <h1 className="text-4xl font-normal text-gray-900"><span className="rounded-full bg-[#4a76ff] text-white px-3"><strong>G</strong></span>oals</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {GOAL_CATEGORIES.map(c => <CategoryCard key={c.name} c={c} />)}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
