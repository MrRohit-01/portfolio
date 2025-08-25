import { MY_PROJECTS } from "@/lib/my_project";
import { useEffect, useRef, useState } from "react";
import StickyBox from "react-sticky-box";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLDivElement;
            const index = Number(el.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center bg-[#715A5A ]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-6xl max-h- 30rem items-start">
        {/* Left: Images */}
        <div className="flex flex-col gap-8">
          {MY_PROJECTS.map((project, i) => (
            <div
              key={project.name}
              ref={(el) => {
                refs.current[i] = el;
              }}
              data-index={i}
              className="flex justify-center min-h-screen"
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-100 object-cover rounded-xl border-4 border-[#44444E] shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Right: Sticky Text */}
          <StickyBox offsetTop={200} offsetBottom={100}>
        <div>
            <div className="p-8 rounded-2xl shadow-lg border border-[#44444E] text-gray-100 bg-[#44444E] transition-all duration-500 w-[35rem] flex flex-col justify-center">
              <h3 className="font-bold text-3xl mb-4 text-[#D3DAD9]">
                {MY_PROJECTS[activeIndex].name}
              </h3>
              <p className="text-base mb-6 text-[#D3DAD9]">
                {MY_PROJECTS[activeIndex].description}
              </p>

              {/* Tech Stack */}
              <div className="flex gap-2 flex-wrap mb-6">
                {MY_PROJECTS[activeIndex].tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-sm text-[#D3DAD9] bg-[#715A5A] rounded-full"
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
                  className="flex items-center gap-2 px-3 py-2 bg-[#37353E] rounded-lg hover:bg-[#715A5A] transition"
                >
                  <Github size={18} /> <span>GitHub</span>
                </a>
                <a
                  href={MY_PROJECTS[activeIndex].live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-[#715A5A] rounded-lg hover:bg-[#37353E] transition"
                >
                  <ExternalLink size={18} /> <span>Live</span>
                </a>
              </div>
            </div>
        </div>
          </StickyBox>
      </div>
    </div>
  );
}
