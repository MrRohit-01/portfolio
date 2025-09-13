import { Typewriter } from "react-simple-typewriter"

export default function HeroSection() {
  return (
    <section className="flex justify-center items-center h-screen px-4">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-6xl w-full animate-fade-in">
        {/* Left Side - Text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
              Hi, I’m{" "}
              <span className="text-[#44BBA4] bg-gradient-to-r from-[#44BBA4] to-violet-500 bg-clip-text text-transparent">ROHIT KUMAR BARADA</span> 👋
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
          <div className="relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500 via-pink-400 to-blue-400 animate-spin-slow blur-sm"></div>
            <img
              src="/barcode.png"
              alt="Avatar"
              className="relative w-36 h-36 md:w-52 md:h-52 rounded-full border-4 border-white shadow-xl object-cover z-10"
              style={{ boxShadow: "0 0 40px 0 rgba(136, 58, 255, 0.3)" }}
            />
          </div>
        </div>
      </div>
      <style>{`
        .animate-fade-in {
          animation: fadeInUp 1s cubic-bezier(.39,.575,.565,1) both;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
