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
    icon: <Globe className="w-5 h-5" />,
    title: 'Visão Full Stack',
    description:
      'Compreensão do ciclo de desenvolvimento integrado, construindo desde a estrutura da API até a interface do usuário.',
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: 'Banco de Dados',
    description:
      'Experiência prática com PostgreSQL, modelagem relacional estruturada e uso de ORMs como Prisma.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'APIs e Segurança',
    description:
      'Implementação de rotas e autenticação via JWT no back-end, garantindo acesso seguro aos dados.',
  },
  {
    icon: <Gauge className="w-5 h-5" />,
    title: 'Acessibilidade & UI',
    description:
      'Foco em interfaces limpas, semânticas e acessíveis, priorizando a experiência de todos os usuários.',
  },
  {
    icon: <Boxes className="w-5 h-5" />,
    title: 'Componentização',
    description:
      'Desenvolvimento de layouts modulares e reutilizáveis utilizando Vue.js, Next.js e Tailwind CSS.',
  },
  {
    icon: <GitBranch className="w-5 h-5" />,
    title: 'Versionamento',
    description:
      'Uso diário de Git e GitLab, mantendo fluxos organizados com branches, commits descritivos e merge requests.',
  },
  {
    icon: <Workflow className="w-5 h-5" />,
    title: 'Integração Front + Back',
    description:
      'Conexão eficiente entre as camadas, consumindo APIs RESTful de forma fluida e gerenciando o estado da aplicação.',
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: 'Evolução Contínua',
    description:
      'Sempre atualizando meus conhecimentos técnicos e buscando aplicar as melhores práticas da engenharia de software.',
  },
];

const timeline = [
  {
    period: '2023 — Presente',
    title: 'Desenvolvimento Web',
    description: 'Atuação prática na construção de aplicações e sistemas reais utilizando Vue.js, Next.js e FastAPI.',
    tag: 'Prática & Projetos',
  },
  {
    period: '2022 — 2023',
    title: 'Fundamentos Front-End',
    description: 'Aprofundamento em lógica de programação, JavaScript, TypeScript e ecossistema web.',
    tag: 'Estudo',
  },
  {
    period: '2021 — Presente',
    title: 'Ciência da Computação',
    description: 'Graduação com foco em algoritmos, banco de dados e engenharia de software.',
    tag: 'Universidade Estadual do Piauí',
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-32 relative bg-neutral-50 dark:bg-neutral-900/20">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-brand-600 dark:text-brand-400 tracking-widest uppercase mb-2">
            Habilidades
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-950 dark:text-white">
            O que eu <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Entrego</span>
          </h2>
          <p className="font-body text-neutral-600 dark:text-neutral-400 mt-4 max-w-xl leading-relaxed">
            Áreas de conhecimento e práticas de desenvolvimento que venho consolidando ao longo da minha trajetória acadêmica e profissional.
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
              className="group relative p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-brand-500/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-4 group-hover:scale-110 group-hover:bg-brand-50 dark:group-hover:bg-brand-900/20 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="font-display text-sm font-bold text-neutral-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="font-body text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-10">
            Trajetória
          </h3>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-neutral-200 dark:bg-neutral-800 ml-[7.5px] hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="md:pl-10 relative"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-[16px] h-[16px] rounded-full bg-white dark:bg-neutral-950 border-4 border-brand-500 hidden md:block" />

                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-mono text-sm font-medium text-brand-600 dark:text-brand-400">
                      {item.period}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono text-[10px] uppercase tracking-wider font-medium">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-neutral-900 dark:text-white mb-1.5">
                    {item.title}
                  </h4>
                  <p className="font-body text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
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