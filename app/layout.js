"use client";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={Math.random()} // Helps with page transition animation
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col"

          >
            <Navbar />
            <main>{children}</main>
            <Footer/>
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
