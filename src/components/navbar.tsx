import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// Drop this component near the top of your layout.
// Requires: shadcn/ui installed, Tailwind enabled.
// The transparency uses backdrop-blur and alpha backgrounds.

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-0 h-100% pt-2 "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-[#D3DAD9] rounded-full">
        <div className="flex h-14 items-center justify-evenly">
          {/* Left: Brand */}
          <div className="flex items-center gap-2 p-5">
            <div className="h-6 w-6 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500" />
            <span className="font-semibold tracking-tight">Rohit</span>
          </div>

          {/* Center: Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <span className="hover:opacity-80 transition-opacity cursor-pointer">Projects</span>
            <span className="hover:opacity-80 transition-opacity cursor-pointer">Skills</span>
            <span className="hover:opacity-80 transition-opacity cursor-pointer">About</span>
            <span className="hover:opacity-80 transition-opacity cursor-pointer">Contact</span>
          </nav>

          {/* Right: Actions (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="hover:bg-white/40 dark:hover:bg-white/10">Resume</Button>
            <div className="relative">
              <Button className="bg-black/80 text-white hover:bg-black">
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
            <Button variant="ghost" size="sm" className="hover:bg-white/40 dark:hover:bg-white/10">Resume</Button>
            <Button size="sm" className="bg-black/80 text-white hover:bg-black">Hire me</Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md hover:bg-white/40 dark:hover:bg-white/10"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`md:hidden flex flex-col gap-4 p-4 border-t border-white/20 dark:border-white/10 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"
          }`}
        >
          <span className="hover:opacity-80 transition-opacity cursor-pointer">Projects</span>
          <span className="hover:opacity-80 transition-opacity cursor-pointer">Skills</span>
          <span className="hover:opacity-80 transition-opacity cursor-pointer">About</span>
          <span className="hover:opacity-80 transition-opacity cursor-pointer">Contact</span>
        </div>
      </div>
    </header>
  );
}
