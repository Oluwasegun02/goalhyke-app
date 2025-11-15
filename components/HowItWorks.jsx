/**
 * Component: HowItWorks
 * Purpose: Static feature showcase (no slider) with two stacked cards.
 * Notes:
 * - Removed auto-rotation & dots per latest requirements.
 * - Cards remain responsive with image/text layout.
 */
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <section className="bg-white-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-12">
          <span className='bg-blue-600 text-white rounded-full px-3 text-right '>H</span>ow it works
        </h2>

        {/* Card 1 - Milestones */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row rounded-2xl h-64 overflow-hidden bg-blue-600 shadow-xl justify-between">
            <div className="md:w-5/12 bg-yellow-400 flex items-center justify-center p-8 md:rounded-tr-[96px]">
              <div className="w-full max-w-sm justify-center">
                <Image
                  src="/how-it-works-1.PNG"
                  alt="Milestones Illustration"
                  width={200}
                  height={200}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <div className="md:w-6/12 p-8 md:p-12 text-white text-center md:text-left flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4">Milestones</h3>
              <p className="text-lg">
                As you hit your targets, goalHyke will award you special milestones! It&apos;s our way of celebrating your journey and encouraging you to continue striving for growth and success.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 - Progress Consistency */}
        <div>
          <div className="flex flex-col md:flex-row rounded-2xl h-64 overflow-hidden bg-purple-600 shadow-xl justify-between">
            <div className="md:w-6/12 p-8 md:p-12 text-white text-center md:text-left flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-3xl font-bold mb-4">Progress Consistency</h3>
              <p className="text-lg">
                Define meaningful goals and habits to align with your long-term aspirations. Each day, goalHyke will review your progress submissions to ensure you stay on track and accountable.
              </p>
            </div>
            <div className="md:w-5/12 bg-rose-500 flex items-center justify-center p-8 md:rounded-tl-[96px] order-1 md:order-2">
              <div className="w-full max-w-sm">
                <Image
                  src="/how-it-works-2.PNG"
                  alt="Progress Consistency Illustration"
                  width={400}
                  height={300}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;