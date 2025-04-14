'use client';

import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
  logoSrc: string;
  logoAlt?: string;
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc, logoAlt = 'Logo' }) => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
      <Link href="/" className="flex items-center space-x-2">
        <Image src={logoSrc} alt={logoAlt} width={80} height={40} />
      </Link>

      <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-teal-800">
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/changelog">Changelog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/coming-soon">Coming soon</Link>
      </div>

      <div>
        <Link
          href="/get-started"
          className="border border-teal-800 px-6 py-2 rounded-full text-teal-800 font-medium hover:bg-teal-50 transition"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
