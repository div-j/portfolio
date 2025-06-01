"use client";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
         
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
     className="w-[90%] mx-auto  "

          >
                <h1 className="text-4xl  text-center my-6 font-bold " >
            Welcome to My Portfolio
          </h1>
      <div className="flex flex-col gap-20 md:flex-row items-center justify-between">
        
        {/* Left Section */}
        <div className=" w-full md:w-[70%] text-center md:text-left mt-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#facc15] to-[#38bdf8] font-extrabold text-3xl md:text-4xl">
            <Typewriter
              words={["Software Engineer","Frontend Developer", "Backend Developer", "AI Engineer","Trainer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
          <p className="text-lg text-gray-300 mb-6">
          passionate about turning ideas into scalable web and mobile products. Whether building seamless user interfaces or engineering intelligent backend systems, I blend technology with purpose — creating solutions that are not just functional, but transformative.
        
        </p>

        {/* Download CV Button */}
        <Link href="/divine_sd_cv.pdf"
         download={"divine_cv.pdf"}
         onClick={() => alert("CV Downloaded!")} 
          rel="noopener noreferrer">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#8241c0] to-pink-400 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <span className="animate-pulse">📄</span> Download CV
          </button>
        </Link>
        </div>
        {/* Right Section */}
        <div className="hidden md:flex rounded-full bg-[#181818] w-[50%] h-[250px]  lg:h-full  md:justify-center md:items-center ">
            <Image
              src="/images/about-image.png"
              alt="hero image"
              className="rounde "
              width={300}
              height={300}
            />
        </div>
      </div>
</motion.div>

  );
};

export default Hero;
