/**
 * Component: BehavioralSolutions
 * Purpose: Promotional section highlighting habit solution benefits.
 * Future:
 * - Replace buttons with Links when routes exist.
 */
import Image from 'next/image';

// Assuming 'primary-purple' is the main button color and 'light-purple' is a lighter hover color
const BehavioralSolutions = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12">
          Our Habit Solutions
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12 max-w-4xl mx-auto">
          {/* Left Side: Illustration */}
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image
              src="/habit-solutions-illustration.png" // **Place this image in public folder**
              alt="Habit Solutions Illustration"
              width={300} // Adjust size as needed
              height={300}
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Right Side: Text and Buttons */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              goalHyke <span className="text-primary-purple">commit</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-lg md:max-w-none mx-auto md:mx-0">
              Provides an incentive and accountability tool for committed individuals that
              are looking to leverage behavioral techniques to their advantage and goalHyke
              their goals. Like-minded goal setters can interact, offer support, and share best practices.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <button className="bg-primary-purple text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300 shadow-md">
                SIGN UP
              </button>
              <button className="text-primary-purple border border-primary-purple px-8 py-3 rounded-lg font-semibold hover:bg-primary-purple hover:text-white transition duration-300">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehavioralSolutions;