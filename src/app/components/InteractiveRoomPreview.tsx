"use client";

import { useState } from "react";

const GOOGLE_AUTH_URL = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}/auth/google`
  : "http://localhost:4000/auth/google";

export default function InteractiveRoomPreview() {
  const [selectedRoom, setSelectedRoom] = useState<number>(0);

  const rooms = [
    {
      title: "Daily Team Standup",
      subtitle: "Active Speaker & Participant Grid",
      tag: "Best for Agile Teams",
      description: "Fast 15-minute syncs with active speaker spotlight, automatic timekeeper, and instant action item logging.",
      metrics: [
        { label: "Max Capacity", val: "25 Users" },
        { label: "Audio Mode", val: "Adaptive Noise Cancellation" },
        { label: "Tools", val: "Timer, Quick Polls, Shared Notes" },
      ],
      previewText: "Sarah (Host) is speaking about Q3 Sprint goals...",
    },
    {
      title: "1-on-1 Co-Working Room",
      subtitle: "Split Screen & Code Share",
      tag: "Best for Pair Programming",
      description: "Work side-by-side in real-time with dual screen sharing, shared terminal stream, and zero latency video.",
      metrics: [
        { label: "Max Capacity", val: "2 Users" },
        { label: "Video Quality", val: "4K 60FPS Screen Capture" },
        { label: "Tools", val: "Split Canvas, Code Editor, Mic Mute" },
      ],
      previewText: "Alex & David are co-editing backend API endpoints...",
    },
    {
      title: "All-Hands Webinar",
      subtitle: "Stage Broadcast & Q&A Queue",
      tag: "Best for Large Broadcasts",
      description: "Host up to 500 attendees with moderated stage access, interactive Q&A voting, and live recording.",
      metrics: [
        { label: "Max Capacity", val: "500+ Attendees" },
        { label: "Broadcast Mode", val: "HLS / Low Latency WebRTC" },
        { label: "Tools", val: "Stage Request, Upvote Q&A, Polls" },
      ],
      previewText: "CEO Patrick is broadcasting the Company Town Hall...",
    },
    {
      title: "Silent Focus Lounge",
      subtitle: "Ambient Audio & Pomodoro",
      tag: "Best for Deep Concentration",
      description: "Co-work quietly alongside teammates with ambient lo-fi music, customizable pomodoro timers, and status badges.",
      metrics: [
        { label: "Max Capacity", val: "Unlimited" },
        { label: "Audio Mode", val: "Lo-Fi Beats & Binaural White Noise" },
        { label: "Tools", val: "Pomodoro Timer, Status Emoji" },
      ],
      previewText: "Deep focus session running (25m timer active)...",
    },
  ];

  return (
    <section id="interactive" className="py-20 lg:py-28 bg-[#f7f5f0] border-t border-[#e5e2d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#355265] text-xs font-bold text-[#e5f67c] uppercase tracking-wider">
            Interactive Room Selector
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1e293b] tracking-tight">
            Tailored Conference Rooms <br className="hidden sm:inline" />
            for Every Team Ritual
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Choose a room environment designed specifically for the way you work.
          </p>
        </div>

        {/* Room Type Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {rooms.map((room, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedRoom(idx)}
              className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                selectedRoom === idx
                  ? "bg-[#ff5500] text-white shadow-sm scale-105"
                  : "bg-white text-slate-700 hover:bg-[#eae7de] border border-[#e5e2d8]"
              }`}
            >
              {room.title}
            </button>
          ))}
        </div>

        {/* Selected Room Card Display */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#355265] text-white p-6 sm:p-10 border border-[#567488] shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded-lg bg-[#2e4758] border border-white/20 text-xs font-bold text-[#e5f67c]">
                {rooms[selectedRoom].tag}
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {rooms[selectedRoom].title}
                </h3>
                <p className="text-sm font-semibold text-[#e5f67c] mt-1">
                  {rooms[selectedRoom].subtitle}
                </p>
              </div>

              <p className="text-[#d8e2e9] text-sm sm:text-base leading-relaxed">
                {rooms[selectedRoom].description}
              </p>

              {/* Metric badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {rooms[selectedRoom].metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#2e4758] border border-white/20">
                    <div className="text-[11px] text-[#d8e2e9] font-medium">{m.label}</div>
                    <div className="text-xs font-bold text-white mt-0.5">{m.val}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={GOOGLE_AUTH_URL}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#ff5500] hover:bg-[#ff661a] shadow-sm transition-all"
                >
                  <span>Launch This Room</span>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Live Preview Box */}
            <div className="lg:col-span-5 bg-[#233845] rounded-2xl p-5 border border-white/20 space-y-4">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e5f67c] animate-ping" />
                  <span className="text-xs font-bold text-white">Live Stage Feed</span>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#ff5500] text-white">
                  ENCRYPTED
                </span>
              </div>

              <div className="h-40 rounded-xl bg-[#1b2d38] border border-white/10 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-[#ff5500] text-white flex items-center justify-center font-bold text-lg mb-2">
                  ST
                </div>
                <p className="text-xs text-[#d8e2e9] italic max-w-xs">
                  "{rooms[selectedRoom].previewText}"
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-[#d8e2e9] pt-1">
                <span>Latency: ~18ms</span>
                <span>Media: 1080p HD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
