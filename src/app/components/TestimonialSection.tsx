export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "StrimLit replaced 3 different tools for our engineering team. We go from silent co-working focus sessions directly into daily standups without changing tabs.",
      author: "Marcus Chen",
      role: "VP of Engineering at TechFlow",
      avatar: "MC",
      highlight: "Saved 5+ hours/week per developer",
    },
    {
      quote: "The 4K video clarity and sub-50ms latency feel like we're in the exact same room. The automated AI summaries save our leads an hour after every meeting.",
      author: "Samantha Wright",
      role: "Head of Product at Nexus Media",
      avatar: "SW",
      highlight: "Zero video lag during all-hands",
    },
    {
      quote: "Setting up custom conference rooms took seconds. Our clients love that they can join calls with one click without creating an account.",
      author: "David Vance",
      role: "Director of Operations at Apex Global",
      avatar: "DV",
      highlight: "100% guest access retention",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#f7f5f0] border-t border-[#e5e2d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#355265] text-xs font-bold text-[#e5f67c] uppercase tracking-wider">
            Customer Stories
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1e293b] tracking-tight">
            Loved by Fast-Moving Remote Teams
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            See how companies use StrimLit to host live calls, boost co-working focus, and simplify meetings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white p-8 border border-[#e5e2d8] shadow-sm hover:border-[#ff5500]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#f7f5f0] text-[#ff5500] text-xs font-bold border border-[#e5e2d8]">
                  {t.highlight}
                </span>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#e5e2d8] flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-full bg-[#355265] text-[#e5f67c] font-bold flex items-center justify-center text-sm">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1e293b]">{t.author}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
