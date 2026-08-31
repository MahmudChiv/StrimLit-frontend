import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f7f5f0] text-[#1e293b] border-t border-[#e5e2d8] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#e5e2d8]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-[#355265] p-1.5 shadow-sm">
                <Image
                  src="/Logo.png"
                  alt="StrimLit Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#1e293b]">StrimLit</span>
            </Link>

            <p className="text-slate-600 text-sm max-w-sm leading-relaxed font-normal">
              High-definition live video conference rooms, co-working focus spaces, and AI meeting summaries built for modern teams.
            </p>

            <div className="flex items-center gap-3 pt-2 text-slate-600">
              <a href="#" className="p-2 rounded-full bg-white border border-[#e5e2d8] hover:border-[#ff5500] hover:text-[#ff5500] transition-colors">
                <span className="sr-only">Twitter / X</span>
                𝕏
              </a>
              <a href="#" className="p-2 rounded-full bg-white border border-[#e5e2d8] hover:border-[#ff5500] hover:text-[#ff5500] transition-colors">
                <span className="sr-only">GitHub</span>
                GH
              </a>
              <a href="#" className="p-2 rounded-full bg-white border border-[#e5e2d8] hover:border-[#ff5500] hover:text-[#ff5500] transition-colors">
                <span className="sr-only">LinkedIn</span>
                in
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#ff5500] uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="#features" className="hover:text-[#ff5500] transition-colors">Video Calls</Link></li>
              <li><Link href="#interactive" className="hover:text-[#ff5500] transition-colors">Co-Working Rooms</Link></li>
              <li><Link href="#features" className="hover:text-[#ff5500] transition-colors">AI Summaries</Link></li>
              <li><Link href="#features" className="hover:text-[#ff5500] transition-colors">WebRTC Security</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#ff5500] uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="#about" className="hover:text-[#ff5500] transition-colors">About Us</Link></li>
              <li><Link href="#about" className="hover:text-[#ff5500] transition-colors">Customer Stories</Link></li>
              <li><a href="#" className="hover:text-[#ff5500] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#ff5500] transition-colors">Press Kit</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#ff5500] uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-[#ff5500] transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-[#ff5500] transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-[#ff5500] transition-colors">System Status</a></li>
              <li><a href="#" className="hover:text-[#ff5500] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} StrimLit Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#ff5500] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#ff5500] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#ff5500] transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
