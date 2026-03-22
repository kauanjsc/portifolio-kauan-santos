'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  GraduationCap,
  Coffee,
  Zap,
  Heart,
} from 'lucide-react';

const technologies = [
  { name: 'Vue.js', color: 'from-emerald-500/20 to-emerald-500/5', border: 'border-emerald-500/20' },
  { name: 'TypeScript', color: 'from-blue-500/20 to-blue-500/5', border: 'border-blue-500/20' },
  { name: 'Next.js', color: 'from-gray-500/20 to-gray-500/5', border: 'border-gray-500/20' },
  { name: 'FastAPI', color: 'from-teal-500/20 to-teal-500/5', border: 'border-teal-500/20' },
  { name: 'Acessibilidade', color: 'from-indigo-500/20 to-indigo-500/5', border: 'border-indigo-500/20' },
  { name: 'Tailwind', color: 'from-cyan-500/20 to-cyan-500/5', border: 'border-cyan-500/20' },
  { name: 'PostgreSQL',  color: 'from-blue-600/20 to-blue-600/5', border: 'border-blue-600/20' },
  { name: 'GitLab / Git', color: 'from-orange-500/20 to-orange-500/5', border: 'border-orange-500/20' },
  { name: 'Python', color: 'from-yellow-500/20 to-yellow-500/5', border: 'border-yellow-500/20' },
];

const facts = [
  { icon: <GraduationCap className="w-5 h-5" />, text: 'Estudante de Ciência da Computação', color: 'text-brand-400' },
  { icon: <Coffee className="w-5 h-5" />, text: 'Apaixonado por código limpo e boas práticas', color: 'text-accent-cyan' },
  { icon: <Zap className="w-5 h-5" />, text: 'Foco em performance e escalabilidade', color: 'text-yellow-400' },
  { icon: <Heart className="w-5 h-5" />, text: 'Amo criar experiências digitais incríveis', color: 'text-rose-400' },
];

function TechCard({ tech, index }: { tech: typeof technologies[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.05, y: -4 }}
      className={`relative group px-4 py-3 rounded-xl bg-gradient-to-b ${tech.color} 
                 border ${tech.border} backdrop-blur-sm
                 flex items-center gap-3 cursor-default transition-shadow duration-300
                 hover:shadow-lg`}
    >
      <span className="font-mono text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
    </motion.div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/[0.03] to-transparent pointer-events-none" />

      <div className="section-container" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label"> sobre mim</p>
          <h2 className="section-title">
            Quem sou <span className="gradient-text">eu</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="font-body text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Olá! Sou{' '}
              <span className="text-gray-900 dark:text-white font-semibold">Kauan Santos</span>, um
              desenvolvedor Full Stack apaixonado por tecnologia e inovação.
            </p>
            <p className="font-body text-gray-600 dark:text-gray-400 leading-relaxed">
              Atualmente cursando{' '}
              <span className="text-brand-400 font-medium">Ciência da Computação</span>, com foco no
              desenvolvimento de aplicações web modernas, escaláveis e com ótima experiência do usuário.
            </p>
            <p className="font-body text-gray-600 dark:text-gray-400 leading-relaxed">
              Trabalho com o ciclo completo de desenvolvimento — desde a arquitetura de banco de dados e
              APIs REST no back-end até interfaces ricas e responsivas no front-end.
            </p>

            {/* Facts list */}
            <div className="pt-4 space-y-3">
              {facts.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className={fact.color}>{fact.icon}</span>
                  <span className="font-body text-sm text-gray-600 dark:text-gray-400">{fact.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: '10+', label: 'Projetos' },
                { value: '2+', label: 'Anos codando' },
                { value: '∞', label: 'Curiosidade' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="text-center p-4 rounded-xl glass border border-white/10"
                >
                  <div className="font-display text-3xl font-black gradient-text">{stat.value}</div>
                  <div className="font-body text-xs text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-display text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Stack & Ferramentas
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {technologies.map((tech, i) => (
                <TechCard key={tech.name} tech={tech} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
