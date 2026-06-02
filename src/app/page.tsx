import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { Mail, Heart } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Home() {
  return (
    <>
      {/* Header / Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Modern Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left side: branding */}
            <div className="text-center md:text-left space-y-1">
              <p className="text-white font-bold text-lg">
                Muhammad Usama Sharif
              </p>
              <p className="text-slate-500 text-sm">
                MERN Stack & Shopify Developer
              </p>
            </div>

            {/* Middle: quick copyright */}
            <div className="text-slate-500 text-xs flex items-center justify-center gap-1">
              <span>&copy; {new Date().getFullYear()}</span>
              <span>&bull;</span>
              <span>All rights reserved</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1 text-slate-400">
                Crafted with <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
              </span>
            </div>

            {/* Right side: social bookmarks */}
            <div className="flex gap-4">
              <a
                href="https://github.com/musa781"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-850 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-usama-sharif-685274304"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-850 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:sharifusama351@gmail.com"
                className="p-2 rounded-lg bg-slate-900 border border-slate-850 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                aria-label="Send Mail"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
