"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const GOOGLE_AUTH_URL = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}/auth/google`
  : "http://localhost:4000/auth/google";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-[#f7f5f0] ${scrolled
          ? "border-b border-[#e5e2d8] shadow-sm py-3"
          : "border-b border-transparent py-4.5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Brand Name */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          {/* <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-[#355265] p-1.5 shadow-sm group-hover:scale-105 transition-all duration-200"> */}
          <Image
            src="/Logo.png"
            alt="StrimLit Logo"
            width={50}
            height={50}
            className="object-contain w-full h-full"
            priority
          />
          {/* </div> */}
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1e293b] group-hover:text-[#ff5500] transition-colors duration-200">
            StrimLit
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <Link
            href="/"
            className="text-sm font-medium text-slate-700 hover:text-[#ff5500] py-2 px-4 rounded-full hover:bg-[#eae7de] transition-all duration-200"
          >
            Home
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium text-slate-700 hover:text-[#ff5500] py-2 px-4 rounded-full hover:bg-[#eae7de] transition-all duration-200"
          >
            Features
          </Link>
          <Link
            href="#interactive"
            className="text-sm font-medium text-slate-700 hover:text-[#ff5500] py-2 px-4 rounded-full hover:bg-[#eae7de] transition-all duration-200"
          >
            Room Types
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-slate-700 hover:text-[#ff5500] py-2 px-4 rounded-full hover:bg-[#eae7de] transition-all duration-200 flex items-center gap-1 group"
          >
            <span>About</span>
            <svg
              className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#ff5500] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
        </nav>

        {/* Desktop Call To Action Button (Solid Titan Orange, NO gradients) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={GOOGLE_AUTH_URL}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#ff5500] hover:bg-[#ff661a] shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <span>Get Started with Google</span>
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Mobile / Tablet Hamburger Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl text-slate-800 hover:text-[#ff5500] hover:bg-[#eae7de] focus:outline-none transition-colors border border-[#e5e2d8]"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Fullscreen Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#f7f5f0] text-[#1e293b] flex flex-col p-6 animate-fade-in md:hidden">
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#e5e2d8]">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-[#355265] p-1">
                <Image
                  src="/Logo.png"
                  alt="StrimLit Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-[#1e293b] tracking-tight">StrimLit</span>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full text-slate-600 hover:text-[#1e293b] bg-slate-200/60 hover:bg-slate-200 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links List */}
          <div className="flex-1 flex flex-col justify-center space-y-6 my-8">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between text-2xl font-bold text-[#1e293b] hover:text-[#ff5500] border-b border-[#e5e2d8] pb-4 transition-colors group"
            >
              <span>Home</span>
              <svg
                className="w-5 h-5 text-[#ff5500] group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between text-2xl font-bold text-[#1e293b] hover:text-[#ff5500] border-b border-[#e5e2d8] pb-4 transition-colors group"
            >
              <span>Features</span>
              <svg
                className="w-5 h-5 text-[#ff5500] group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="#interactive"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between text-2xl font-bold text-[#1e293b] hover:text-[#ff5500] border-b border-[#e5e2d8] pb-4 transition-colors group"
            >
              <span>Room Types</span>
              <svg
                className="w-5 h-5 text-[#ff5500] group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between text-2xl font-bold text-[#1e293b] hover:text-[#ff5500] border-b border-[#e5e2d8] pb-4 transition-colors group"
            >
              <span>About</span>
              <svg
                className="w-5 h-5 text-[#ff5500] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>

          {/* Mobile Bottom CTA */}
          <div className="pt-4 border-t border-[#e5e2d8] space-y-3">
            <a
              href={GOOGLE_AUTH_URL}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 rounded-full text-center text-lg font-bold text-white bg-[#ff5500] hover:bg-[#ff661a] shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Started with Google</span>
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
