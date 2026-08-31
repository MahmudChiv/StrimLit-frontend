import Link from "next/link";

const GOOGLE_AUTH_URL = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}/auth/google`
  : "http://localhost:4000/auth/google";

export default function CtaBanner() {
  return (
    <section id="get-started" className="py-16 lg:py-24 bg-[#f7f5f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Solid Titan Slate Card Container (NO gradients) */}
        <div className="rounded-[2.5rem] bg-[#355265] border border-[#567488] p-8 sm:p-14 lg:p-16 text-center text-white shadow-xl space-y-8 relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2e4758] border border-white/20 text-xs font-semibold text-[#e5f67c]">
            <span>⚡ INSTANT SETUP • NO CREDIT CARD REQUIRED</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white">
            Ready to Elevate Your Team's <br className="hidden sm:inline" />
            Live Video Calls & Co-Working?
          </h2>

          <p className="text-base sm:text-xl text-[#d8e2e9] max-w-2xl mx-auto leading-relaxed">
            Join thousands of remote professionals and teams meeting live on StrimLit today.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={GOOGLE_AUTH_URL}
              className="w-full sm:w-auto px-9 py-4 rounded-full text-base font-bold text-white bg-[#ff5500] hover:bg-[#ff661a] shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Start Meeting Now with Google</span>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <Link
              href="#interactive"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white bg-[#2e4758] border border-white/20 hover:bg-[#253b49] transition-all"
            >
              Explore Demo Rooms
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
