import { MY_PROJECTS } from "@/lib/my_project";

export default function Projects(){
    
return (
<>
  <div className="">
    {MY_PROJECTS.map((project) => (
      <div
        key={project.name}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 rounded-xl shadow-md border text-gray-100 "
      >
        {/* Left: Image */}
        <div className="col-span-1 flex justify-center items-center border">
          <img
            src={project.image}
            alt={project.name}
            className="w-40 h-40 object-cover rounded-xl border-4 border-gray-300 shadow-lg border"
          />
        </div>

        {/* Right: Text */}
        <div className="col-span-2 flex flex-col justify-center border w-1/2">
          <h3 className="font-bold text-xl mb-2 border">{project.name}</h3>
          <p className="text-sm mb-3 border">{project.description}</p>
          <div className="flex gap-2 flex-wrap border">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-xs text-gray-100 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>

</>)
}
