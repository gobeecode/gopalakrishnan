'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Zapsolv Technologies',
    location: 'Coimbatore, India',
    duration: 'Jan 2023 – Present',
    description:
      'Leading product and client-based development using Next.js, Node.js, and MongoDB. Driving UI/UX consistency and app performance.',
  },
  {
    role: 'Frontend Developer Intern',
    company: 'TechNova',
    location: 'Remote',
    duration: 'Jun 2022 – Dec 2022',
    description:
      'Created pixel-perfect UI components using React and Tailwind CSS. Collaborated closely with designers and backend developers.',
  },
  // Add more experiences as needed
];

export const Experience = () => {
  return (
    <section id="experience" className="py-14 bg-gray-100 dark:bg-gray-900 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
      >
        Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-12"
      >
        My professional journey through impactful roles, creative teams, and challenging projects.
      </motion.p>

      <div className="relative border-l-2 border-indigo-500 dark:border-indigo-400 max-w-4xl mx-auto px-6 space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * i }}
            viewport={{ once: true }}
            className="relative pl-10 text-left"
          >
            <div className="absolute -left-[10px] top-1">
              <div className="w-5 h-5 bg-indigo-600 dark:bg-indigo-400 rounded-full ring-4 ring-white dark:ring-gray-900" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Briefcase className="text-indigo-500 dark:text-indigo-400" size={20} />
              {exp.role}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">
              {exp.company} · {exp.location}
            </p>
            <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">{exp.duration}</p>
            <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
