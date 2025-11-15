/**
 * Component: WhatIsGoalHyke
 * Purpose: Auto-scrolling horizontal avatar carousel introducing the platform.
 * Behavior:
 * - Scrolls by one card width + gap every 5s, wraps to start when at end.
 * - Hides native scrollbars via local CSS.
 */
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const WhatIsGoalHyke = () => {
  // Define users with specific image paths (must be in your public folder)
  const users = [
    { name: "John Doe", goal: "Quit smoking", avatar: "/avatar-10.png" }, // Placeholder Image 1
    { name: "Goal Boy", goal: "Running a marathon", avatar: "/avatar-goal-boy.png" }, // Placeholder Image 2
    { name: "Jane Brown", goal: "Mastering React", avatar: "/avatar-jane-brown.png" },
    { name: "Lara Jane", goal: "Learning Python", avatar: "/avatar-1.jpeg" },// Placeholder Image 3
    // Added more data to ensure scrolling is evident
    { name: "Mike Smith", goal: "Saving $5,000", avatar: "/avatar-1.jpeg" },
    { name: "Sara Connor", goal: "Writing a book", avatar: "/avatar-10.png" },
  ];

  // Custom blue color to match the screenshot
  const sectionBgColor = "bg-[#4a76ff]";
  const carouselRef = useRef(null);

  // --- Auto-Scroll Logic (runs every 5 seconds) ---
  useEffect(() => {
    const scrollContainer = carouselRef.current;
    if (!scrollContainer) return;

    // Use a delay function to manage the interval, allowing for cleanup
    const interval = setInterval(() => {
      // Get the width of the first card element (assuming all cards are the same width)
      const firstCard = scrollContainer.firstChild;
      const isCard = firstCard && firstCard.classList.contains('flex-shrink-0');
      if (!isCard) return;

      const cardWidth = firstCard.offsetWidth;
      // space-x-6 is 1.5rem, or 24px in standard Tailwind config.
      const scrollAmount = cardWidth + 24;

      // Calculate potential new scroll position
      let newScrollLeft = scrollContainer.scrollLeft + scrollAmount;
      let maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      // Check if we hit the end, and wrap around to the start
      // Give a small buffer (e.g., 5px) to account for floating point differences
      if (newScrollLeft >= maxScroll - 5) {
        newScrollLeft = 0; // Wrap back to the start
      }

      scrollContainer.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });

    }, 5000); // 5-second delay

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    // Outer section uses the full-width blue background
    <section className={`py-16 md:py-12 text-center ${sectionBgColor} text-white`}>
      <div className="container mx-auto px-4 h-800 ">

        {/* Title and Highlight - Wrapped in relative div for positioning */}
        <div className="relative inline-block mx-auto mb-4">
          <h2 className="text-3xl md:text-4xl font-extrabold relative z-10">
            What&apos;s goalHYK<span className=" bg-yellow-400 rounded-full p-3 opacity-70">E?</span>
          </h2>
          {/* Yellow circle positioned to overlap the '?' */}

        </div>

        <p className="text-lg max-w-2xl mx-auto mb-12 opacity-90">
          goalHyke is an ever evolving commitment platform with the tools to help you achieve
          your goals. Here are some people from around the world who are goalhyking theirs.
        </p>
      </div>

      {/* --- Relative Wrapper for Carousel (No Controls) --- */}
      <div className="relative max-w-7xl mx-auto ">
        {/* Local CSS to hide all scrollbars while retaining scroll functionality */}
        <style jsx>{`
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          .no-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>

        {/* --- Scrollbar Hiding Wrapper (overflow-x-hidden) --- */}
        {/* Adjusted vertical padding to eliminate potential visual artifacts */}
        <div className="">
          {/* === Scrolling User Goal Cards Container === */}
          <div
            ref={carouselRef}
            // Hides scrollbar using CSS margin/padding trick
            className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory space-x-6 px-4 pb-8 md:px-0"
            // Use standard scrollbar height (17px is typical)
            style={{ marginBottom: '-17px', paddingBottom: '17px' }}
          >
            {users.map((user, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[90vw] sm:w-[80vw] md:w-[31%] bg-white text-gray-800 rounded-3xl shadow-xl p-8 flex flex-col relative overflow-visible snap-start text-left"
                style={{ paddingBottom: '3rem' }} // Added extra bottom padding for the star overlap
              >

                {/* Profile Container: Avatar and Name on the same line, aligned to the LEFT */}
                <div className="flex justify-start items-center space-x-3 mb-6 w-full">

                  {/* Avatar Image */}
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      width={40}
                      height={40}
                      style={{ objectFit: 'cover' }}
                      priority={index < 3}
                    />
                  </div>

                  {/* Name */}
                  <p className="text-lg font-semibold text-black">{user.name}</p>
                </div>

                {/* Goal Text - Placed at the top left of the card */}
                <p className="text-2xl font-normal text-gray-800 mt-0">{user.goal}</p>


                {/* Star icon - Positioned absolutely at the bottom center to overlap the edge */}
                <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full p-2 shadow-lg">
                  <svg className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* --- End Scrollbar Hiding Wrapper --- */}
      </div>
    </section>
  );
};

export default WhatIsGoalHyke;