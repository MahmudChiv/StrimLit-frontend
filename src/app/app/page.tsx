"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface UserProfile {
  id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  googleId?: string;
}

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

export default function AppPage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [meetingCode, setMeetingCode] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNewMeetingModalOpen, setIsNewMeetingModalOpen] = useState(false);
  const [generatedRoomLink, setGeneratedRoomLink] = useState("");
  const [copied, setCopied] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);

  // Fetch current user status from backend /auth/me
  useEffect(() => {
  async function fetchMe() {
    try {
      const res = await fetch(`${BACKEND_URL}/auth/me`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      console.log(`User fetched from 37: ${await res.json()}`)

      if (res.ok) {
        const data = await res.json();
        console.log(`User data fetched: ${data.me}`)
        setUser(data.me || data);
      } else {
        console.log("Couldn't fetch user");
        // window.location.href = "/";
      }
    } catch (error) {
      console.log(`Error, couldn't fetch user: ${error}`);
      window.location.href = "/";
    }
  }

  fetchMe(); // called exactly once
}, []);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle creating a new instant meeting
  const handleCreateNewMeeting = async () => {
    // const randomCode = `strim-${Math.random().toString(36).substring(2, 6)}-${Math.random().toString(36).substring(2, 6)}`;
    // const fullLink = `${window.location.origin}/room/${randomCode}`;

    const res = await fetch(`${BACKEND_URL}/meeting/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    const fullLink = data.meetingUrl;
    setGeneratedRoomLink(fullLink);
    setIsNewMeetingModalOpen(true);
  };

  // Handle joining a meeting with code or link
  const handleJoinMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    if (!meetingCode.trim()) return;
    const cleanCode = meetingCode
      .trim()
      .replace(/^https?:\/\/[^\/]+\/meeting\/+\/room\//, "");
    window.location.href = `/meeting/room/${cleanCode}`;
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await fetch(`${BACKEND_URL}/auth/logout`, {
        method: "GET",
        credentials: "include",
      });
    } catch {
      // Ignore network errors
    }
    window.location.href = "/";
  };

  // Copy link to clipboard
  const handleCopyLink = () => {
    if (!generatedRoomLink) return;
    navigator.clipboard.writeText(generatedRoomLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const displayName = user
    ? user.firstName || user.email?.split("@")[0] || "User"
    : "User";
  const userInitials =
    user?.avatar ??
    displayName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#1e293b] flex flex-col font-sans">
      {/* TOP BAR */}
      <header className="sticky top-0 z-40 w-full bg-[#f7f5f0] border-b border-[#e5e2d8] py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 sm:gap-4">
          {/* Top-Left: Logo + Text (Order 1 on mobile & desktop) */}
          <Link
            href="/app"
            className="order-1 flex items-center gap-3 group focus:outline-none"
          >
            <Image
              src="/Logo.png"
              alt="StrimLit Logo"
              width={40}
              height={40}
              className="object-contain w-9 h-9 sm:w-10 sm:h-10 group-hover:scale-105 transition-transform duration-200"
              priority
            />
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1e293b] group-hover:text-[#ff5500] transition-colors">
              StrimLit
            </span>
          </Link>

          {/* Top-Right on Mobile (Order 2 on mobile, Order 3 on desktop): User Avatar + Profile CTA */}
          <div className="order-2 sm:order-3 relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2.5 p-1.5 rounded-full bg-white border border-[#e5e2d8] hover:border-[#ff5500] transition-all focus:outline-none cursor-pointer shadow-sm"
              aria-label="User profile menu"
            >
              {user?.avatar ? (
                <Image
                  src={user.avatar}
                  alt={displayName}
                  width={34}
                  height={34}
                  className="w-8 h-8 rounded-full object-cover border border-slate-200"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-[#355265] text-[#e5f67c] font-bold flex items-center justify-center text-xs shadow-sm">
                  {userInitials || "U"}
                </div>
              )}
              <span className="text-xs font-semibold text-[#1e293b] hidden md:inline pr-1">
                {displayName}
              </span>
              <svg
                className="w-4 h-4 text-slate-500 pr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* User Profile Dropdown Modal */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-white border border-[#e5e2d8] shadow-xl p-4 text-[#1e293b] z-50 animate-fade-in space-y-4">
                {/* Header Profile Summary */}
                <div className="flex items-center gap-3 pb-3 border-b border-[#e5e2d8]">
                  {user?.avatar ? (
                    <Image
                      src={user.avatar}
                      alt={displayName}
                      width={44}
                      height={44}
                      className="w-11 h-11 rounded-full object-cover border border-slate-200"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-[#355265] text-[#e5f67c] font-bold flex items-center justify-center text-base shadow-sm">
                      {userInitials || "U"}
                    </div>
                  )}
                  <div className="overflow-hidden">
                    <h4 className="text-sm font-bold text-[#1e293b] truncate">
                      {displayName}
                    </h4>
                    <p className="text-xs text-slate-500 truncate">
                      {user?.email || "user@strimlit.com"}
                    </p>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded bg-[#f7f5f0] text-[#ff5500] text-[10px] font-semibold border border-[#e5e2d8]">
                      Google Authenticated
                    </span>
                  </div>
                </div>

                {/* Profile Options */}
                <div className="space-y-1 text-xs">
                  <div className="p-2 rounded-lg bg-[#f7f5f0] border border-[#e5e2d8] flex items-center justify-between text-slate-700">
                    <span>Account Status</span>
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active Pro
                    </span>
                  </div>
                </div>

                {/* Logout Action */}
                <div className="pt-2 border-t border-[#e5e2d8]">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold text-red-600 hover:text-white bg-red-50 hover:bg-red-600 border border-red-200 transition-all cursor-pointer"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5"
                      />
                    </svg>
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Top-Center on Desktop (Order 3 on mobile, Order 2 on desktop): Enter meeting link/code input + New Meeting button */}
          <form
            onSubmit={handleJoinMeeting}
            className="order-3 sm:order-2 flex items-center gap-2.5 w-full sm:w-auto max-w-md bg-white p-1.5 rounded-full border border-[#e5e2d8] focus-within:border-[#ff5500] transition-all shadow-sm"
          >
            <div className="flex items-center pl-3 text-slate-400">
              <svg
                className="w-5 h-5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={meetingCode}
              onChange={(e) => setMeetingCode(e.target.value)}
              placeholder="Enter meeting link or code"
              className="w-full bg-transparent text-sm text-[#1e293b] placeholder-slate-400 focus:outline-none px-2 py-1"
            />
            {meetingCode.trim() ? (
              <button
                type="submit"
                className="px-4 py-2 rounded-full text-xs font-bold text-white bg-[#ff5500] hover:bg-[#ff661a] transition-all shrink-0 cursor-pointer"
              >
                Join
              </button>
            ) : null}

            {/* New Button beside space bar for creating new meeting */}
            <button
              type="button"
              onClick={handleCreateNewMeeting}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#ff5500] hover:bg-[#ff661a] shadow-sm transition-all shrink-0 cursor-pointer"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span className="whitespace-nowrap">New meeting</span>
            </button>
          </form>
        </div>
      </header>

      {/* MAIN BODY OF THE APP */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full bg-[#355265] rounded-3xl border border-[#567488] p-6 sm:p-12 text-center shadow-xl space-y-8 relative overflow-hidden text-white">
          {/* Heading */}
          <div className="space-y-2 relative z-10">
            <h1 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
              Premium Video Meetings & Co-Working
            </h1>
            <p className="text-[#d8e2e9] text-sm sm:text-base max-w-lg mx-auto">
              Connect with your team, share ideas, and work together in
              crystal-clear HD.
            </p>
          </div>

          {/* Render the join_meeting.png illustration image */}
          <div className="relative w-full max-w-md mx-auto aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-white/20 bg-[#233845] flex items-center justify-center">
            <Image
              src="/join_meeting.png"
              alt="Join Meeting Illustration"
              width={500}
              height={380}
              className="object-contain w-full h-full p-2"
              priority
            />
          </div>

          {/* Main Body CTA Button for New Meeting */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              onClick={handleCreateNewMeeting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-[#1e293b] bg-[#e5f67c] hover:bg-[#d6e76b] shadow-md transition-all cursor-pointer"
            >
              <svg
                className="w-5 h-5 text-[#1e293b]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span>New meeting</span>
            </button>

            <button
              onClick={() => {
                const code = prompt("Enter meeting link or room code:");
                if (code) {
                  const cleanCode = code
                    .trim()
                    .replace(/^https?:\/\/[^\/]+\/meeting\/+\/room\//, "");
                  window.location.href = `/meeting/room/${cleanCode}`;
                }
              }}
              className="w-full sm:w-auto px-7 py-4 rounded-full text-base font-semibold text-white bg-[#2e4758] hover:bg-[#253b49] border border-white/20 transition-all cursor-pointer"
            >
              Join with a code
            </button>
          </div>

          {/* Quick info footer */}
          <p className="text-xs text-[#d8e2e9] pt-2">
            Tip: Share your meeting link directly with team members to join
            instantly without registration.
          </p>
        </div>
      </main>

      {/* NEW MEETING MODAL */}
      {isNewMeetingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="max-w-md w-full bg-[#355265] border border-[#567488] rounded-3xl p-6 space-y-6 text-white shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5500]" />
                Here's your meeting link
              </h3>
              <button
                onClick={() => setIsNewMeetingModalOpen(false)}
                className="p-1 rounded-full text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <p className="text-xs text-[#d8e2e9] leading-relaxed">
              Copy this link and send it to people you want to meet with. Be
              sure to save it so you can use it later.
            </p>

            <div className="flex items-center gap-2 bg-[#233845] p-2 rounded-2xl border border-white/20">
              <input
                type="text"
                readOnly
                value={generatedRoomLink}
                className="w-full bg-transparent text-xs text-white focus:outline-none px-2 font-mono truncate"
              />
              <button
                onClick={handleCopyLink}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${copied
                    ? "bg-emerald-500 text-white"
                    : "bg-[#ff5500] hover:bg-[#ff661a] text-white"
                  }`}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setIsNewMeetingModalOpen(false)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-300 hover:bg-white/10 transition-all cursor-pointer"
              >
                Cancel
              </button>
              <a
                href={generatedRoomLink}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-[#1e293b] bg-[#e5f67c] hover:bg-[#d6e76b] transition-all cursor-pointer"
              >
                Start Meeting Now
              </a>
            </div>
          </div>
        </div>
      )}

      {/* App Footer */}
      <footer className="py-6 border-t border-[#e5e2d8] text-center text-xs text-slate-500 bg-[#f7f5f0]">
        <p>StrimLit Workspace • Real-Time HD Collaboration</p>
      </footer>
    </div>
  );
}
