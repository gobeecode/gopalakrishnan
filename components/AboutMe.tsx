'use client';

import { motion } from 'framer-motion'

export const AboutMe = () => {
    return (
    <section id="about" className="py-14 bg-gray-100 dark:bg-gray-800 text-center ">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-semibold mb-6 text-black dark:text-white"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300"
      >
        Hi, I'm Gopalakrishnan, a passionate developer focused on creating beautiful and
        efficient web applications. With a background in both front-end and back-end
        development, I enjoy solving complex problems with elegant solutions and pushing
        the boundaries of what's possible with code.
      </motion.p>
    </section>
  )
}
