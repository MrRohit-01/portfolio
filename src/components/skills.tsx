import { MY_STACK } from "@/lib/my_stack"

export default function Skills() {
  return (
    <section id="my-stack" className="py-20 px-8">
      <h2 className="text-4xl font-bold text-gray-100 mb-12">My Stack</h2>

      <div className="space-y-16">
        {Object.entries(MY_STACK).map(([category, items]) => (
          <div key={category} className="grid sm:grid-cols-12 gap-6">
            
            {/* Left Column - Category */}
            <div className="sm:col-span-5">
              <p className="text-3xl font-extrabold uppercase text-gray-400">
                {category}
              </p>
            </div>

            {/* Right Column - Items */}
            <div className="sm:col-span-7 flex flex-wrap gap-x-10 gap-y-6">
              {items.map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <img
                    src={item.icon}
                    alt={item.name}

                    className="h-10 w-10 object-center"
                  />
                  <span className="text-xl text-gray-200">{item.name}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}
