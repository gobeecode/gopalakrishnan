'use client'

import { motion } from 'framer-motion'
import { Twitter, Github, Linkedin, Instagram, Facebook, Youtube, LucideYoutube, Coffee, Play, PlayCircle, Pen, SunMedium, PenLine } from 'lucide-react'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center sm:px-10 sm:py-14 px-5 py-8">
      {/* Avatar Image */}
      <motion.img
        src="images/gobeecode-profile-picture.png" // 👉 Replace with your image path
        alt="Gopalakrishnan"
        width={300}
        height={300}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="rounded-full border-4 border-black dark:border-white mb-6"
      />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Hi, I'm Gopalakrishnan
      </motion.h1>
      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-2xl md:text-4xl font-bold mb-4">
        (@gobeecode)
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-xl"
      >
        A creative developer crafting engaging web experiences with code, design, and motion.
      </motion.p>

      {/* Social Media Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="mt-8 flex justify-center flex-wrap gap-5"
      >
        <a href="https://www.linkedin.com/in/gobeecode" target="_blank" rel="noopener noreferrer">
        <Image src="icons/linkedin.svg" width={50} height={50} alt="medium icon" className="transition" />
        </a>
        <a href="https://twitter.com/gobeecode" target="_blank" rel="noopener noreferrer">
        <Image src="icons/twitter.svg" width={50} height={50} alt="medium icon" className="transition" />
        </a>
        <a href="https://github.com/gobeecode" target="_blank" rel="noopener noreferrer">
        <Image src="icons/github.svg" width={50} height={50} alt="medium icon" className="transition" />
        </a>
        <a href="https://medium.com/@gobeecode" target="_blank" rel="noopener noreferrer">
          <Image src="icons/medium.svg" width={50} height={50} alt="medium icon" className="transition" />
        </a>
        <a href="https://instagram.com/gobeecode" target="_blank" rel="noopener noreferrer">
        <Image src="icons/instagram.svg" width={50} height={50} alt="medium icon" className="transition" />
        </a>
        <a href="https://facebook.com/gobeecode" target="_blank" rel="noopener noreferrer">
        <Image src="icons/facebook.svg" width={50} height={50} alt="medium icon" className="transition" />
        </a>
        <a href="https://youtube.com/@gobeecode" target="_blank" rel="noopener noreferrer">
        <Image src="icons/youtube.svg" width={50} height={50} alt="medium icon" className="transition" />
        </a>
      </motion.div>

    <div className="flex items-center justify-center gap-5">
      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-8"
      >
        <a
          href="#projects"
          className="inline-block px-8 py-6 bg-black text-white dark:bg-white dark:text-black rounded-full hover:scale-105 transition-transform duration-300"
        >
          View My Projects
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-8"
      >
        <a
          href="#contact"
          className="inline-block px-8 py-6 border-2 rounded-full hover:scale-105 transition-transform duration-300"
        >
          Contact Me
        </a>
      </motion.div>
      </div>
    </section>
  )
}
