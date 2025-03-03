"use client";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Skills from "./components/Skill";
import Project from "./components/Projects";
import Services from "./components/Service";
import Contact from "./components/Contact";

export default function Home() {
  return (
      <div>
    
        <Hero/>
        <Skills/>
        <Project/>
        <Services/>
        <Contact/>
      </div>
  );
}
