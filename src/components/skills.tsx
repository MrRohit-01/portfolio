import { MY_STACK } from "@/lib/My_stack";

export default function Skills() {
  return (
    <section id="my-stack" className="py-20 px-5 text-center">
      <div className="text-5xl font-bold text-[#CCC9DC] mb-12">
        <h1 className="text-center md:w-2/4 md:text-end drop-shadow-lg">My Stack</h1>
      </div>
      <div className="flex justify-center">
        <div className="space-y-16 max-w-7xl w-full">
          {Object.entries(MY_STACK).map(([category, items]) => (
            <div key={category} className="grid sm:grid-cols-12 gap-6">
              {/* Left Column - Category */}
              <div className="sm:col-span-5 text-center flex items-center justify-center">
                <div className="text-2xl font-extrabold uppercase text-gray-400 flex md:flex-row-reverse">
                  <p className="md:w-3/4 text-start bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                    {category}
                  </p>
                </div>
              </div>

              {/* Right Column - Items */}
              <div className="sm:col-span-7 flex flex-wrap gap-x-10 gap-y-6">
                {items.map((item) => (
                  <div key={item.name} className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md shadow-md hover:scale-105 transition-transform">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="h-9 object-center drop-shadow"
                    />
                    <span className="text-gray-200 font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
