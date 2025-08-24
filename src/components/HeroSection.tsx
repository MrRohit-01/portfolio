export default function HeroSection() {
  return (
    <section className="flex justify-center items-center h-[calc(100vh-80px)] w-full px-4 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mx-auto gap-8">
        
        {/* Left Side - Text */}
        <div className="flex-1 min-w-0">
          <h2 className="text-4xl font-extrabold text-white leading-snug break-words">
            Hi, I’m <span className="text-violet-400">Rohit Kumar Barada</span> 👋
          </h2>
          <h3 className="mt-2 text-xl font-semibold text-gray-300">
            Fullstack Developer | Problem Solver | Tech Explorer
          </h3>

          <p className="mt-6 text-gray-300 leading-relaxed max-w-xl">
            I thrive on building{" "}
            <span className="text-violet-400 font-medium">clean, efficient, and impactful solutions</span>.  
            With experience in <strong>React, TypeScript, Node.js, Express</strong>, and modern 
            UI frameworks, I love experimenting and pushing my boundaries.  
          </p>

          <p className="mt-4 text-gray-300 leading-relaxed max-w-xl">
            Beyond coding, I enjoy working on personal projects, contributing to open-source, 
            and constantly improving my craft. My focus is on writing code that’s not only 
            functional but also <span className="text-violet-400">elegant and user-centered</span>.
          </p>
        </div>

        {/* Right Side - Avatar */}
        <div className="flex-1 flex justify-center min-w-0">
          <div className="w-40 h-40 md:w-48 md:h-48 border-4 border-violet-400 rounded-full flex items-center justify-center text-white shrink-0">
            Avatar
          </div>
        </div>
      </div>
    </section>
  )
}
