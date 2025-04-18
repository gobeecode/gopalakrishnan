'use client';

import { motion } from 'framer-motion';
import { Github, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'EchoFlow – SaaS Platform',
    description:
      'A smart automation platform that helps businesses streamline their workflows with AI and custom integrations.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    image: '/images/placeholder.svg',
    link: 'https://echoflow.zapsolv.com',
  },
  {
    title: 'Zapsolv Website',
    description:
      'Corporate website for Zapsolv showcasing services, products, and academy with MDX-driven blog support.',
    tech: ['Next.js 15', 'Tailwind CSS', 'MDX', 'TypeScript'],
    image: '/images/placeholder.svg',
    link: 'https://zapsolv.com',
  },
  {
    title: 'Gym ERP System',
    description:
      'A cloud-based ERP for gyms with subscription and member tracking, including standalone and multi-device support.',
    tech: ['React', 'Firebase', 'Express.js'],
    image: '/images/placeholder.svg',
    link: '#',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-14 bg-white dark:bg-gray-900 text-center">
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
        className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-12"
      >
        A selection of meaningful work I’ve built, contributed to, or currently maintain.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 text-start">
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-white px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-start gap-3 mt-3">
              <Link
                href={project.link}
                target="_blank"
                className="flex items-center justify-center gap-2 p-3 border-2 rounded-lg text-white bg-gray-700 text-sm font-medium mt-auto"
              >
                <Github className="text-white" /> View Project
              </Link>
              <Link
                href={project.link}
                target="_blank"
                className="flex items-center justify-center gap-2 p-3 border-2 rounded-lg text-white bg-indigo-700 text-sm font-medium mt-auto"
              >
                <Search className="text-white" /> View Demo
              </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
