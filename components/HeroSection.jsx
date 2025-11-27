/**
 * Component: HeroSection
 * Purpose: Landing page hero with highlighted brand word and goal selector.
 * Behavior:
 * - Decorative highlight image behind "goalHYKE" using absolute positioned span.
 * - Goal select box prepared for future dynamic options.
 */
import Image from 'next/image';

const HeroSection = () => {


  const goalHykeStyle = {
    backgroundImage: "url('/goalhyke-highlight.png')",
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
  };

  return (
    <section className="bg-white pt-16 pb-0">
      <div className="mx-auto w-[95vw] px-4 flex flex-col items-center justify-center min-h-[50vh]">
        {/* === Text and Form Area === */}
        <div className="w-full text-center py-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-snug text-gray-900 mb-6 max-w-4xl mx-auto">
            Ready to finally embark on your
            {/* Bold highlight image behind text and bold purple text on top */}
            <span className="relative inline-block px-4 align-middle">
              <span
                className="absolute inset-0 -mx-2 -my-1 bg-[url('/goalhyke-highlight.png')] bg-no-repeat bg-center bg-contain"
                aria-hidden="true"
              />
              <span className="relative text-[#5B48CC] font-extrabold tracking-tight drop-shadow-sm">
                goalHYKE
              </span>
              {/* Sparkle icon */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xl text-black">✨</span>
            </span>
            to your goals?
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            I pursue to
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">

            {/* Updated Select Box:
              - `rounded-full` for fully rounded ends.
              - `appearance-none` is kept to hide the default browser arrow.
              - `relative` container is added to position the custom dropdown icon.
            */}
            <div className="relative w-full sm:w-64">
              <select
                className="px-5 py-3 border border-gray-300 rounded-full shadow-sm focus:ring-primary-purple focus:border-primary-purple text-gray-700 w-full cursor-pointer pr-5" // pr-10 for padding to make space for the icon
              >
                <option>Select Your Goal...</option>
                <option>Fitness</option>
                <option>Career</option>
                {/* Add more options here */}
              </select>

              {/* Custom Dropdown Icon */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            {/* HYKE Button (rounded-full added for visual consistency) */}
            <button className="bg-primary-purple text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 w-full sm:w-auto shadow-md">
              HYKE
            </button>
          </div>
        </div>
      </div>

      {/* === Dashboard Showcase Image === */}
      <div className="mx-auto mt-16 pb-16 w-full flex items-center justify-center">
        {/* Container to hold the wide, centered image */}
        <div className="w-[95vw] px-4">
          <Image
            src="/dashboard-preview.PNG"
            alt="GoalHyke Dashboard Preview"
            width={1200}
            height={700}
            sizes="95vw"
            loading="lazy"
            style={{ objectFit: 'contain' }}
            className="w-full h-auto shadow-2xl rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;