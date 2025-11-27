/**
 * Component: Footer
 * Purpose: Site-wide marketing footer (not app dashboard footer variant).
 * Sections:
 * - Logo & social icons.
 * - General navigation links.
 * - Legal links.
 * Notes:
 * - Replace placeholder social hrefs (#) with real profiles.
 */
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  // Assuming 'dark-gray' in tailwind.config is the dark background color (#12121e or similar)
  return (
    <footer className="bg-dark-gray text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">

        {/* === Column 1: Logo, Copyright, and Socials === */}
        <div className="text-center md:text-left">
          {/* Logo/Name - Changed to match the text "LOGO" in the screenshot */}
          <Link href="/" className="inline-flex items-center justify-center md:justify-start space-x-2 mb-4">
            {/* The screenshot shows "LOGO" text, not necessarily an image */}
             <Image src="/logo.jpg" alt="Goal Hyke Logo" width={32} height={32} loading="lazy" />
            <span className="text-xl font-bold text-white uppercase">LOGO</span>
          </Link>

          {/* Copyright */}
          {/* Using a margin-top of 8 for spacing */}
          <p className="text-sm mt-8">© 2025 Copyright goalHyke.com - All rights reserved</p>

          {/* Social Icons - Using simple SVG placeholders for assured icon functionality */}
          <div className="flex space-x-6 mt-6 justify-center md:justify-start">
            {/* Facebook Icon */}
            <a href="#" aria-label="Facebook" className="hover:text-white transition duration-300">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-3 8h-2v2h2v3h-2v7h-3v-7h-2v-3h2V6.5a3 3 0 0 1 3-3h3v3.5z" /></svg>
            </a>
            {/* YouTube Icon */}
            <a href="#" aria-label="YouTube" className="hover:text-white transition duration-300">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-1.3-.35-2.922-.54-4.872-.54-1.95 0-3.57.19-4.87.54C8.51 3.535 7.824 4.19 7.42 5.002c-.4.81-1.3 3.65-1.3 7.02s.9 6.21 1.3 7.02c.404.813 1.09 1.467 2.453 1.817 1.3.35 2.922.54 4.872.54 1.95 0 3.57-.19 4.87-.54 1.362-.35 2.048-1.004 2.452-1.817.4-.81.9-3.65.9-7.02s-.5-6.21-.9-7.02c-.404-.813-1.09-1.467-2.453-1.817zM10 15V9l5 3z" /></svg>
            </a>
            {/* Instagram Icon */}
            <a href="#" aria-label="Instagram" className="hover:text-white transition duration-300">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07c3.275.143 4.417 1.155 4.56 4.417.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.143 3.262-1.155 4.417-4.56 4.56-1.265.058-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.262-.143-4.417-1.155-4.56-4.417-.058-1.265-.069-1.645-.069-4.849 0-3.205.012-3.584.069-4.849.143-3.262 1.155-4.417 4.56-4.56 1.265-.058 1.645-.069 4.849-.069zM12 4.887c-3.193 0-3.535.012-4.792.069-2.927.127-3.955 1.06-4.088 3.955-.057 1.258-.068 1.6-.068 4.792 0 3.193.012 3.535.068 4.792.133 2.894 1.161 3.955 4.088 4.088 1.258.057 1.6.068 4.792.068 3.193 0 3.535-.012 4.792-.068 2.894-.133 3.955-1.161 4.088-4.088.057-1.258.068-1.6.068-4.792 0-3.193-.012-3.535-.068-4.792-.133-2.894-1.06-3.955-4.088-4.088-1.258-.057-1.6-.068-4.792-.068zm0 2.22c-2.75 0-4.99 2.24-4.99 4.99s2.24 4.99 4.99 4.99 4.99-2.24 4.99-4.99-2.24-4.99-4.99-4.99zm0 8.216c-1.782 0-3.226-1.444-3.226-3.226s1.444-3.226 3.226-3.226 3.226 1.444 3.226 3.226-1.444 3.226-3.226 3.226zm4.848-8.286c-.45 0-.816-.367-.816-.816s.367-.816.816-.816c.45 0 .816.367.816.816s-.367.816-.816.816z" /></svg>
            </a>
          </div>
        </div>

        {/* === Column 2: General Links === */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-white mb-4">General</h4>
          <ul className="space-y-2">
            <li><Link href="/about-us" className="hover:text-white transition duration-300">About us</Link></li>
            <li><Link href="/help-center" className="hover:text-white transition duration-300">Help Center</Link></li>
            <li><Link href="/contact-us" className="hover:text-white transition duration-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* === Column 3: Legal Links === */}
        {/* The design implies a hidden or empty title for this column */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-white mb-4 invisible h-6">Title</h4> {/* Invisible but maintains alignment */}
          <ul className="space-y-2">
            <li><Link href="/terms-of-use" className="hover:text-white transition duration-300">Terms of Use</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white transition duration-300">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;