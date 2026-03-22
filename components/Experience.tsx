'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Cpu,
  Globe,
  Database,
  GitBranch,
  Boxes,
  ShieldCheck,
  Gauge,
  Workflow,
} from 'lucide-react';

const differentials = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Full Stack Completo',
    description:
      'Domínio do ciclo completo de desenvolvimento — APIs, banco de dados, front-end e deploy.',
    color: 'from-brand-500/20 to-brand-600/10',
    border: 'border-brand-500/30',
    iconColor: 'text-brand-400',
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Modelagem de Dados',
    description:
      'Experiência com PostgreSQL, modelagem relacional, queries otimizadas e uso de ORMs como Prisma.',
    color: 'from-indigo-500/20 to-indigo-600/10',
    border: 'border-indigo-500/30',
    iconColor: 'text-indigo-400',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'APIs Seguras',
    description:
      'Implementação de autenticação JWT, refresh tokens, controle de acesso e proteção de rotas.',
    color: 'from-emerald-500/20 to-emerald-600/10',
    border: 'border-emerald-500/30',
    iconColor: 'text-emerald-400',
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    title: 'Foco em Performance',
    description:
      'Otimização de renderização, lazy loading, code splitting e melhores práticas de web performance.',
    color: 'from-orange-500/20 to-orange-600/10',
    border: 'border-orange-500/30',
    iconColor: 'text-orange-400',
  },
  {
    icon: <Boxes className="w-6 h-6" />,
    title: 'Componentização',
    description:
      'Desenvolvimento de interfaces com componentes reutilizáveis, design systems e Storybook.',
    color: 'from-pink-500/20 to-pink-600/10',
    border: 'border-pink-500/30',
    iconColor: 'text-pink-400',
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: 'Boas Práticas',
    description:
      'Git flow, commits semânticos, code review, testes unitários e documentação de código.',
    color: 'from-amber-500/20 to-amber-600/10',
    border: 'border-amber-500/30',
    iconColor: 'text-amber-400',
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: 'Integração Front + Back',
    description:
      'Conexão fluida entre camadas com React Query, gerenciamento de estado e tratamento de erros.',
    color: 'from-violet-500/20 to-violet-600/10',
    border: 'border-violet-500/30',
    iconColor: 'text-violet-400',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Aprendizado Contínuo',
    description:
      'Sempre atualizado com novas tecnologias, padrões de arquitetura e tendências do mercado.',
    color: 'from-cyan-500/20 to-cyan-600/10',
    border: 'border-cyan-500/30',
    iconColor: 'text-cyan-400',
  },
];

const timeline = [
  {
    period: '2023 — Presente',
    title: 'Desenvolvimento Full Stack',
    description: 'Projetos pessoais e freelance com foco em Vue.js, Next.js e FastAPI',
    tag: 'Freelance, estudos & estagios',
  },
  {
    period: '2022 — 2023',
    title: 'Front-end & React',
    description: 'Aprofundamento em React, TypeScript, e ecossistema frontend',
    tag: 'Estudo',
  },
  {
    period: '2021 —  Presente',
    title: 'Ciência da Computação',
    description: 'Graduação com foco em algoritmos, banco de dados e engenharia de software',
    tag: 'Universidade Estadual do Piauí',
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-32 relative">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label"> experiência</p>
          <h2 className="section-title">
            Meus <span className="gradient-text">Diferenciais</span>
          </h2>
          <p className="font-body text-gray-500 dark:text-gray-400 mt-3 max-w-xl">
            Habilidades e características que me destacam como desenvolvedor Full Stack.
          </p>
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative p-5 rounded-2xl bg-gradient-to-br ${item.color} 
                         border ${item.border} group cursor-default`}
            >
              <div className={`${item.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="font-display text-sm font-bold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="font-body text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h3 className="font-display text-xl font-bold text-gray-800 dark:text-white mb-10">
            Trajetória
          </h3>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-brand-500/20 to-transparent ml-[7px] hidden md:block" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  className="md:pl-10 relative"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-brand-600 border-2 border-brand-400 shadow-glow hidden md:block" />

                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-brand-400">{item.period}</span>
                    <span className="px-2 py-0.5 rounded-md bg-brand-500/10 border border-brand-500/20 font-mono text-[10px] text-brand-300">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="font-body text-sm text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
