"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles } from "lucide-react";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        console.error("Inquiry Submission Failed:", result);
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Could not connect to the server. Please check your internet connection.");
      console.error("Network Error:", err);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Neon Glow */}
      <div className="absolute bottom-1/4 left-1/10 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute top-1/4 right-1/10 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-950/20 text-violet-300 text-xs font-semibold tracking-wide backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Connect With Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-base">
            Have a project in mind, want to build a Shopify store, or looking to collaborate? Drop me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Details & Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 rounded-2xl border border-slate-900 bg-slate-900/25 p-6 md:p-8 backdrop-blur-sm">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Feel free to contact me via email, phone, or any social networks. I am always happy to discuss new opportunities and technical builds.
              </p>

              {/* Info Items */}
              <div className="space-y-4 pt-4">
                
                {/* Email */}
                <a
                  href="mailto:sharifusama351@gmail.com"
                  className="flex items-center gap-4 group p-3.5 rounded-xl border border-slate-950 bg-slate-950/45 hover:border-slate-800 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-violet-400 group-hover:text-white group-hover:bg-violet-600 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wide">Email Me</p>
                    <p className="text-slate-300 text-sm font-semibold truncate group-hover:text-white transition-colors">
                      sharifusama351@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+923079600970"
                  className="flex items-center gap-4 group p-3.5 rounded-xl border border-slate-950 bg-slate-950/45 hover:border-slate-800 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wide">Call Me</p>
                    <p className="text-slate-300 text-sm font-semibold group-hover:text-white transition-colors">
                      +92 307 9600970
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl border border-slate-950 bg-slate-950/45">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wide">Location</p>
                    <p className="text-slate-300 text-sm font-semibold">
                      Johar Town, Lahore, Pakistan
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Connect links */}
            <div className="pt-6 border-t border-slate-900">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wide mb-4">Connect Socially</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/musa781"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-300"
                  aria-label="GitHub Link"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-usama-sharif-685274304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-300"
                  aria-label="LinkedIn Link"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-900 bg-slate-900/25 p-6 md:p-8 backdrop-blur-sm flex flex-col justify-center">
            {status === "success" ? (
              <div className="text-center py-12 space-y-6 animate-scale-in">
                <div className="inline-flex p-4 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-400">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white">Message Sent Successfully!</h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto">
                    Thank you for reaching out, Usama. I have received your notification and will get back to you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 rounded-full bg-slate-900 border border-slate-850 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-sm font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
                
                {/* Form row: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-850 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-850 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Consultation / Shopify Store Build"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-850 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 transition-all text-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, and technical requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-850 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 transition-all text-sm resize-none"
                  />
                </div>

                {/* Error message banner */}
                {status === "error" && (
                  <div className="p-3 rounded-xl border border-red-500/20 bg-red-950/20 text-red-400 text-xs leading-relaxed animate-scale-in">
                    <strong>Submission Failed:</strong> {errorMessage}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 disabled:from-violet-800 disabled:to-indigo-800 text-white font-semibold transition-all duration-300 shadow-md shadow-violet-600/10 hover:shadow-violet-600/30"
                >
                  {status === "submitting" ? (
                    <>
                      <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
