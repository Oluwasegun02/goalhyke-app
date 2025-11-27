"use client";
/**
 * Component: MiniProfile
 * Purpose: Compact user snapshot (avatar, name, quick stats) for dashboard.
 */
import React from 'react';
import Image from 'next/image';

const MiniProfile = ({ user = { name: 'John Doe', avatar: '/avatar-2.jpeg' }, stats = { goals: 5, habits: 12, streak: 7 } }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-white shadow-lg border border-gray-100 max-w-3xl mx-auto">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-[#4a76ff]/20 bg-gray-50">
          <Image src={user.avatar} alt={user.name} width={80} height={80} sizes="(max-width:640px) 64px, 80px" className="object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
          <p className="text-sm text-gray-500">Committed to growth</p>
        </div>
      </div>
      <div className="flex flex-1 justify-around w-full">
        <Stat label="Goals" value={stats.goals} />
        <Stat label="Habits" value={stats.habits} />
        <Stat label="Streak" value={`${stats.streak}d`} />
      </div>
    </div>
  );
};

const Stat = ({ label, value }) => (
  <div className="text-center">
    <div className="text-2xl font-bold text-[#4a76ff]">{value}</div>
    <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
  </div>
);

export default MiniProfile;
