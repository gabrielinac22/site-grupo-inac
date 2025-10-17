'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            <Image src="/images/logo-inac.png" alt='Logo Grupo Inac' width={150} height={50} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="font-medium hover:text-blue-600 transition-colors">
              Início
            </Link>
            <Link href="/solucoes" className="font-medium hover:text-blue-600 transition-colors">
              Soluções
            </Link>
            <Link href="/quem-somos" className="font-medium hover:text-blue-600 transition-colors">
              Quem Somos
            </Link>
            <Link href="/contato" className="font-medium hover:text-blue-600 transition-colors">
              Contato
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <Link
              href="/"
              className="block py-2 px-4 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/solucoes"
              className="block py-2 px-4 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Soluções
            </Link>
            <Link
              href="/quem-somos"
              className="block py-2 px-4 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Quem Somos
            </Link>
            <Link
              href="/contato"
              className="block py-2 px-4 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}