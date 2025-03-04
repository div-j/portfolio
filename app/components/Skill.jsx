"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Define skills as an array of objects
const skills = [
  { name: "Python", category: "Programming", level: 90 },
  { name: "JavaScript", category: "Programming", level: 90 },
  { name: "TypeScript", category: "Programming", level: 85 },
  { name: "Java", category: "Programming", level: 75 },
  { name: "C", category: "Programming", level: 70 },
  { name: "Dart", category: "Programming", level: 65 },
  { name: "React", category: "Frontend", level: 85 },
  { name: "Next.js", category: "Frontend", level: 80 },
  { name: "Node.js", category: "Backend", level: 85 },
  { name: "Express", category: "Backend", level: 80 },
  { name: "Django", category: "Backend", level: 75 },
  { name: "Mongoose", category: "Backend", level: 70 },
  { name: "GraphQL", category: "Backend", level: 65 },
  { name: "MongoDB", category: "Database", level: 90 },
  { name: "Firebase", category: "Database", level: 80 },
  { name: "MySQL", category: "Database", level: 85 },
  { name: "PostgreSQL", category: "Database", level: 75 },
  { name: "Clerk", category: "Authentication", level: 85 },
  { name: "Auth0", category: "Authentication", level: 80 },
  { name: "JWT", category: "Authentication", level: 75 },
  { name: "Firebase Auth", category: "Authentication", level: 70 },
];

const categories = ["Programming", "Frontend", "Backend", "Database", "Authentication"];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Programming");

  return (
    <section id="skills" className=" bg-[#0f172a] text-white px-6 py-12 mt-4">
      <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center  mb-6 gap-4">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-lg font-semibold transition ${
              selectedCategory === category
                ? "bg-[#38bdf8] text-black"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid (Horizontally Scrollable) */}
      <section className="flex flex-wrap   items-center justify-center ">
          <motion.div
            className="flex  items-center justify-center overflow-x-auto space-x-6 px-4 py-4 scrollbar-hide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {skills
              .filter((skill) => skill.category === selectedCategory)
              .map((skill) => (
                <motion.div
                  key={skill.name}
                  className="w-40 h-32  flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-md p-4"
                  whileHover={{ scale: 1.1 }
                }
                >
                  <CircularProgressbar
                    value={skill.level}
                    text={`${skill.level}%`}
                  
                    styles={buildStyles({
                      textSize: "16px",
                      pathColor: `#38bdf8`,
                      textColor: "#fff",
                      trailColor: "#1e293b",
                      strokeWidth: 25, 
                    })}
                  />
                  <p className="mt-2 text-lg font-medium">{skill.name}</p>
                </motion.div>
              ))}
          </motion.div>
      </section>
    </section>
  );
};

export default Skills;
