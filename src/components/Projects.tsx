"use client";

import React, { useState } from "react";
import { Folder, ExternalLink, Sparkles, X, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  category: "Fullstack" | "ML / AI" | "Shopify";
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  github: string;
  live: string;
  mockupUrl: string;
}

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

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Fullstack" | "ML / AI" | "Shopify">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "VisionFlow Plus",
      category: "ML / AI",
      description: "A computer vision platform for training and testing custom ML models interactively.",
      longDescription: "VisionFlow Plus is a comprehensive computer vision platform designed to train, evaluate, and deploy machine learning models directly on the web. It enables users to upload datasets, label images, choose algorithms, and visualize performance in real-time.",
      tech: ["FastAPI", "OpenCV", "Python", "React.js", "WebSockets"],
      features: [
        "Real-time websocket streams reporting epoch loss and training logs.",
        "Interactive polygon labeling tools for object detection bounding boxes.",
        "Direct model evaluation dashboards with validation matrix reports.",
        "Seamless export options to TensorFlow Light and ONNX formats."
      ],
      github: "https://github.com/musa781/visionflow-plus",
      live: "https://visionflow-plus.demo",
      mockupUrl: "visionflow.io/dashboard"
    },
    {
      title: "PledgePop / Shopify App",
      category: "Shopify",
      description: "Pledge Pop — Crowdfunding for Bold Ideas. A crowdfunding app where many people give small amounts of money together to help fund someone's idea, project, or business.",
      longDescription: "PledgePop is a premium custom embedded Shopify app designed to run crowdfunding campaigns directly inside online merchant storefronts. Empowering store owners to test product demand, secure upfront funding, and engage customers for bold new ideas, the app coordinates seamless pledges and dynamic campaign progression metrics.",
      tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Shopify App Bridge", "Shopify Billing API"],
      features: [
        "Interactive crowdfunding widget embedded directly inside the merchant's theme editor.",
        "Fully managed orders and payments handling linked to the Shopify admin dashboard.",
        "Comprehensive database schema tracking campaigns, pledge statuses, and backer logs using PostgreSQL.",
        "Beautiful merchant UI components built with Tailwind CSS, delivering highly responsive metrics."
      ],
      github: "https://github.com/musa781/pledgepop-shopify",
      live: "https://plegde-pop-cursor.vercel.app",
      mockupUrl: "plegde-pop-cursor.vercel.app"
    },
    {
      title: "Property Price Prediction",
      category: "ML / AI",
      description: "A machine learning regression model designed to forecast residential property valuations based on regional factors.",
      longDescription: "This machine learning tool forecasts real estate values by analyzing multi-dimensional housing statistics. Built inside Jupyter Notebooks with Python, the project trains linear regression models to evaluate housing characteristics (e.g., location score, room count, year built, crime rate) and output high-accuracy pricing indexes.",
      tech: ["Python", "Jupyter Notebook", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
      features: [
        "Rigorous exploratory data analysis (EDA) with advanced correlation heatmaps.",
        "Pre-processing pipeline resolving outlier biases, missing values, and high variance.",
        "Comparative models evaluating Ridge, Lasso, and standard Linear Regression.",
        "Interactive prediction form utilizing pickled model weights."
      ],
      github: "https://github.com/musa781/property-prediction",
      live: "https://property-price-prediction-kohl.vercel.app/",
      mockupUrl: "property-price-prediction-kohl.vercel.app"
    },
    {
      title: "Fake News Classifier",
      category: "ML / AI",
      description: "A deep learning NLP classifier filtering true stories from fake news with confidence percentages.",
      longDescription: "An advanced NLP intelligence application designed to combat misinformation on the web. It uses custom deep learning models (TF-IDF vectorizations and recurrent structures) to evaluate the semantic content of raw news articles and classify them as genuine or fake news with confidence percentages.",
      tech: ["Python", "NLP", "TensorFlow", "Flask", "Scikit-Learn"],
      features: [
        "Text pre-processing module applying tokenization, lemmatization, and stop-word filtering.",
        "TF-IDF vectorization mapping term frequency relative to inverse document frequency.",
        "Flask API server serving fast predictions to client-side chrome extensions.",
        "Comprehensive model evaluations achieving 94% accuracy rates."
      ],
      github: "https://github.com/musa781/fake-news-detector",
      live: "https://g9-news-analyzer.vercel.app/",
      mockupUrl: "g9-news-analyzer.vercel.app"
    },
    {
      title: "Live Shopify Store",
      category: "Shopify",
      description: "A live, high-converting Shopify store designed and optimized for modern e-commerce operations, featuring custom liquid sections.",
      longDescription: "A production Shopify storefront engineered and customized for high-growth merchants. Integrating custom theme sections, custom Liquid templates, and fully optimized order/billing processes, this live storefront delivers a premium customer checkout flow and robust conversion rates.",
      tech: ["Shopify", "Liquid", "JavaScript", "HTML5", "CSS3"],
      features: [
        "Custom responsive storefront sections built using modern Liquid layout guidelines.",
        "Full Shopify API integrations coordinating shipping rate calculators.",
        "Lightning-fast page rendering optimized for mobile conversion rates.",
        "Polished user interfaces utilizing high-fidelity custom brand designs."
      ],
      github: "https://github.com/musa781/live-shopify-store",
      live: "https://my-test-website-dun.vercel.app/",
      mockupUrl: "my-test-website-dun.vercel.app"
    }
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  // Helper to render high-fidelity dashboard wireframe mockups dynamically based on project title
  const renderMockupContent = (projectTitle: string) => {
    if (projectTitle.includes("VisionFlow")) {
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-[#0a051d] text-slate-300 font-mono text-xxs leading-normal">
          <div className="flex justify-between items-center border-b border-purple-950 pb-2">
            <span className="text-violet-400 font-semibold">⚡ VISIONFLOW MONITOR</span>
            <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">Epoch 48/50</span>
          </div>
          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="p-2 rounded bg-slate-950/70 border border-slate-900">
              <span className="text-slate-500 block">Loss Rate</span>
              <span className="text-white text-xs font-bold font-sans">0.0245</span>
            </div>
            <div className="p-2 rounded bg-slate-950/70 border border-slate-900">
              <span className="text-slate-500 block">Val Accuracy</span>
              <span className="text-white text-xs font-bold font-sans">98.2%</span>
            </div>
            <div className="p-2 rounded bg-slate-950/70 border border-slate-900">
              <span className="text-slate-500 block">Inference</span>
              <span className="text-white text-xs font-bold font-sans">12ms</span>
            </div>
          </div>
          {/* Simple Vector graph */}
          <div className="flex-1 flex items-end gap-1 px-2 border-b border-l border-purple-950/40 h-20 pt-2">
            <div className="w-full bg-violet-600/30 h-1/6 rounded-t"></div>
            <div className="w-full bg-violet-600/40 h-2/6 rounded-t"></div>
            <div className="w-full bg-violet-600/50 h-3/6 rounded-t"></div>
            <div className="w-full bg-violet-500 h-4/6 rounded-t"></div>
            <div className="w-full bg-cyan-400 h-5/6 rounded-t"></div>
          </div>
          <div className="flex justify-between items-center text-slate-500 pt-2">
            <span>[SYS LOGS] Model validation matrices compiled successfully.</span>
          </div>
        </div>
      );
    }

    if (projectTitle.includes("PledgePop")) {
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-[#070b19] text-slate-300 font-sans leading-normal">
          <div className="flex justify-between items-center border-b border-indigo-950 pb-2">
            <span className="text-indigo-400 font-bold text-xs">PledgePop App Widget</span>
            <span className="text-xxs px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-indigo-300 font-mono">Live Sync</span>
          </div>
          <div className="flex flex-col items-center my-3 space-y-1.5">
            <span className="text-slate-500 text-xxs">CAMPAIGN TARGET</span>
            <div className="relative flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-4 border-slate-900 border-t-indigo-500 flex items-center justify-center">
                <span className="text-xs font-bold text-white">82%</span>
              </div>
            </div>
            <span className="text-white text-xs font-bold">$12,450 / $15,000</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xxs border-t border-indigo-950/40 pt-2">
            <div className="flex flex-col">
              <span className="text-slate-500">Backers Count</span>
              <strong className="text-white text-xs font-bold">142 Pledges</strong>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-slate-500">Days Left</span>
              <strong className="text-indigo-400 text-xs font-bold font-mono">8 Days</strong>
            </div>
          </div>
        </div>
      );
    }

    if (projectTitle.includes("Property")) {
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-[#0a051d] text-slate-300 font-mono text-xxs leading-normal">
          <div className="flex justify-between items-center border-b border-purple-950 pb-2">
            <span className="text-purple-400 font-semibold">🏠 PRICE ESTIMATOR</span>
            <span className="text-slate-500">v1.2.0</span>
          </div>
          <div className="space-y-2 my-2">
            <div className="flex justify-between border-b border-slate-900 pb-1">
              <span>Rooms Count:</span>
              <span className="text-white">4</span>
            </div>
            <div className="flex justify-between border-b border-slate-900 pb-1">
              <span>Location Score:</span>
              <span className="text-white">9.2 / 10</span>
            </div>
            <div className="flex justify-between border-b border-slate-900 pb-1">
              <span>Year Built:</span>
              <span className="text-white">2018</span>
            </div>
          </div>
          <div className="p-2.5 rounded bg-slate-950/80 border border-purple-900/30 text-center space-y-1">
            <span className="text-slate-500 block text-xxs">VALUATION ESTIMATE</span>
            <span className="text-cyan-400 text-sm font-sans font-black">$385,400</span>
          </div>
        </div>
      );
    }

    if (projectTitle.includes("Fake News")) {
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-[#050c18] text-slate-300 font-sans leading-normal">
          <div className="flex justify-between items-center border-b border-slate-900 pb-2">
            <span className="text-slate-400 font-bold text-xs">NLP Article Parser</span>
            <span className="text-xxs text-emerald-400 font-mono flex items-center gap-1">🟢 Connected</span>
          </div>
          <div className="p-3 my-2 rounded bg-slate-950/70 border border-slate-900 space-y-2">
            <div className="h-2 w-3/4 rounded bg-slate-800"></div>
            <div className="h-2 w-full rounded bg-slate-800"></div>
            <div className="h-2 w-1/2 rounded bg-slate-800"></div>
          </div>
          <div className="flex items-center justify-between border-t border-slate-900/50 pt-2">
            <span className="text-xxs text-slate-500">PREDICTION ANALYSIS</span>
            <span className="px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/20 text-emerald-400 text-xxs font-bold">94.8% GENUINE</span>
          </div>
        </div>
      );
    }

    // Default Fallback (Live Shopify Store)
    return (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-[#0b071e] text-slate-300 font-sans leading-normal">
        <div className="flex justify-between items-center border-b border-purple-950 pb-2">
          <span className="text-white font-black text-xs tracking-tight">SHOPIFY MERCHANDISE</span>
          <span className="text-xxs text-slate-500 font-mono">CART (0)</span>
        </div>
        <div className="grid grid-cols-2 gap-3 my-2">
          <div className="rounded border border-slate-900 bg-slate-950/60 p-2 flex flex-col items-center">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-violet-600 to-indigo-600 mb-1.5" />
            <span className="text-xxs text-slate-400">Custom Mug</span>
            <span className="text-white font-bold text-xxs font-mono">$18.99</span>
          </div>
          <div className="rounded border border-slate-900 bg-slate-950/60 p-2 flex flex-col items-center">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-cyan-400 to-violet-600 mb-1.5" />
            <span className="text-xxs text-slate-400">Tech Hoodie</span>
            <span className="text-white font-bold text-xxs font-mono">$49.99</span>
          </div>
        </div>
        <div className="w-full py-1.5 bg-violet-600 hover:bg-violet-500 rounded text-center text-white text-xxs font-bold cursor-pointer">
          Checkout Now
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 bg-[#060211] relative overflow-hidden">
      {/* Background Radial Glow Blobs matching Figma Design */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-violet-900/5 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-indigo-900/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-950/20 text-violet-300 text-xs font-semibold tracking-wide backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Featured Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected Works
          </h2>
          <p className="text-slate-400 text-sm">
            Interactive case-studies mapping fullstack architectures and custom integrations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-20">
          {(["All", "Fullstack", "ML / AI", "Shopify"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-violet-600 text-white shadow-md shadow-violet-600/10"
                  : "bg-slate-900/50 border border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Alternating Staggered Layout matching Figma Screenshot */}
        <div className="space-y-28">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Left/Right Text Detail Area */}
                <div className="w-full lg:w-1/2 flex flex-col space-y-5 text-left order-2 lg:order-1">
                  <div>
                    <span className="text-violet-400 font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
                      {project.category}
                    </span>
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-2xl sm:text-3xl font-black text-white hover:text-violet-400 transition-colors cursor-pointer inline-flex items-center gap-1.5"
                    >
                      {project.title}
                      <ChevronRight className="w-5 h-5 text-slate-500" />
                    </h3>
                  </div>

                  {/* Overlapping Glassmorphic Description Box */}
                  <div className="relative group/box">
                    {/* Glowing card border overlay */}
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover/box:opacity-20 blur-md transition duration-500" />
                    
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="relative rounded-2xl border border-slate-900 bg-[#0d0722]/80 p-6 shadow-xl shadow-slate-950/20 text-slate-300 text-sm leading-relaxed cursor-pointer hover:border-slate-800 transition-colors"
                    >
                      {project.description}
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-[#10092d]/50 border border-slate-900 text-slate-400 text-xxs font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* External Links */}
                  <div className="flex items-center gap-3 pt-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all hover:scale-105"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold shadow-md shadow-violet-600/10 hover:scale-105 transition-all"
                      title="Visit Live Application"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>

                {/* Right/Left Interactive Browser Mockup Container */}
                <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
                  <div className="relative w-full max-w-md group/mockup">
                    {/* Glowing outer halo behind mockup */}
                    <div className="absolute -inset-2 rounded-2xl bg-violet-600/5 opacity-40 blur-xl group-hover/mockup:opacity-70 transition duration-500" />
                    
                    {/* Mockup Frame wrapper */}
                    <div className="relative rounded-2xl border border-slate-800 bg-[#0d0722] overflow-hidden shadow-2xl hover:scale-[1.01] transition-transform duration-500">
                      
                      {/* Browser top-bar */}
                      <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-900 bg-slate-950/80">
                        {/* 3 circle buttons */}
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 block"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 block"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 block"></span>
                        </div>
                        {/* Browser address mock */}
                        <div className="flex-1 max-w-[200px] text-center bg-slate-900 border border-slate-850 px-2 py-0.5 rounded text-slate-500 text-xxs font-mono truncate">
                          {project.mockupUrl}
                        </div>
                        {/* Spacer */}
                        <div className="w-10"></div>
                      </div>

                      {/* Browser mock content page */}
                      <div className="h-52 bg-[#09041a] flex items-center justify-center overflow-hidden">
                        {renderMockupContent(project.title)}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Detail Modal Overlay */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity">
            <div className="relative w-full max-w-3xl rounded-2xl border border-slate-800 bg-[#0c0722] p-6 md:p-8 overflow-y-auto max-h-[90vh] shadow-2xl animate-scale-in">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950 border border-slate-850 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Contents */}
              <div className="space-y-6 text-left">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded bg-[#10082c] border border-slate-800 text-violet-400 text-xs font-semibold tracking-wider uppercase mb-3">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Long Description */}
                <div>
                  <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wide mb-2">Overview</h4>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wide mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="text-slate-400 text-sm flex items-start gap-2.5 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wide mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-slate-950 border border-slate-850 text-slate-300 text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer: Links */}
                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-800/50">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-700 rounded-full bg-slate-950 hover:bg-slate-900 text-white text-sm font-semibold transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GitHub Repo
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-sm font-semibold transition-all shadow-md shadow-violet-600/10"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
