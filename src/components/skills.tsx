import { MY_STACK } from "@/lib/My_stack";

export default function Skills() {
  return (
    <section id="my-stack" className="py-20 px-5   text-center">

      <div className="text-5xl font-bold text-[#CCC9DC] mb-12   ">
        <h1 className=" text-center md:w-2/4 md:text-end">My Stack</h1>
        </div>
        <div className="  flex justify-center">
      <div className="space-y-16  max-w-7xl ">
        {Object.entries(MY_STACK).map(([category, items]) => (
          <div key={category} className="grid sm:grid-cols-12 gap-6   ">
            
            {/* Left Column - Category */}
            <div className="sm:col-span-5   text-center  ">
              <div className="text-2xl font-extrabold uppercase text-gray-400 flex md:flex-row-reverse">
                <p className=" md:w-3/4 text-start">
                {category}
                </p>
              </div>
            </div>

            {/* Right Column - Items */}
            <div className="sm:col-span-7 flex flex-wrap gap-x-10 gap-y-6">
              {items.map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <img
                    src={item.icon}
                    alt={item.name}

                    className="h-9  object-center"
                  />
                  <span className=" text-gray-200">{item.name}</span>
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
