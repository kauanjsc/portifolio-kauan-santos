'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  GraduationCap,
  Terminal,
  Layers,
  Accessibility,
} from 'lucide-react';

// Removidas as cores individuais para manter um padrão visual "clean"
const technologies = [
  { name: 'Vue.js' },
  { name: 'Next.js' },
  { name: 'TypeScript' },
  { name: 'FastAPI' },
  { name: 'Python' },
  { name: 'Tailwind CSS' },
  { name: 'PostgreSQL' },
  { name: 'Git & GitLab' },
  { name: 'Figma (Básico)' }, // Adicionar Figma básico é ótimo para Front-End
];

const facts = [
  { icon: <GraduationCap className="w-5 h-5" />, text: 'Estudante de Ciência da Computação - UESPI' },
  { icon: <Layers className="w-5 h-5" />, text: 'Foco no Front-End' },
  { icon: <Terminal className="w-5 h-5" />, text: 'Desenvolvimento guiado por boas práticas' },
];

function TechCard({ tech, index }: { tech: typeof technologies[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="relative group px-4 py-3 rounded-xl 
                 bg-neutral-50 dark:bg-neutral-900/50 
                 border border-neutral-200 dark:border-neutral-800 
                 flex items-center gap-3 cursor-default transition-all duration-300
                 hover:border-brand-400/50 hover:shadow-lg hover:shadow-brand-500/5"
    >
      <span className="font-mono text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
        {tech.name}
      </span>
    </motion.div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white dark:bg-neutral-950">
      {/* Subtle background - Bem mais suave que o anterior */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/[0.02] to-transparent pointer-events-none" />

      <div className="section-container" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-brand-600 dark:text-brand-400 tracking-widest uppercase mb-2">
            Sobre Mim
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-950 dark:text-white">
            Quem sou <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">eu</span>
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
            <p className="font-body text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
              Olá! Sou <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Kauan Santos</span>, 
              um Desenvolvedor de Software Júnior em constante evolução e aprendizado.
            </p>
            <p className="font-body text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Atualmente curso Ciência da Computação e estou dedicando meu projeto de conclusão (TCC) ao estudo da{' '}
              <span className="text-brand-600 dark:text-brand-400 font-medium">Acessibilidade Digital</span>. 
              Acredito que a web deve ser um espaço inclusivo, e busco aplicar esses conceitos nas interfaces que construo.
            </p>
            <p className="font-body text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Tenho facilidade para transitar entre o desenvolvimento de interfaces responsivas com Vue.js e Next.js, 
              até a estruturação de APIs no back-end utilizando FastAPI.
            </p>

            {/* Facts list - Cores neutras com ícones azuis */}
            <div className="pt-4 space-y-4">
              {facts.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="text-brand-500 p-2 rounded-lg bg-brand-50 dark:bg-brand-900/20">
                    {fact.icon}
                  </div>
                  <span className="font-body text-sm text-neutral-700 dark:text-neutral-300">{fact.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Removi a seção de "Stats" (estatísticas como infinitos projetos/anos). 
                Isso limpa a interface e evita números que não agregam tanto valor prático agora. */}
          </motion.div>

          {/* Right: Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-display text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
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