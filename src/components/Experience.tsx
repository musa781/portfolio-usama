"use client";

import React from "react";
import Image from "next/image";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Junior Shopify Developer",
      company: "SystemsD",
      logo: null,
      duration: "February 2026 - Present (5 Months)",
      location: "Lahore, Punjab, Pakistan",
      details: [
        "Developing premium Shopify online stores, leveraging modern Shopify architecture and configurations.",
        "Customizing themes and templates with custom Liquid styles and Shopify sections.",
        "Collaborating with clients and designers to deliver high-quality, high-converting checkout flows.",
        "Optimizing stores for conversion rate optimization, speed, and mobile responsiveness."
      ],
      skills: ["Shopify Store Setup", "Liquid", "Theme Customizations", "Shopify Polaris", "Conversion Optimization"]
    },
    {
      role: "Back End & Shopify Developer",
      company: "Soft Pulse",
      logo: "/images/softpulse.png",
      duration: "July 2025 - January 2026 (7 Months)",
      location: "Sargodha, Punjab, Pakistan",
      details: [
        "Specialized in the development and design of embedded Shopify applications using Remix (React Router v7) and Shopify CLI.",
        "Crafted robust frontend interfaces with Shopify Polaris, ensuring standard merchant experiences and high responsiveness.",
        "Integrated custom Node.js and REST/GraphQL backend logic to manage Shopify webhooks and store operations.",
        "Authored custom plugins and contributed directly to enhancements of active live-store products."
      ],
      skills: ["Remix (React Router v7)", "Shopify Polaris", "Shopify CLI", "Node.js", "GraphQL", "Webhooks"]
    },
    {
      role: "MERN Stack Web Developer",
      company: "VisaBridge",
      logo: null,
      duration: "March 2025 - July 2025 (5 Months)",
      location: "Lahore, Punjab, Pakistan",
      details: [
        "Built dynamic React-based user interfaces following component-driven development practices.",
        "Seamlessly integrated client-side frontend apps with Node.js/Express API servers and MongoDB database instances.",
        "Developed different real-time scalable projects under the MERN stack paradigm, focusing on smooth data synchronization.",
        "Greatly improved overall UI responsiveness, application code quality, and page performance."
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "MERN Stack"]
    },
    {
      role: "Web Developer Intern",
      company: "VisaBridge",
      logo: null,
      duration: "June 2024 - August 2024 (3 Months)",
      location: "Lahore, Punjab, Pakistan",
      details: [
        "Gained hands-on internship experience in full stack development workflows.",
        "Assisted in maintaining and deploying web application features, writing modular CSS/Tailwind layouts.",
        "Collaborated with senior engineers to troubleshoot database queries and fix client-facing UX glitches."
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Git"]
    },
    {
      role: "Python Developer",
      company: "HackerRank (Remote / Learning)",
      logo: null,
      duration: "February 2023 - July 2023 (6 Months)",
      location: "California, USA (Remote)",
      details: [
        "Earned verified credentials in Python fundamentals, solving complex algorithmic challenges.",
        "Deep-dived into Python scientific data libraries including NumPy, Pandas, and Matplotlib.",
        "Studied machine learning frameworks (Scikit-Learn) and computer vision modules (OpenCV) for basic variant analyses."
      ],
      skills: ["Python", "NumPy", "Pandas", "Scikit-Learn", "OpenCV", "Algorithms"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950/40 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-violet-900/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 text-xs font-semibold tracking-wide backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            My Career Path
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-400 text-base">
            A comprehensive look at my professional timeline, detailing my work in software houses and specialized technical roles.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[17px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-800 text-slate-400 group-hover:border-violet-500 group-hover:text-white transition-all duration-300">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Timestamp on desktop */}
              <div className="hidden md:block absolute -left-[240px] top-2.5 w-48 text-right text-slate-500 font-semibold text-xs tracking-wider">
                {exp.duration.split(" (")[0]}
              </div>

              {/* Card Container */}
              <div className="rounded-2xl border border-slate-900 bg-slate-900/35 hover:bg-slate-900/60 p-6 md:p-8 hover:border-slate-800/80 transition-all duration-300 shadow-md backdrop-blur-sm hover:shadow-lg hover:shadow-violet-600/[0.02]">
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">
                      {exp.role}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-slate-400">
                      <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                        {exp.logo ? (
                          <span className="relative inline-block w-5 h-5 rounded overflow-hidden">
                            <Image
                              src={exp.logo}
                              alt={exp.company}
                              fill
                              className="object-contain"
                            />
                          </span>
                        ) : null}
                        {exp.company}
                      </span>
                      <span className="md:hidden flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Job Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-900">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800/80 text-slate-400 text-xs hover:text-white hover:border-slate-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
