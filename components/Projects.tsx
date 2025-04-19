'use client';

import { motion } from 'framer-motion';
import { Github, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Dorkmine',
    description:
      'Opensource google dork engine with extensive collection of google dorks!',
    tech: ['bug-bounty', 'google-dorks', 'google-dorking', 'bug-bounty-tools', 'google-dorking-tool', 'google-dorks-for-hackers'],
    image: '/images/placeholder.svg',
    codelink: 'https://github.com/gobeecode/dorkmine',
    demolink: 'https://dorkmine.vercel.app',
  },
  {
    title: 'Bountymine',
    description:
      'Curated collection of bug bounty notes and tutorials in one place. Visit the link below to view the docs.',
    tech: ['cybersecurity', 'bugbounty', 'bugbountytips', 'bugbountytricks', 'bugbountytools', 'bugbountynotes'],
    image: '/images/placeholder.svg',
    codelink: 'https://github.com/gobeecode/bountymine',
    demolink: 'bountymine.vercel.app',
  },
  {
    title: 'Bug Bounty Reports Collection',
    description:
      'Complete collection of bug bounty reports from Hackerone.',
    tech: ['bug-bounty', ' hackerone-reports', 'bug-bounty-hunting', 'bug-bounty-tools', 'bug-bounty-reports'],
    image: '/images/placeholder.svg',
    codelink: 'https://github.com/gobeecode/bug-bounty-reports-hackerone',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="bg-white dark:bg-gray-900 text-center sm:px-10 sm:py-14 px-3 py-8">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
      >
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
      >
        A selection of meaningful work I’ve built, contributed to, or currently maintain.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 py-10 text-start">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                </div>
              </div>
              <div className="flex items-center justify-start gap-3 mt-3">
              <Link
                href={project.codelink}
                target="_blank"
                className="flex items-center justify-center gap-2 p-3 border-2 rounded-lg text-white bg-gray-700 text-sm font-medium mt-auto"
              >
                <Github className="text-white" /> View Project
              </Link>
              {project.demolink && 
              <Link
                href={project.demolink}
                target="_blank"
                className="flex items-center justify-center gap-2 p-3 border-2 rounded-lg text-white bg-indigo-700 text-sm font-medium mt-auto"
              >
                <Search className="text-white" /> View Demo
              </Link>
              }
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-center">
      <li className="flex gap-3">
              <span className="text-indigo-500 mt-1"></span>
              <span className="text-gray-700 dark:text-gray-300">
                View more on my <a href="https://github.com/gobeecode" target="_blank" className="text-indigo-600 underline underline-offset-4">GitHub</a> profile.
              </span>
            </li>
            </div>
    </section>
  );
};
