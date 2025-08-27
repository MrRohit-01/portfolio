import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-2 z-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 transition-all duration-200 hover:scale-[1.02]">

        <div className="flex h-16 items-center justify-evenly rounded-full bg-[#D3DAD9] px-4 sm:px-6 lg:px-8">
          
          {/* Left: Brand */}
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500" />
            <span className="font-semibold tracking-tight text-black">WhoAmI</span>
          </div>

          {/* Center: Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
            <span className="hover:text-violet-600 transition-colors cursor-pointer">Projects</span>
            <span className="hover:text-violet-600 transition-colors cursor-pointer">Skills</span>
            <span className="hover:text-violet-600 transition-colors cursor-pointer">About</span>
            <span className="hover:text-violet-600 transition-colors cursor-pointer">Contact</span>
          </nav>

          {/* Right: Actions (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="hover:bg-white/40">Resume</Button>
            <div className="relative">
              <Button className="bg-black text-white hover:bg-black/90">
                Hire me
                <span className="absolute -top-1 -right-1 flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                </span>
              </Button>
            </div>
          </div>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hover:bg-white/40">Resume</Button>
            <Button size="sm" className="bg-black text-white hover:bg-black/90">Hire me</Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md hover:bg-white/40"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`md:hidden flex flex-col gap-4 px-6 py-4 mt-2 rounded-xl border border-gray-200 bg-white/90 backdrop-blur-md shadow-lg transform transition-all duration-300 ease-in-out ${
            mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <span className="hover:text-violet-600 transition-colors cursor-pointer">Projects</span>
          <span className="hover:text-violet-600 transition-colors cursor-pointer">Skills</span>
          <span className="hover:text-violet-600 transition-colors cursor-pointer">About</span>
          <span className="hover:text-violet-600 transition-colors cursor-pointer">Contact</span>
        </div>
      </div>
    </header>
  );
}
