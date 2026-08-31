"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const GOOGLE_AUTH_URL = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}/auth/google`
  : "http://localhost:4000/auth/google";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"grid" | "focus">("grid");

  return (
    <section className="pt-4 pb-16 lg:pt-6 lg:pb-24 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Titan Intake Style Hero Container Card */}
        <div className="relative rounded-[2.5rem] bg-[#355265] border border-[#567488] p-6 sm:p-12 lg:p-16 text-white shadow-xl overflow-hidden">
          <div className="max-w-3xl space-y-6 relative z-10">
            {/* Eyebrow Label */}
            <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#e5f67c] uppercase">
              // NEXT-GEN LIVE VIDEO & CO-WORKING PLATFORM
            </div>

            {/* Headline - SOLID COLOR, NO GRADIENTS */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.1]">
              Meet, Co-work & Collaborate in Real-Time HD
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#d8e2e9] leading-relaxed max-w-2xl font-normal">
              StrimLit brings remote teams together with instant high-definition
              video calls, focus co-working spaces, and automated AI meeting
              summaries.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={GOOGLE_AUTH_URL}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-[#1e293b] bg-[#e5f67c] hover:bg-[#d6e76b] transition-all duration-200 cursor-pointer shadow-sm"
              >
                <span>Start a Free Meeting</span>
                <svg
                  className="w-4 h-4 text-[#1e293b]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

              <Link
                href="#interactive"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#2e4758] border border-white/20 hover:bg-[#253b49] transition-all duration-200"
              >
                <span>Explore Room Types</span>
              </Link>
            </div>

            {/* Feature Pills Footer */}
            <div className="pt-6 flex flex-wrap gap-2.5">
              <span className="px-4 py-1.5 rounded-full bg-[#2e4758] border border-white/20 text-xs font-semibold text-white">
                + NO DOWNLOADS REQUIRED
              </span>
              <span className="px-4 py-1.5 rounded-full bg-[#2e4758] border border-white/20 text-xs font-semibold text-white">
                + END-TO-END ENCRYPTED
              </span>
              <span className="px-4 py-1.5 rounded-full bg-[#2e4758] border border-white/20 text-xs font-semibold text-white">
                + FREE FOREVER TIER
              </span>
            </div>
          </div>

          {/* Hero Interactive Video Mockup Window inside Card */}
          <div className="mt-12 relative max-w-4xl">
            <div className="rounded-2xl bg-[#233845] p-4 sm:p-5 border border-white/20 shadow-2xl relative overflow-hidden">
              {/* Window Controls Header */}
              <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5 pb-3 border-b border-white/15 px-1 sm:px-2">
                <div className="flex items-center gap-2 max-w-full overflow-hidden">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="ml-1 sm:ml-2 text-xs font-semibold text-[#e5f67c] flex items-center gap-1.5 truncate">
                    <span className="w-2 h-2 rounded-full bg-[#e5f67c] animate-ping shrink-0" />
                    <span className="truncate text-[11px] sm:text-xs">StrimLit Room: Engineering Standup</span>
                  </span>
                </div>

                <div className="flex items-center gap-1 sm:gap-2 bg-[#1b2d38] p-1 rounded-lg text-xs font-medium border border-white/10 shrink-0">
                  <button
                    onClick={() => setActiveTab("grid")}
                    className={`px-2.5 sm:px-3 py-1 rounded-md transition-colors text-[11px] sm:text-xs ${
                      activeTab === "grid"
                        ? "bg-[#ff5500] text-white font-bold"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    Grid View (4)
                  </button>
                  <button
                    onClick={() => setActiveTab("focus")}
                    className={`px-2.5 sm:px-3 py-1 rounded-md transition-colors text-[11px] sm:text-xs ${
                      activeTab === "focus"
                        ? "bg-[#ff5500] text-white font-bold"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    Focus Room
                  </button>
                </div>
              </div>

              {/* Grid / Focus Display */}
              {activeTab === "grid" ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 pt-4 pb-2">
                  <div className="relative rounded-xl overflow-hidden min-h-[105px] sm:min-h-[120px] bg-[#294252] border-2 border-[#ff5500] flex flex-col justify-between p-2 sm:p-3">
                    <div className="inline-block px-1.5 py-0.5 rounded bg-black/70 text-[9px] sm:text-[10px] font-semibold text-white truncate max-w-[90%] border border-white/10 self-start z-10">
                      Sarah Lin (Host)
                    </div>
                    <div className="flex-1 flex items-center justify-center pt-2 sm:pt-0">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#ff5500] text-white flex items-center justify-center font-bold text-xs sm:text-base shadow-sm">
                        SL
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden min-h-[105px] sm:min-h-[120px] bg-[#1b2d38] border border-white/10 flex flex-col justify-between p-2 sm:p-3">
                    <div className="inline-block px-1.5 py-0.5 rounded bg-black/70 text-[9px] sm:text-[10px] font-semibold text-white truncate max-w-[90%] border border-white/10 self-start z-10">
                      Alex Mercer
                    </div>
                    <div className="flex-1 flex items-center justify-center pt-2 sm:pt-0">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#355265] text-white flex items-center justify-center font-bold text-xs sm:text-base shadow-sm">
                        AM
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden min-h-[105px] sm:min-h-[120px] bg-[#1b2d38] border border-white/10 flex flex-col justify-between p-2 sm:p-3">
                    <div className="inline-block px-1.5 py-0.5 rounded bg-black/70 text-[9px] sm:text-[10px] font-semibold text-white truncate max-w-[90%] border border-white/10 self-start z-10">
                      David K.
                    </div>
                    <div className="flex-1 flex items-center justify-center pt-2 sm:pt-0">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#355265] text-white flex items-center justify-center font-bold text-xs sm:text-base shadow-sm">
                        DK
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden min-h-[105px] sm:min-h-[120px] bg-[#1b2d38] border border-white/10 flex flex-col justify-between p-2 sm:p-3">
                    <div className="inline-block px-1.5 py-0.5 rounded bg-black/70 text-[9px] sm:text-[10px] font-semibold text-white truncate max-w-[90%] border border-white/10 self-start z-10">
                      Elena R.
                    </div>
                    <div className="flex-1 flex items-center justify-center pt-2 sm:pt-0">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#355265] text-white flex items-center justify-center font-bold text-xs sm:text-base shadow-sm">
                        ER
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="pt-4 pb-2">
                  <div className="rounded-xl aspect-video bg-[#1b2d38] border border-white/10 flex items-center justify-center p-6 text-center">
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-white">
                        Focus Co-Working Active
                      </h4>
                      <p className="text-xs text-[#d8e2e9]">
                        Ambient soundscapes & pomodoro timer enabled
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
