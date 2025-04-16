"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 text-center text-sm text-gray-600 mt-auto space-y-6">
      {/* Footer Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-700 font-medium text-sm">
        <Link href="/about" aria-label="About page">About</Link>
        <Link href="/jobs" aria-label="Jobs page">Jobs</Link>
        <Link href="/press" aria-label="Press page">Press</Link>
        <Link href="/accessibility" aria-label="Accessibility information">Accessibility</Link>
        <Link href="/partners" aria-label="Partners page">Partners</Link>
      </nav>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 text-gray-600 text-xl">
        <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f" />
          <span className="sr-only">Facebook</span>
        </a>
        <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" />
          <span className="sr-only">Instagram</span>
        </a>
        <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-x-twitter" />
          <span className="sr-only">Twitter</span>
        </a>
        <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github" />
          <span className="sr-only">GitHub</span>
        </a>
        <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube" />
          <span className="sr-only">YouTube</span>
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500">
        © 2024 OVCC, Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
