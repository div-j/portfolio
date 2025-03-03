"use client";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaBook, FaChalkboardTeacher, FaUserTie, FaLaptopCode } from "react-icons/fa";

const services = [
  {
    title: "Web Design",
    description: "Crafting visually appealing and user-friendly web interfaces.",
    icon: <FaLaptopCode size={40} />,
  },
  {
    title: "Frontend Development",
    description: "Building interactive and responsive web applications.",
    icon: <FaCode size={40} />,
  },
  {
    title: "Backend Development",
    description: "Developing scalable and secure backend systems.",
    icon: <FaServer size={40} />,
  },
  {
    title: "Database Management",
    description: "Designing, optimizing, and managing databases efficiently.",
    icon: <FaDatabase size={40} />,
  },
  {
    title: "Research",
    description: "Conducting in-depth research for innovative solutions.",
    icon: <FaBook size={40} />,
  },
  {
    title: "Training",
    description: "Providing hands-on training in software and AI technologies.",
    icon: <FaChalkboardTeacher size={40} />,
  },
  {
    title: "Mentorship",
    description: "Guiding individuals to excel in their tech careers.",
    icon: <FaChalkboardTeacher size={40} />,
  },
  {
    title: "Consultancy",
    description: "Offering expert advice in software and AI solutions.",
    icon: <FaUserTie size={40} />,
  },
];

const Services = () => {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-6 py-12 mt-12 sm:w-[90%] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">My Services</h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg shadow-lg bg-gray-800 text-center flex flex-col items-center justify-center space-y-4"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Fly in from left/right
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of card is visible
            whileHover={{ scale: 1.05 }}

          >
            <div className="text-[#38bdf8]">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
