'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const SkillItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 text-left text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-300">
    <CheckCircle className="mt-1 text-indigo-500 dark:text-indigo-400" size={20} />
    <span className="text-base">{text}</span>
  </li>
);

const SkillCard = ({
  title,
  skills,
  delay,
}: {
  title: string;
  skills: string[];
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
  >
    <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
      {title}
    </h3>
    <ul className="space-y-4">
      {skills.map((skill, index) => (
        <SkillItem key={index} text={skill} />
      ))}
    </ul>
  </motion.div>
);

export const Skills = () => {
  return (
    <section id="skills" className="py-14 bg-gray-100 dark:bg-gray-900 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
      >
        Skills & Expertise
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-12"
      >
        A full-spectrum skill set from designing modern UIs to building secure, scalable backend systems — plus a passion for automation and security.
      </motion.p>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto px-6">
        <SkillCard
          title="Frontend"
          delay={0.1}
          skills={[
            'React, Next.js',
            'Tailwind CSS, Sass, Bootstrap',
            'TypeScript, JavaScript',
            'Framer Motion, Chart.js',
            'Responsive & Accessible UI',
          ]}
        />
        <SkillCard
          title="Backend"
          delay={0.2}
          skills={[
            'Node.js, Express.js',
            'RESTful APIs, GraphQL',
            'Authentication & Authorization',
            'Prisma, Mongoose',
            'Session Management, JWT',
          ]}
        />
        <SkillCard
          title="DevOps"
          delay={0.3}
          skills={[
            'Git & GitHub, GitHub Actions',
            'CI/CD Pipelines',
            'Docker (basic setup)',
            'Vercel, Netlify, Railway',
            'Monitoring & Logs',
          ]}
        />
        <SkillCard
          title="Database"
          delay={0.4}
          skills={[
            'MongoDB, PostgreSQL, MySQL',
            'Firebase Firestore',
            'Supabase, PlanetScale',
            'Prisma ORM, Mongoose ODM',
            'Data Modeling & Indexing',
          ]}
        />
        <SkillCard
          title="Automation"
          delay={0.5}
          skills={[
            'Python Scripting',
            'Web Scraping (BeautifulSoup, Puppeteer)',
            'OpenAI, LangChain, API Integrations',
            'Task Automation (Cron, Shell)',
            'Zapier (basic usage)',
          ]}
        />
        <SkillCard
          title="Cybersecurity"
          delay={0.6}
          skills={[
            'OWASP Top 10',
            'Input Validation & Sanitization',
            'Secure Auth Practices (JWT, OAuth)',
            'Bug Bounty Tools (Burp Suite, Nmap)',
            'Basic Recon & Vulnerability Testing',
          ]}
        />
      </div>
    </section>
  );
};
