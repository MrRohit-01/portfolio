import { Typewriter } from "react-simple-typewriter"

export default function HeroSection() {
  return (
    <section className="flex justify-center items-center h-screen px-4">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-6xl w-full">
        
        {/* Left Side - Text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Hi, I’m{" "}
              <span className="text-[#44BBA4]">ROHIT KUMAR BARADA</span> 👋
            </h2>

            <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-gray-300">
              <Typewriter
                words={[
                  "Fullstack Developer",
                  "Problem Solver",
                  "Tech Explorer",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h3>
          </div>

          <div className="space-y-4 max-w-xl mx-auto md:mx-0 text-gray-300">
            <p className="leading-relaxed text-justify">
              I thrive on building{" "}
              <span className="text-violet-400 font-medium">
                clean, efficient, and impactful solutions
              </span>. With experience in{" "}
              <strong>React, TypeScript, Node.js, Express</strong>, and modern
              UI frameworks, I love experimenting and pushing my boundaries.
            </p>

            <p className="leading-relaxed text-justify">
              Beyond coding, I enjoy working on personal projects, contributing
              to open-source, and constantly improving my craft. My focus is on
              writing code that’s not only functional but also{" "}
              <span className="text-violet-400">elegant and user-centered</span>.
            </p>
          </div>
        </div>

        {/* Right Side - Avatar */}
        <div className="flex-1 flex justify-center">
          <div className="w-40 h-40 md:w-56 md:h-56 border-4 border-violet-400 rounded-full flex items-center justify-center text-white shadow-lg">
            Avatar
          </div>
        </div>
      </div>
    </section>
  )
}
