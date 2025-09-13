import { MY_PROJECTS } from "@/lib/My_project";
import { useEffect, useRef, useState } from "react";
import StickyBox from "react-sticky-box";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

 useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      let mostVisible: IntersectionObserverEntry | null = null;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (
            !mostVisible ||
            entry.intersectionRatio > mostVisible.intersectionRatio
          ) {
            mostVisible = entry;
          }
        }
      });

      if (mostVisible) {
        const el = mostVisible.target as HTMLDivElement;
        const index = Number(el.dataset.index);
        setActiveIndex(index);
      }
    },
    {
      root: null,
      // this makes the “focus band” roughly align with the sticky content box
      rootMargin: "-40% 0px -40% 0px", 
      threshold: [0.25, 0.5, 0.75],
    }
  );

  refs.current.forEach((ref) => {
    if (ref) observer.observe(ref);
  });

  return () => observer.disconnect();
}, []);


  return (
    <section className="relative py-24">
      {/* Heading */}
      <h1 className="text-center font-extrabold text-transparent text-6xl md:text-7xl mb-20 bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
        My Projects
      </h1>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl">
          {/* Left: Images */}
          <div className="flex flex-col gap-12">
            {MY_PROJECTS.map((project, i) => (
              <div
                key={project.name}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                data-index={i}
                className={`flex justify-center transition-transform duration-500 ${i === activeIndex ? "scale-105" : "scale-95"}`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className={`rounded-2xl shadow-2xl transition-all duration-500 ${
                       "border-4 border-purple-500/70 shadow-purple-400/40"
    
                  } hover:scale-105 hover:shadow-xl`}
                  style={{ background: "linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)" }}
                />
              </div>
            ))}
          </div>

          {/* Right: Sticky Text */}
          <div className="relative">
            <StickyBox offsetTop={120}>
              <div className="p-10 rounded-3xl shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 transition-all duration-500 hover:scale-[1.02]">
                <h3 className="font-bold text-3xl mb-6 text-purple-300 drop-shadow-lg">
                  {MY_PROJECTS[activeIndex].name}
                </h3>

                {/* Description */}
                <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-200">
                  {MY_PROJECTS[activeIndex].description.map((point, idx) => (
                    <li key={idx} className="text-base">
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex gap-2 flex-wrap mb-8">
                  {MY_PROJECTS[activeIndex].tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-sm text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-md hover:scale-105 transition-transform"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={MY_PROJECTS[activeIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 hover:from-purple-500 hover:to-pink-500 text-white font-medium shadow-md transition hover:scale-105"
                  >
                    <Github size={18} /> <span>GitHub</span>
                  </a>
                  <a
                    href={MY_PROJECTS[activeIndex].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium shadow-md transition hover:scale-105"
                  >
                    <ExternalLink size={18} /> <span>Live</span>
                  </a>
                </div>
              </div>
            </StickyBox>
          </div>
        </div>
      </div>
    </section>
  );
}
