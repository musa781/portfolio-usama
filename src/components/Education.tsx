"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GraduationCap, Calendar, Award, Sparkles, X, Eye } from "lucide-react";

export default function Education() {
  const [showDegreeModal, setShowDegreeModal] = useState(false);

  const educationList = [
    {
      institution: "COMSATS University Islamabad",
      degree: "Bachelor's Degree, Computer Science",
      duration: "2021 – 2025",
      grade: "B+",
      tag: "Fresh-Graduated",
      hasCertificate: true,
      certTitle: "Bachelor Of Science in Computer Science",
      certThumbnail: "/images/degree.jpg"
    },
    {
      institution: "PAEC Model College",
      degree: "Matric, Inter, FSC-ICS",
      duration: "Aug 2018 – Feb 2020",
      grade: "A+",
      tag: "Computer Science",
      hasCertificate: false
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-950/65 relative overflow-hidden">
      {/* Background Neon Blur */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-950/20 text-violet-300 text-xs font-semibold tracking-wide backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            My Academics
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education History
          </h2>
          <p className="text-slate-400 text-base">
            Detailed view of my academic qualifications, specializations, and earned credentials.
          </p>
        </div>

        {/* Education Timeline/Cards */}
        <div className="space-y-8">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-900 bg-slate-900/20 hover:bg-slate-900/55 p-6 md:p-8 hover:border-slate-800 transition-all duration-300 backdrop-blur-sm shadow-md"
            >
              <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                
                {/* Left Side: Institution and Degree Details */}
                <div className="space-y-4 w-full md:max-w-2xl">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-violet-400">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {edu.institution}
                      </h3>
                      <p className="text-slate-400 text-sm mt-1">
                        {edu.degree}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-400 pt-2">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Award className="w-4 h-4 text-slate-500" />
                      Grade: <strong className="text-white">{edu.grade}</strong>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800/80 text-violet-300 text-xs font-semibold">
                      {edu.tag}
                    </span>
                  </div>
                </div>

                {/* Right Side: Degree Document Thumbnail Preview */}
                {edu.hasCertificate && edu.certThumbnail && (
                  <div className="w-full md:w-auto pt-4 md:pt-0">
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2.5">
                      Academic Credential
                    </p>
                    
                    <div
                      onClick={() => setShowDegreeModal(true)}
                      className="group/degree cursor-pointer relative flex items-center gap-3 p-3.5 rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-900/60 hover:border-violet-500 transition-all duration-300"
                    >
                      {/* Image Thumbnail wrapper */}
                      <div className="relative w-24 h-16 rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
                        <Image
                          src={edu.certThumbnail}
                          alt={edu.certTitle || "Degree document"}
                          fill
                          className="object-cover group-hover/degree:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center opacity-0 group-hover/degree:opacity-100 transition-opacity">
                          <Eye className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      {/* Info label */}
                      <div className="max-w-[200px]">
                        <p className="text-white text-sm font-semibold truncate leading-tight group-hover/degree:text-violet-400 transition-colors">
                          {edu.certTitle}
                        </p>
                        <p className="text-slate-500 text-xxs mt-1 flex items-center gap-1">
                          Click to View Document
                        </p>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

        {/* Degree Full Preview Modal */}
        {showDegreeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md transition-opacity animate-fade-in">
            <div className="relative w-full max-w-4xl rounded-2xl border border-slate-800 bg-slate-900 p-4 md:p-6 overflow-y-auto max-h-[95vh] shadow-2xl animate-scale-in flex flex-col items-center">
              
              {/* Modal header */}
              <div className="w-full flex justify-between items-center mb-4 border-b border-slate-800 pb-3">
                <h3 className="text-white font-bold text-lg md:text-xl truncate">
                  Bachelor Of Science in Computer Science Degree
                </h3>
                <button
                  onClick={() => setShowDegreeModal(false)}
                  className="p-2 rounded-full bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image Frame */}
              <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 p-1 flex items-center justify-center">
                <Image
                  src="/images/degree.jpg"
                  alt="COMSATS Computer Science Degree"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Footer details */}
              <div className="w-full text-center text-slate-400 text-xs mt-4">
                COMSATS University Islamabad &bull; Bachelor of Science in Computer Science Certificate
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
