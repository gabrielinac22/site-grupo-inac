"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { services } from "@/data/services";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          <Image
            src="/images/logo-inac.png"
            alt="Grupo INAC"
            width={120}
            height={40}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            href="/"
            className="font-medium hover:text-secondary transition-colors"
          >
            Início
          </Link>
          <Link
            href="#solucoes"
            className="font-medium hover:text-secondary transition-colors"
          >
            Soluções
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center font-medium hover:text-secondary transition-colors focus:outline-none">
              Brands
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="bg-white shadow-lg rounded-lg p-1 border border-gray-100"
            >
              {services.map((service) => (
                <DropdownMenuItem
                  key={service.id}
                  asChild
                  className="group flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer
                 text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                >
                  <Link
                    href={`/${service.slug}`}
                    className="flex items-center gap-2 w-full"
                  >
                    <span className="text-gray-500 group-hover:text-secondary transition-colors duration-150">
                      {service.icon}
                    </span>
                    <span className="text-sm font-medium group-hover:text-secondary transition-colors duration-150">
                      {service.title}
                    </span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/quem-somos"
            className="font-medium hover:text-secondary transition-colors"
          >
            Quem Somos
          </Link>
          <Link
            href="/contato"
            className="font-medium hover:text-secondary transition-colors"
          >
            Contato
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-inner">
          <nav className="flex flex-col space-y-3 py-4 px-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>

            <Link
              href="#solucoes"
              className="text-gray-700 hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Soluções
            </Link>

            {/* Dropdown simplificado no mobile */}
            <details className="group">
              <summary className="flex items-center justify-between text-gray-700 hover:text-secondary cursor-pointer font-medium">
                Brands
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-2 pl-3 border-l border-gray-200 flex flex-col space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/${service.slug}`}
                    className="text-sm text-gray-600 hover:text-secondary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </details>

            <Link
              href="/quem-somos"
              className="text-gray-700 hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Quem Somos
            </Link>

            <Link
              href="/contato"
              className="text-gray-700 hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
