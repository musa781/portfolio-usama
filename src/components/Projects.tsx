"use client";

import React, { useState } from "react";
import { Folder, ExternalLink, Sparkles, X, ChevronRight } from "lucide-react";

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

interface Project {
  title: string;
  category: "Fullstack" | "ML / AI" | "Shopify";
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  github: string;
  live: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Fullstack" | "ML / AI" | "Shopify">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "VisionFlow Plus",
      category: "ML / AI",
      description: "A state-of-the-art computer vision platform for training and testing custom machine learning models online.",
      longDescription: "VisionFlow Plus is a comprehensive computer vision ecosystem designed to bridge the gap between machine learning pipelines and intuitive web controls. Built as my university final year project, it enables developers and researchers to upload training data, label image clusters, select training parameters, and validate custom model weights interactively.",
      tech: ["Python", "FastAPI", "OpenCV", "Node.js", "React.js", "MongoDB", "WebSockets"],
      features: [
        "Real-time websocket telemetry stream showing training epochs and loss graphs.",
        "Interactive canvas tool for drawing bounding boxes and assigning class labels.",
        "FastAPI high-performance server managing OpenCV computer vision inferences.",
        "Robust authentication and collaborative workspace models for teams."
      ],
      github: "https://github.com/musa781/visionflow-plus",
      live: "https://visionflow-plus.demo"
    },
    {
      title: "PledgePop / Shopify Crowdfunding App",
      category: "Shopify",
      description: "Pledge Pop — Crowdfunding for Bold Ideas. A crowdfunding app where many people give small amounts of money together to help fund someone's idea, project, or business.",
      longDescription: "PledgePop is a premium custom embedded Shopify app designed to run crowdfunding campaigns directly inside online merchant storefronts. Empowering store owners to test product demand, secure upfront funding, and engage customers for bold new ideas, the app coordinates seamless pledges and dynamic campaign progression metrics.",
      tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Shopify App Bridge", "Shopify Billing API", "Prisma ORM"],
      features: [
        "Interactive crowdfunding widget embedded directly inside the merchant's theme editor.",
        "Fully managed orders and payments handling linked to the Shopify admin dashboard.",
        "Comprehensive database schema tracking campaigns, pledge statuses, and backer logs using PostgreSQL.",
        "Beautiful merchant UI components built with Tailwind CSS, delivering highly responsive metrics."
      ],
      github: "https://github.com/musa781/pledgepop-shopify",
      live: "https://plegde-pop-cursor.vercel.app"
    },
    {
      title: "Property Price Prediction",
      category: "ML / AI",
      description: "A machine learning regression model designed to forecast residential property valuations based on regional factors.",
      longDescription: "This machine learning tool forecasts real estate values by analyzing multi-dimensional housing statistics. Built inside Jupyter Notebooks with Python, the project trains linear regression models to evaluate housing characteristics (e.g., location score, room count, year built, crime rate) and output high-accuracy pricing indexes.",
      tech: ["Python", "Jupyter Notebook", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      features: [
        "Rigorous exploratory data analysis (EDA) with advanced correlation heatmaps.",
        "Pre-processing pipeline resolving outlier biases, missing values, and high variance.",
        "Comparative models evaluating Ridge, Lasso, and standard Linear Regression.",
        "Interactive prediction form utilizing pickled model weights."
      ],
      github: "https://github.com/musa781/property-prediction",
      live: "https://property-prediction.demo"
    },
    {
      title: "Fake News Detection Classifier",
      category: "ML / AI",
      description: "A deep learning Natural Language Processing (NLP) classifier that filters true stories from online misinformation.",
      longDescription: "An advanced NLP intelligence application designed to combat misinformation on the web. It uses custom deep learning models (TF-IDF vectorizations and recurrent structures) to evaluate the semantic content of raw news articles and classify them as genuine or fake news with confidence percentages.",
      tech: ["Python", "NLP (Natural Language Processing)", "Jupyter Notebook", "TensorFlow", "Scikit-Learn", "Flask"],
      features: [
        "Text pre-processing module applying tokenization, lemmatization, and stop-word filtering.",
        "TF-IDF vectorization mapping term frequency relative to inverse document frequency.",
        "Flask API server serving fast predictions to client-side chrome extensions.",
        "Comprehensive model evaluations achieving 94% accuracy rates."
      ],
      github: "https://github.com/musa781/fake-news-detector",
      live: "https://fake-news-detector.demo"
    },
    {
      title: "Live Shopify Store",
      category: "Shopify",
      description: "A live, high-converting Shopify store designed and optimized for modern e-commerce operations, featuring custom liquid sections.",
      longDescription: "A production Shopify storefront engineered and customized for high-growth merchants. Integrating custom theme sections, custom Liquid templates, and fully optimized order/billing processes, this live storefront delivers a premium customer checkout flow and robust conversion rates.",
      tech: ["Shopify", "Liquid", "JavaScript", "HTML5", "CSS3", "Shopify Apps"],
      features: [
        "Custom responsive storefront sections built using modern Liquid layout guidelines.",
        "Full Shopify API integrations coordinating shipping rate calculators.",
        "Lightning-fast page rendering optimized for mobile conversion rates.",
        "Polished user interfaces utilizing high-fidelity custom brand designs."
      ],
      github: "https://github.com/musa781/live-shopify-store",
      live: "https://my-test-website-dun.vercel.app/"
    }
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-slate-950 relative">
      {/* Dynamic Background Blur */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-950/20 text-violet-300 text-xs font-semibold tracking-wide backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            My Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-base">
            Explore a collection of key projects I have built, ranging from scalable web applications to machine learning models.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(["All", "Fullstack", "ML / AI", "Shopify"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-md shadow-violet-600/20"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl border border-slate-900 bg-slate-900/20 hover:bg-slate-900/60 p-6 flex flex-col justify-between hover:border-slate-800 transition-all duration-300 hover:scale-[1.02] transform hover:shadow-xl hover:shadow-violet-600/[0.01]"
            >
              <div>
                {/* Project Header Icons */}
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-violet-400 group-hover:text-cyan-400 transition-colors">
                    <Folder className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-400 text-xxs font-semibold tracking-wider uppercase">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Card Footer: Action Links */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-900/60">
                <span className="flex items-center text-xs font-semibold text-slate-300 group-hover:text-white transition-colors gap-1">
                  Read Details
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all hover:scale-105"
                    title="View GitHub Code"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-semibold transition-all hover:scale-105"
                    title="Visit Live Demo"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal Overlay */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity">
            <div className="relative w-full max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-8 overflow-y-auto max-h-[90vh] shadow-2xl animate-scale-in">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Contents */}
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3">
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
                        className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800/80 text-slate-300 text-xs"
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
