'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-white">Charan Yelimela</h3>
            <p className="mb-4 max-w-md">
              A passionate Computer Science student focused on Python development, 
              Machine Learning, and Data Analysis. Always eager to learn and grow.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/charanyelimela/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-100 transition-colors"
                aria-label="LinkedIn profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-gray-200">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/charanYelimela334" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-100 transition-colors"
                aria-label="GitHub profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-gray-200">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="hover:text-gray-100 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                📧 <span>Charanyelimela@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                📞 <span>+91 9912446487</span>
              </li>
              <li className="flex items-center gap-2">
                📍 <span>Telangana, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Charan Yelimela. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Designed and developed with <span className="text-red-500">❤</span> using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
