'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Sparkles } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-100" />

      {/* Gradient orbs */}
      <div
        className="glow-dot w-[600px] h-[600px] bg-brand-600 top-[-200px] right-[-200px]"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="glow-dot w-[400px] h-[400px] bg-accent-violet bottom-[-100px] left-[-100px]"
        style={{ animationDelay: '3s' }}
      />
      <div
        className="glow-dot w-[300px] h-[300px] bg-accent-cyan top-[40%] left-[30%]"
        style={{ animationDelay: '6s', opacity: 0.08 }}
      />

      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-brand-500/10"
            style={{
              width: `${i * 280}px`,
              height: `${i * 280}px`,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20 + i * 10,
              repeat: Infinity,
              ease: 'linear',
              direction: i % 2 === 0 ? 'reverse' : 'normal',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section-container relative z-10 text-center py-32"
      >
        {/* Badge */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                       glass border border-brand-500/30 
                       font-mono text-xs text-brand-300 tracking-wider"
          >
            <Sparkles className="w-3 h-3 text-brand-400" />
            Disponível para novos projetos
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-display text-6xl sm:text-7xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tight"
        >
          <span className="block text-gray-900 dark:text-white">Kauan</span>
          <span className="block gradient-text">Santos</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={item}
          className="font-mono text-brand-400 text-sm md:text-base tracking-[0.3em] uppercase mb-8"
        >
          Desenvolvedor Front-End
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="font-body text-lg md:text-xl text-gray-500 dark:text-gray-400 
                     max-w-2xl mx-auto mb-12 text-balance leading-relaxed"
        >
          Construindo{' '}
          <span className="text-gray-800 dark:text-gray-200 font-medium">
            soluções digitais modernas e eficientes
          </span>{' '}
          — do back-end ao front-end, com foco em performance e experiência do usuário.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <motion.button
            onClick={() => scrollTo('#projects')}
            className="btn-primary text-base px-8 py-4"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver Projetos
            <span className="ml-1">→</span>
          </motion.button>
          <motion.button
            onClick={() => scrollTo('#contact')}
            className="btn-outline text-base px-8 py-4"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Entre em Contato
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex items-center justify-center gap-4">
          {[
            {
              icon: <Github className="w-5 h-5" />,
              href: 'https://github.com/kauanjsc',
              label: 'GitHub',
            },
            {
              icon: <Linkedin className="w-5 h-5" />,
              href: 'https://linkedin.com/in/kauan-santos-b76829239/',
              label: 'LinkedIn',
            },
          ].map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-xl glass border border-white/10 
                         flex items-center justify-center
                         text-gray-400 hover:text-brand-400 hover:border-brand-500/40
                         transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {icon}
            </motion.a>
          ))}
          <div className="w-px h-6 bg-gray-700 mx-1" />
          <span className="font-mono text-xs text-gray-500">@kauanjsc</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                   text-gray-400 hover:text-brand-400 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <ArrowDown className="w-4 h-4" />
      </motion.button>
    </section>
  );
}
