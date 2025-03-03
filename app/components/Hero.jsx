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
     className="w-[80%] mx-auto  "

          >
                <h1 className="text-4xl  text-center my-6 font-bold " >
            Welcome to My Portfolio
          </h1>
      <div className="flex flex-wrap items-center justify-between">
        
        {/* Left Section */}
        <div className=" w-full md:w-[60%] text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          I'm a{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#facc15] to-[#38bdf8] font-extrabold text-4xl md:text-5xl">
            <Typewriter
              words={["Software Engineer", "AI Engineer", "Tech Innovator","Trainer"]}
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
          Passionate about leveraging <span className="text-[#facc15] font-semibold">technology</span> to drive innovation.
          I create scalable software, analyze complex data, and build AI solutions that shape the future.
        </p>

        {/* Download CV Button */}
        <Link href="/path/to/your/cv.pdf" target="_blank" rel="noopener noreferrer">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#8241c0] to-pink-400 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <span className="animate-pulse">📄</span> Download CV
          </button>
        </Link>
        </div>
        {/* Right Section */}
        <div className="hidden md:block rounded-full bg-[#181818] w-[40%] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/about-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
        </div>
      </div>
</motion.div>

  );
};

export default Hero;
