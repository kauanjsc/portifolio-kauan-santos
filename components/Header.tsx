'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Contato', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-light shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center shadow-glow">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-lg">
              <span className="gradient-text">Kauan</span>
              <span className="text-gray-400 dark:text-gray-500">.</span>
            </span>
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                className={`nav-link font-body text-sm font-medium transition-colors duration-200 ${
                  activeSection === href.slice(1)
                    ? 'text-brand-400 active'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 rounded-xl glass-light flex items-center justify-center
                         text-gray-500 dark:text-gray-400 hover:text-brand-400 
                         transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('#contact')}
              className="hidden md:flex btn-primary text-sm py-2"
            >
              Fale Comigo
            </motion.button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-xl glass-light flex items-center justify-center
                         text-gray-500 dark:text-gray-400"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -16, pointerEvents: 'none' }}
        transition={{ duration: 0.25 }}
        className="fixed top-20 left-4 right-4 z-40 rounded-2xl glass-light shadow-xl border border-white/20 p-6"
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className={`text-left font-body font-medium text-base py-1 transition-colors duration-200 ${
                activeSection === href.slice(1)
                  ? 'text-brand-400'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="btn-primary justify-center mt-2"
          >
            Fale Comigo
          </button>
        </nav>
      </motion.div>
    </>
  );
}
