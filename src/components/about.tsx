import { motion } from "motion/react";

export default function Education() {
  return (
    <section className="w-full max-w-4xl mx-auto mt-20 px-6">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education 🎓
      </motion.h2>

      <div className="relative border-l-2 border-blue-400 pl-8 space-y-12">
        {/* College */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="absolute -left-4 top-2 w-4 h-4 bg-blue-400 rounded-full"></span>
          <h3 className="text-2xl font-semibold">B.Tech in Computer Science</h3>
          <p className="text-gray-400 mt-1">XYZ University | 2019 – 2023</p>
          <p className="text-gray-300 mt-3 text-sm leading-relaxed">
            Specialized in software development and modern web technologies. 
            Hands-on experience with React, Node.js, databases, and system design. 
            Led multiple projects and contributed to open-source initiatives.
          </p>
        </motion.div>

        {/* Certification */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="absolute -left-4 top-2 w-4 h-4 bg-green-400 rounded-full"></span>
          <h3 className="text-2xl font-semibold">Full-Stack Web Development Bootcamp</h3>
          <p className="text-gray-400 mt-1">Online Certification | 2022</p>
          <p className="text-gray-300 mt-3 text-sm leading-relaxed">
            Completed an intensive bootcamp focused on building scalable applications 
            with React, TypeScript, Express, and MongoDB. 
            Strengthened practical problem-solving and project-building skills.
          </p>
        </motion.div>

        {/* High School */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="absolute -left-4 top-2 w-4 h-4 bg-blue-400 rounded-full"></span>
          <h3 className="text-2xl font-semibold">Higher Secondary (Science)</h3>
          <p className="text-gray-400 mt-1">ABC School | 2017 – 2019</p>
          <p className="text-gray-300 mt-3 text-sm leading-relaxed">
            Completed with focus on Mathematics and Physics. 
            Built a strong foundation for logical reasoning and problem-solving.
          </p>
        </motion.div>

        {/* Current Learning */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="absolute -left-4 top-2 w-4 h-4 bg-purple-400 rounded-full"></span>
          <h3 className="text-2xl font-semibold">Currently Learning 🚀</h3>
          <p className="text-gray-400 mt-1">2023 – Present</p>
          <p className="text-gray-300 mt-3 text-sm leading-relaxed">
            Exploring advanced system design, cloud computing, and backend architecture. 
            Actively contributing to open-source and experimenting with cutting-edge frameworks 
            to stay ahead in the ever-evolving tech landscape.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
