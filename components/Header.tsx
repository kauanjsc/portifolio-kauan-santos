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
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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
            ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center shadow-brand transition-transform group-hover:scale-105">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-gray-900 dark:text-white hidden sm:block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-cyan">Kauan</span>
              <span className="text-gray-900 dark:text-white ml-1">Santos</span>
            </span>
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                className={`font-body text-sm font-medium transition-colors duration-200 relative ${
                  activeSection === href.slice(1)
                    ? 'text-brand-600 dark:text-brand-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400'
                }`}
              >
                {label}
                {activeSection === href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-brand-600 dark:bg-brand-400 rounded-full"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {resolvedTheme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </motion.button>
            )}

            {/* Botão Fale Comigo */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavClick('#contact')}
              className="hidden md:flex px-6 py-2.5 rounded-xl bg-brand-600 text-white font-display text-sm font-bold shadow-brand transition-all hover:bg-brand-500"
            >
              Fale Comigo
            </motion.button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -16, pointerEvents: 'none' }}
        transition={{ duration: 0.25 }}
        className="fixed top-20 left-4 right-4 z-40 rounded-2xl bg-white dark:bg-gray-900 shadow-xl border border-gray-100 dark:border-gray-800 p-6"
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className={`text-left font-body font-medium text-base py-2 transition-colors duration-200 border-b border-gray-50 dark:border-gray-800 last:border-0 ${
                activeSection === href.slice(1)
                  ? 'text-brand-600 dark:text-brand-400'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="w-full justify-center py-3.5 mt-2 rounded-xl bg-brand-600 text-white font-display text-base font-bold shadow-brand transition-all hover:bg-brand-500"
          >
            Fale Comigo
          </button>
        </nav>
      </motion.div>
    </>
  );
}