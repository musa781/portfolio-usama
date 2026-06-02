"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, Sparkles } from "lucide-react";

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

export default function Hero() {
  const [activeTitle, setActiveTitle] = useState(0);
  const titles = [
    "MERN Stack Developer",
    "Shopify Expert",
    "Remix & React Engineer",
    "API & Integration Specialist"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#060211]"
    >
      {/* Background Gradients and Glowing Orbs matching Figma Design */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[120px] -z-10" />
      
      {/* Outer grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#130c25_1px,transparent_1px),linear-gradient(to_bottom,#130c25_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 -z-20" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 w-full">
        <div className="flex flex-col items-start text-left space-y-10">
          
          {/* Avatar and Welcome Badge */}
          <div className="flex items-center gap-6">
            <div className="relative">
              {/* Glowing Purple Halo Behind Profile Photo */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 opacity-60 blur-md animate-pulse" />
              
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-violet-500/80 bg-slate-900 shadow-xl shadow-violet-950/40">
                <Image
                  src="/images/profile.jpg"
                  alt="Muhammad Usama Sharif"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Custom arrow and tag matching "Hello! I'm Muhammad Usama Sharif" */}
            <div className="flex flex-col space-y-1 animate-fade-in">
              <div className="flex items-center gap-1 text-slate-400 text-xs font-mono">
                <span>↳</span>
                <span className="text-violet-400 font-semibold uppercase tracking-wider">Hello! I'm</span>
              </div>
              <h2 className="text-white text-lg sm:text-xl font-bold tracking-tight">
                Muhammad Usama Sharif
              </h2>
            </div>
          </div>

          {/* Subtitle line matching: "A developer who judges a book by its cover." */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight">
              A developer who <br />
              judges a book <br />
              by its <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent underline decoration-violet-500/40 decoration-wavy underline-offset-8">cover</span>.
            </h1>

            {/* Futuristic Role Brackets */}
            <div className="flex items-center gap-2 pt-2 text-slate-300 font-mono text-lg sm:text-xl font-bold">
              <span>I'm a</span>
              <span className="bg-slate-900/60 border border-slate-800/80 px-3 py-1 rounded-lg text-violet-400 shadow-inner">
                {titles[activeTitle]}
              </span>
              <span className="w-1.5 h-6 bg-violet-400 animate-pulse ml-0.5" />
            </div>
          </div>

          {/* Software Engineer Sub-description matching Figma text style */}
          <div className="space-y-6 max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed">
            <p className="flex items-center gap-2.5 text-sm text-slate-300 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              Currently a Junior Shopify Developer at <strong className="text-white font-semibold">SystemsD</strong>.
            </p>
            <p>
              A self-taught UI/UX designer and Fullstack MERN Engineer. I create meaningful and delightful digital products that maintain an equilibrium between user needs and business goals.
            </p>
          </div>

          {/* Socials & CTAs */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4 w-full">
            <div className="flex items-center gap-4 text-slate-400">
              <a
                href="https://github.com/musa781"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-900/50 border border-slate-800 hover:border-violet-500 hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-usama-sharif-685274304"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-900/50 border border-slate-800 hover:border-violet-500 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:sharifusama351@gmail.com"
                className="p-3 rounded-full bg-slate-900/50 border border-slate-800 hover:border-violet-500 hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold shadow-lg shadow-violet-600/10 transition-all duration-300"
              >
                View Lab
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/30 text-slate-300 hover:text-white transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
