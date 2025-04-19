'use client';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Twitter, Mail, Phone, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white sm:px-8 sm:py-10 px-5 py-8">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg text-center mb-10 mx-auto max-w-2xl"
      >
        I would love to hear from you! Whether you're looking for a collaboration, want to chat about tech, or have any questions, feel free to reach out.
      </motion.p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">

        {/* Phone */}
        <motion.a href="tel:+917736346646"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="p-6 rounded-xl shadow-xl border-2 border-gray-700 hover:bg-gray-800 transition-all flex flex-col items-center justify-center w-full"
        >
          <Phone className="text-white text-4xl mb-4" />
          <span className="text-lg font-semibold">Mobile</span>
        </motion.a>

        {/* Email */}
        <motion.a href="mailto:gopalakrishnan.work@gmail.com"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="p-6 rounded-xl shadow-xl border-2 border-gray-700 hover:bg-gray-800 transition-all flex flex-col items-center justify-center w-full"
        >
          <Mail className="text-white text-4xl mb-4" />
          <span className="text-lg font-semibold text-center break-words">Email</span>
        </motion.a>

          {/* Whatsapp */}
          <motion.a
          href="https://wa.me/917736346646"
          target="_blank"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-6 rounded-xl shadow-xl border-2 border-gray-700 hover:bg-gray-800 transition-all flex flex-col items-center justify-center w-full"
        >
          <MessageCircle className="text-white text-4xl mb-4" />
          <span className="text-xl font-semibold">Whatsapp</span>
        </motion.a>

        {/* Linkedin */}
        <motion.a
          href="https://www.linkedin.com/in/gobeecode/"
          target="_blank"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-6 rounded-xl shadow-xl border-2 border-gray-700 hover:bg-gray-800 transition-all flex flex-col items-center justify-center w-full"
        >
          <Linkedin className="text-white text-4xl mb-4" />
          <span className="text-xl font-semibold">Linkedin</span>
        </motion.a>

        {/* Twitter */}
        <motion.a
          href="https://twitter.com/gobeecode"
          target="_blank"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="p-6 rounded-xl shadow-xl border-2 border-gray-700 hover:bg-gray-800 transition-all flex flex-col items-center justify-center w-full"
        >
          <Twitter className="text-white text-4xl mb-4" />
          <span className="text-xl font-semibold">Twitter</span>
        </motion.a>

        {/* Instagram */}
        <motion.a
          href="https://instagram.com/gobeecode"
          target="_blank"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-6 rounded-xl shadow-xl border-2 border-gray-700 hover:bg-gray-800 transition-all flex flex-col items-center justify-center w-full"
        >
          <Instagram className="text-white text-4xl mb-4" />
          <span className="text-xl font-semibold">Instagram</span>
        </motion.a>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mt-10"
      >
        <p className="text-lg text-gray-300">
          Feel free to message me directly through any of the above platforms, or simply follow me for updates.
        </p>
      </motion.div>
    </section>
  );
};
