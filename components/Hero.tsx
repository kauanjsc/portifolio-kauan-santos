'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950 noise-bg"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-30" />

      <div
        className="absolute w-[600px] h-[600px] bg-brand-500/5 dark:bg-brand-600/10 rounded-full blur-[150px] top-[-150px] right-[-150px] pointer-events-none"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section-container relative z-10 text-center py-32"
      >
        <motion.div variants={item} className="flex justify-center mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
                       bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 
                       font-mono text-xs text-neutral-600 dark:text-neutral-400 tracking-wider"
          >
            <Sparkles className="w-3 h-3 text-brand-500" />
            Disponível para novos desafios
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-6xl sm:text-7xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tight"
        >
          <span className="block text-neutral-950 dark:text-white">Kauan</span>
          <span className="block text-neutral-950 dark:text-white">
            Santos
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="font-mono text-neutral-500 dark:text-neutral-400 text-sm md:text-base tracking-[0.3em] uppercase mb-8"
        >
          Desenvolvedor de Software Júnior
        </motion.p>

        <motion.p
          variants={item}
          className="font-body text-lg md:text-xl text-neutral-700 dark:text-neutral-300 
                     max-w-2xl mx-auto mb-12 text-balance leading-relaxed"
        >
          Construindo{' '}
          <span className="text-neutral-950 dark:text-white font-medium">
            experiências web acessíveis e modernas
          </span>
          . Sempre em busca de evoluir e aplicar boas práticas de desenvolvimento.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <motion.button
            onClick={() => scrollTo('#projects')}
            className="btn-primary text-base px-8 py-3.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl shadow-lg shadow-brand-500/20 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver Projetos
            <span className="ml-1.5">→</span>
          </motion.button>
          <motion.button
            onClick={() => scrollTo('#contact')}
            className="btn-outline text-base px-8 py-3.5 bg-transparent border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all"
            whileHover={{ scale: 1.02 }}
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
              href: 'https://www.linkedin.com/in/kauan-santos-b76829239/',
              label: 'LinkedIn',
            },
            {
              icon: <Mail className="w-5 h-5" />,
              href: 'mailto:kauanjscardoso@gmail.com',
              label: 'E-mail',
            },
          ].map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-xl 
                         bg-neutral-50 dark:bg-neutral-900/50 
                         border border-neutral-200 dark:border-neutral-800 
                         flex items-center justify-center
                         text-neutral-500 dark:text-neutral-400 
                         hover:text-brand-600 dark:hover:text-brand-400 
                         hover:border-brand-300 dark:hover:border-brand-700
                         transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {icon}
            </motion.a>
          ))}
          <div className="w-px h-6 bg-neutral-300 dark:bg-neutral-800 mx-1" />
          <span className="font-mono text-xs text-neutral-500">@kauanjsc</span>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                   text-neutral-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
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