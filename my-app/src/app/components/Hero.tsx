/* === FILE: components/Hero.tsx === */
'use client'
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center" id="hero">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-white">Hey, I’m <span className="text-cyan-400">Al Amin</span></h1>
        <p className="mt-4 text-lg text-gray-400">Full Stack Developer · Open Source Enthusiast</p>
      </motion.div>
    </section>
  );
}
