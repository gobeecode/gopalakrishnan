'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-md ">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-8 px-5 h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-5">
          <motion.img
          src="images/profile.jpg"
          alt="Gopalakrishnan (@gobeecode)"
          width={50}
          height={50}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-md"
        />
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.05, y: -2 }}
              className="relative group"
            >
              <Link href={link.href} className="font-medium text-lg">
                {link.name}
              </Link>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 px-6 py-4 space-y-4 text-white"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-lg font-medium hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
