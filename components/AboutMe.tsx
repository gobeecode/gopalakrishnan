'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-900 sm:px-8 sm:py-10 px-5 py-8"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* SVG Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <Image
            src="images/developer-activity.svg" // Replace this with your SVG path
            alt="Developer illustration"
            width={450}
            height={450}
            className="object-contain"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I’m <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Gopalakrishnan</span>,
            a full-stack developer with a passion for building sleek, high-performance web apps.
            I specialize in both frontend and backend technologies, and I love blending design with functionality.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            With a solid foundation in frameworks like <strong>Next.js</strong> and <strong>Node.js</strong>,
            I’ve created everything from landing pages and dashboards to complete SaaS platforms.
            I'm also exploring the exciting world of <strong>AI automation</strong> and <strong>developer tools</strong>.
          </p>

          <ul className="space-y-4 text-left">
          <li className="flex gap-3">
              <span className="text-indigo-500 mt-1">✔</span>
              <span className="text-gray-700 dark:text-gray-300">
                10+ years of experience in automation testing
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-500 mt-1">✔</span>
              <span className="text-gray-700 dark:text-gray-300">
                6+ years of experience in full-stack development
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-500 mt-1">✔</span>
              <span className="text-gray-700 dark:text-gray-300">
                Top 2% worldwide in <a href="https://tryhackme.com/p/gobeesecure" target="_blank" className="text-indigo-600 underline underline-offset-4">TryHackMe</a>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-500 mt-1">✔</span>
              <span className="text-gray-700 dark:text-gray-300">
                Building Saas products to solve business problems
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-500 mt-1">✔</span>
              <span className="text-gray-700 dark:text-gray-300">
                Sharing knowledge on <a href="https://linkedin.com/in/gobeecode" target="_blank" className="text-indigo-600 underline underline-offset-4">LinkedIn</a>, <a href="https://x.com/gobeecode" target="_blank" className="text-indigo-600 underline underline-offset-4">Twitter</a> and <a href="https://medium.com/@gobeecode" target="_blank" className="text-indigo-600 underline underline-offset-4">Medium</a>
              </span>
            </li>

          </ul>
        </motion.div>
      </div>
    </section>
  );
};
