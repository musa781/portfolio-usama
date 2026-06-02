"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950"
    >
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl -z-10 animate-pulse duration-8000" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse duration-5000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-violet-900/5 to-cyan-800/5 rounded-full blur-3xl -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 -z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-7 text-left space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-950/30 text-violet-300 text-xs font-semibold tracking-wide backdrop-blur-sm animate-fade-in">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Freelance & Full-time Roles
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                  Muhammad Usama Sharif
                </span>
              </h1>

              {/* Animated Text Subtitle */}
              <div className="h-12 flex items-center">
                <span className="text-xl sm:text-2xl font-bold text-slate-300">
                  A{" "}
                  <span className="text-transparent bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text inline-block transition-all duration-500">
                    {titles[activeTitle]}
                  </span>
                </span>
              </div>

              <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
                Computer Science graduate specializing in building scalable full-stack web applications and robust Shopify stores. I integrate modern frontend frameworks with robust backend systems to deliver elegant, high-impact digital experiences.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-slate-400">
              <a
                href="https://github.com/musa781"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-violet-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-usama-sharif-685274304"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-violet-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:sharifusama351@gmail.com"
                className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-violet-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label="Email Address"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-violet-600/10 hover:shadow-violet-600/30 transition-all duration-300 hover:scale-[1.02] transform"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-white font-semibold transition-all duration-300 hover:scale-[1.02] transform"
              >
                Let's Talk
              </a>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-900 max-w-xl">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">1+</p>
                <p className="text-slate-500 text-xs sm:text-sm">Year Experience</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">10+</p>
                <p className="text-slate-500 text-xs sm:text-sm">Projects Built</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">4+</p>
                <p className="text-slate-500 text-xs sm:text-sm">ML/AI Models</p>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Outer Glowing Accents */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 opacity-30 blur-lg group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
              
              {/* Card Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/90 p-3 flex flex-col justify-between hover:scale-[1.01] transition-transform duration-500">
                {/* Embedded Profile Image */}
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-950">
                  <Image
                    src="/images/profile.jpg"
                    alt="Muhammad Usama Sharif"
                    fill
                    sizes="(max-w-72px) 100vw, 384px"
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
