/**
 * Component: WhoIsItFor
 * Purpose: Lists target user outcomes and renders rotating avatar grid.
 * Notes:
 * - Avatar rotation handled by child `RotatingThreeGrid` component below.
 */
import Image from 'next/image';
import { useEffect, useState } from 'react';

const WhoIsItFor = () => {
  const features = [
    "Overcome procrastination",
    "Get in shape",
    "Learn a language",
    "Start meditating",
    "Advance your career",
    "Cultivate healthy habits",
    "And more...",
  ];

  // These would ideally come from a data source or prop
  const avatars = [
    '/avatar-1.jpeg', // Replace with actual paths to your user avatars in public folder
    '/avatar-2.jpeg',
    '/avatar-3.jpeg',
    '/avatar-4.jpeg',
    '/avatar-5.jpeg',
    '/avatar-6.jpeg',
    '/avatar-7.jpeg',
    '/avatar-8.png',
    '/avatar-9.png',
    '/avatar-10.png',
    '/avater-11.jpeg',
    '/avatar-12.jpeg',
  ];

  return (
    <section className="bg-light-gray py-16 md:py-12 md:px-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
            Who&apos;s it For?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Whether you&apos;re a founder, self-improver, or doer,
            our accountability tool will accelerate your success.
          </p>
          <p className="text-lg font-semibold text-gray-800 mb-4">
            goalHyke features are tailored to train you:
          </p>
          <ul className="space-y-3 text-left max-w-md mx-auto md:mx-0">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <RotatingThreeGrid avatars={avatars} />
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;

// 3x3 auto-rotating grid (slides left) at 70% width
const RotatingThreeGrid = ({ avatars }) => {
  const [offset, setOffset] = useState(0);
  const [sliding, setSliding] = useState(false);

  // Duplicate avatars to ensure smooth wrap
  const pool = [...avatars, ...avatars, ...avatars];

  useEffect(() => {
    const interval = setInterval(() => {
      setSliding(true);
      const t = setTimeout(() => {
        setOffset((o) => (o + 1) % pool.length);
        setSliding(false);
      }, 550); // match transition
      return () => clearTimeout(t);
    }, 5000);
    return () => clearInterval(interval);
  }, [pool.length]);

  // Build one row: need 3 visible + 1 buffer for slide
  const buildRow = (rowIndex) => {
    const startIndex = (offset + rowIndex * 3) % pool.length;
    const items = [];
    for (let i = 0; i < 4; i++) items.push(pool[(startIndex + i) % pool.length]);
    return items;
  };

  // Dimensions: avatar size 6rem (w-24 h-24) + gap 0.5rem (gap-2 => 0.5rem)
  // Row width visible = 3 * 6rem + 2 * 0.5rem = 19rem
  // Slide distance = 6rem + 0.5rem = 6.5rem
  const slideRem = 6.5;

  return (
    <div className="w-[80%] max-w-md overflow-hidden" style={{ height: '23rem' }}>
      <div className="flex flex-col gap-2">
        {[0, 1, 2].map((r) => (
          <div
            key={r}
            className="flex gap-2 transition-transform duration-500"
            style={{ transform: sliding ? `translateX(-${slideRem}rem)` : 'translateX(0)' }}
          >
            {buildRow(r).map((src, i) => (
              <div
                key={`${r}-${i}`}
                className="w-24 h-24 rounded-full overflow-hidden shadow-xl ring-4 ring-white/70 bg-gray-100 flex-shrink-0"
              >
                <Image
                  src={src}
                  alt={`Rotating avatar ${r}-${i}`}
                  width={96}
                  height={96}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};