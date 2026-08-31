export default function FeatureGridSection() {
  const features = [
    {
      badge: "Instant Access",
      title: "One-Click Room Creation",
      description: "Launch a live video conference instantly without app installs or login walls for guests. Share secure, customizable links.",
      icon: (
        <svg className="w-6 h-6 text-[#ff5500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      badge: "Deep Work",
      title: "Co-Working Focus Spaces",
      description: "Virtual quiet rooms designed for remote teams to work alongside each other with ambient background soundscapes and pomodoro timers.",
      icon: (
        <svg className="w-6 h-6 text-[#ff5500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      badge: "AI Powered",
      title: "Smart Meeting Summaries",
      description: "Automated live speech-to-text transcribes meetings in real-time, extracting key action items and searchable bullet points.",
      icon: (
        <svg className="w-6 h-6 text-[#ff5500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      ),
    },
    {
      badge: "Enterprise Security",
      title: "End-to-End WebRTC Encryption",
      description: "Peer-to-peer WebRTC security ensures your conversations, video feeds, and shared screens remain private and protected.",
      icon: (
        <svg className="w-6 h-6 text-[#ff5500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-[#f7f5f0] border-t border-[#e5e2d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#355265] text-xs font-bold text-[#e5f67c] uppercase tracking-wider">
            Built for Modern Teams
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1e293b] tracking-tight">
            Everything You Need for <br className="hidden sm:inline" />
            Seamless Remote Collaboration
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Engineered with high performance WebRTC media pipelines, intuitive co-working tools, and enterprise security.
          </p>
        </div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl bg-white p-8 sm:p-10 border border-[#e5e2d8] shadow-sm hover:border-[#ff5500]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-[#f7f5f0] border border-[#e5e2d8] group-hover:bg-[#355265] transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#f7f5f0] text-slate-700 border border-[#e5e2d8]">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#1e293b] group-hover:text-[#ff5500] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="pt-6 flex items-center gap-2 text-sm font-bold text-[#ff5500] group-hover:translate-x-1 transition-transform">
                <span>Learn more</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
