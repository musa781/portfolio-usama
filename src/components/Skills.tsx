"use client";

import React from "react";
import { Cpu, Layout, Server, Database, ShoppingBag, Sparkles } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <Layout className="w-5 h-5 text-violet-400" />,
      skills: [
        "React.js",
        "Next.js",
        "Remix (React Router v7)",
        "Tailwind CSS",
        "Shopify Polaris",
        "JavaScript (ES6+)",
        "TypeScript",
        "jQuery",
        "Bootstrap"
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      skills: [
        "Node.js",
        "Express.js",
        "FastAPI",
        "RESTful APIs",
        "GraphQL",
        "WebSockets",
        "JSON Web Tokens (JWT)",
        "Webhook Integrations"
      ]
    },
    {
      title: "Database & Cloud Infrastructure",
      icon: <Database className="w-5 h-5 text-purple-400" />,
      skills: [
        "MongoDB",
        "PostgreSQL",
        "SQL Server",
        "Git & GitHub",
        "Docker (Basics)",
        "Postman API Testing",
        "Vercel Deployment",
        "Render hosting"
      ]
    },
    {
      title: "Shopify E-commerce",
      icon: <ShoppingBag className="w-5 h-5 text-emerald-400" />,
      skills: [
        "Shopify CLI",
        "Embedded App Development",
        "Liquid Templating",
        "Shopify Admin APIs",
        "Theme Customizations",
        "Checkout Extensions",
        "Store Configurations"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950/40 relative">
      {/* Background Neon Blur */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 text-xs font-semibold tracking-wide backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            My Toolbox
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skillset
          </h2>
          <p className="text-slate-400 text-base">
            A comprehensive matrix of technologies, frameworks, and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-900 bg-slate-900/25 hover:bg-slate-900/50 p-6 md:p-8 hover:border-slate-800 transition-all duration-300 backdrop-blur-sm"
            >
              
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-1.5 rounded-full bg-slate-950 border border-slate-800/80 text-slate-300 hover:text-white hover:border-slate-600 transition-all duration-200 text-sm font-medium hover:scale-105 transform cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
