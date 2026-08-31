export default function StatsBar() {
  const stats = [
    {
      value: "4K HD",
      label: "Ultra-High Video Quality",
      description: "Adaptive WebRTC streaming for crystal-clear clarity on any bandwidth.",
    },
    {
      value: "< 50ms",
      label: "Global Latency",
      description: "Ultra-low delay multi-region media servers across 30+ edge locations.",
    },
    {
      value: "99.99%",
      label: "Uptime SLA",
      description: "High availability architecture guaranteed for mission-critical team calls.",
    },
    {
      value: "100+",
      label: "Active Participants",
      description: "Scale seamlessly from 1-on-1 focus chats to massive company all-hands.",
    },
  ];

  return (
    <section className="py-12 bg-[#f7f5f0] border-y border-[#e5e2d8] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col space-y-2 p-6 rounded-2xl bg-white border border-[#e5e2d8] hover:border-[#ff5500]/50 transition-all duration-300 shadow-sm group"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] group-hover:text-[#ff5500] transition-colors">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-slate-800 tracking-tight">
                {stat.label}
              </span>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
