'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/images/logoxxx-removebg-preview.png"
                alt="Logo de l'Exposition de Peinture"
                width={150}
                height={40}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-900">
              Accueil
            </Link>
            <Link href="/galerie" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Galerie
            </Link>
            <Link href="/a-propos" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              À propos
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu content */}
        {isOpen && (
          <div className="sm:hidden mt-2 space-y-1">
            <Link href="/" className="block text-sm font-medium text-gray-900">
              Accueil
            </Link>
            <Link href="/galerie" className="block text-sm font-medium text-gray-500 hover:text-gray-900">
              Galerie
            </Link>
            <Link href="/a-propos" className="block text-sm font-medium text-gray-500 hover:text-gray-900">
              À propos
            </Link>
            <Link href="/contact" className="block text-sm font-medium text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
