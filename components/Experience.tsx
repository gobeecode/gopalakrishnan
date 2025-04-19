'use client';

import { motion } from 'framer-motion';
import { Briefcase, CheckCircle } from 'lucide-react';

const experiences = [
  {
    role: 'Software Engineer Senior - In Test',
    project: 'G5',
    company: 'Mettler Toledo',
    location: 'Coimbatore, India',
    duration: 'June 2022 – Present',
    description: [
      'Performed desktop application automation testing with Squish and Python.',
      'Performed web application automation testing with SeleniumBase and Python.',
      'Developed TAF Manager (Vue 3 + Python), a full stack application from scratch for test design.',
    ]
  },
  {
    role: 'Software Engineer Professional - In Test',
    project: 'LabX Connected Installer',
    company: 'Mettler Toledo',
    location: 'Coimbatore, India',
    duration: 'November 2022 - June 2023',
    description: [
      'Led desktop application automation testing with PyWinAuto, Python and Behave.',
      'Planned and achieved 100% coverage of features in test automation.',
      'Developed test automation framework for LabX Connected Installer from scratch.',
    ]
  },
  {
    role: 'Software Engineer Professional - In Test',
    project: 'PipetteX',
    company: 'Mettler Toledo',
    location: 'Coimbatore, India',
    duration: 'June 2021 - November 2022',
    description: [
      'Led desktop application automation testing with WinAppDriver, C# and Specflow.',
      'Migrated test automation repository from TFS to GitHub.',
      'Implemented concurrent testing to enable testing multiple clients simultaneously.',
    ]
  },
  {
    role: 'Test Analyst',
    project: 'Advance Auto Parts',
    company: 'Infosys',
    location: 'Trivandrum, India',
    duration: 'September 2020 - April 2021',
    description: [
      'Led API automation testing with Rest Assured (Java).',
      'Led web application automation testing with Selenium and Java.',
    ]
  },
  {
    role: 'Test Analyst',
    project: 'XPO Logistics',
    company: 'Infosys',
    location: 'Trivandrum, India',
    duration: 'January 2019 - September 2020',
    description: [
      'Conducted API automation testing with RestSharp (C#).',
      'Participated in frontend web application development with Angular.',
    ]
  },
  {
    role: 'Software Engineer',
    project: 'XPO Logistics',
    company: 'Finastra',
    location: 'Trivandrum, India',
    duration: 'December 2016 - January 2019',
    description: [
      'Conducted web application automation testing with C# and Specflow.',
    ]
  },
  {
    role: 'Software Developer',
    project: 'Debenhams',
    company: 'UST Global',
    location: 'Trivandrum, India',
    duration: 'March 2015 - December 2016',
    description: [
      'Conducted web application automation testing with Selenium and Java.',
      'Participated in manual testing activities.'
    ]
  },
];

export const Experience = () => {
  return (
    <section id="experience" className=" bg-gray-100 dark:bg-gray-900 text-center sm:px-10 sm:py-14 px-3 py-8">
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
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium my-2">
            {exp.project} - {exp.company} · {exp.location}
            </p>
            <p className="text-sm text-indigo-600 dark:text-indigo-400 my-2">{exp.duration}</p>
            <ul className="space-y-2 mt-3">
              {exp.description.map((skill, index) => (
                <li key={index} className="flex items-center gap-3 text-left text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  <CheckCircle className="mt-1 text-indigo-500 dark:text-indigo-400" size={20} />
                  <span className="text-base">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
