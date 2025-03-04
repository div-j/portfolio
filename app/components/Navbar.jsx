"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }} // Navbar enters from the top
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-base-200 p-4 shadow-md sticky top-0 z-50" // Navbar shadow and sticky
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl font-bold"
        >
          JOHN DIVINE
        </motion.h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "Skills", "Projects", "Services"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={`#${item.toLowerCase()}`} className="hover:text-primary">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Social Icons */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex space-x-4"
        >
          <a href="https://linkedin.com/in/divine-john" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="hover:text-primary cursor-pointer" />
          </a>
          <a href="https://facebook.com/divinejohn35" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} className="hover:text-primary cursor-pointer" />
          </a>
          <a href="https://github.com/div-j" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="hover:text-primary cursor-pointer" />
          </a>
        </motion.div>

        {/* Let's Connect Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn btn-primary ml-4 hidden md:inline-block bg-[#0ea5e9] "
        >
          <Link
           href="https://wa.me/2347082155821" // Replace with your number
           target="_blank"
           rel="noopener noreferrer"
          >Let's Connect</Link>
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
