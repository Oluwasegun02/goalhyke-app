/**
 * File: app/page.js
 * Purpose: Marketing landing page.
 * Header: Uses `components/Navbar` (marketing header only for landing + auth pages).
 */
'use client';

import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import WhatIsGoalHyke from '../components/WhatIsGoalHyke';
import WhoIsItFor from '../components/WhoIsItFor';
import BehavioralSolutions from '../components/BehavioralSolutions';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div>
      <Navbar />
      <Head>
        <title>GoalHyke - Achieve Your Goals</title>
        <meta name="description" content="GoalHyke helps you commit to your goals and achieve them." />
        <link rel="icon" href="/favicon.ico" /> {/* Update with your favicon */}
      </Head>

      <main>
        <HeroSection />
        <HowItWorks />
        <WhatIsGoalHyke />
        <WhoIsItFor />
        <BehavioralSolutions />
      </main>
      <Footer />
    </div>
  );
}