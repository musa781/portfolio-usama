"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#experience" },
    { name: "Lab", href: "#projects" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/40 backdrop-blur-md border-b border-slate-900/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Futuristic Monogram Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="group flex items-center" aria-label="Logo">
              <svg
                width="36"
                height="36"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9 text-violet-400 group-hover:text-cyan-400 transition-colors duration-300"
              >
                {/* Custom stylized futuristic 'U' monogram */}
                <path
                  d="M20 20H32V60C32 68.8366 39.1634 76 48 76H52C60.8366 76 68 68.8366 68 60V20H80V60C80 77.6731 65.6731 92 48 92H52C34.3269 92 20 77.6731 20 60V20Z"
                  fill="currentColor"
                  className="opacity-90"
                />
                <rect x="42" y="32" width="16" height="24" rx="8" fill="#a78bfa" />
              </svg>
            </a>
          </div>

          {/* Center-aligned Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-white transition-all duration-300 text-sm font-semibold tracking-wide relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-violet-500 after:to-cyan-400 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Empty spacer for alignment matching desktop center */}
          <div className="hidden md:block w-9 h-9"></div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900/60 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-5 h-5" /> : <Menu className="h-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-slate-950/90 border-b border-slate-900/50 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="px-6 py-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-300 hover:text-white hover:bg-slate-900/50 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
