"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCode, FaEye } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce App",
    image: "/images/ecommerce.png",
    demoLink: "https://kofashion-frontend.onrender.com/",
    codeLink: "https://github.com/div-j/full-stack-ecommerce-app",
  },
  {
    title: "Hotel",
    image: "/images/hotels.png",
    demoLink: "https://perennial-hotels.vercel.app/",
    codeLink: "https://github.com/div-j/perennial_hotels",
  },
  {
    title: "Chat App",
    image: "/images/chap-app.jpg",
    demoLink: "https://fullstack-chat-app-4a4o.onrender.com/",
    codeLink: "https://github.com/div-j/fullstack-chat-app",
  },
  {
    title: "Portfolio Website",
    image: "/images/portfolio.webp",
    demoLink: "https://divinejohn-portfolio.vercel.app/",
    codeLink: "https://github.com/div-j/portfolio",
  },
  {
    title: "Note Taking App",
    image: "/images/notetaking.jpg",
    demoLink: "https://github.com/div-j/full-stack-note-taking--app/",
    codeLink: "https://full-stack-note-taking-app.vercel.app/",
  },

  {
    title: "AI-LMS App",
    image: "/images/lms.jpg",
    demoLink: "https://smart-study-nine.vercel.app/",
    codeLink: "https://github.com/div-j/LMS",
  },

  {
    title: "Music Player App",
    image: "/images/music-player.png",
    demoLink: "https://github.com/div-j/music-player",
    codeLink: "https://github.com/div-j/music-player",
  },
  {
    title: "Netflix Clone App",
    image: "/images/video.png",
    demoLink: "https://member-demo.com",
    codeLink: "https://github.com/user/portfolio",
  },

  
];

const Project = () => {
  return (
    <section id="projects" className=" max-w-[90%] mx-auto bg-[#0f172a] text-white py-8 px-6 mt-16">
      <h2 className="text-3xl font-bold text-center mb-8 py-4">My Projects</h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Fly in from left/right
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of card is visible
            whileHover={{ scale: 1.05 }}

          >
            {/* Project Image */}
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-56 object-cover transition-all  duration-300 group-hover:brightness-50"
            />

            {/* Hover Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <div className="flex space-x-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 justify-center items-center px-4 py-2 bg-[#38bdf8] text-black font-semibold rounded-lg hover:bg-[#0ea5e9] transition"
                >
                 <FaEye className="text-gray-200" size={25}/> View
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 justify-center items-center px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition"
                >
                  <FaCode className="text-gray-400"/> Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
