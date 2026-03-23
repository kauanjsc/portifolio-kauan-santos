'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star, TrendingUp, Shield, BarChart2, Layers } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  icon: React.ReactNode;
  featured?: boolean;
  deploy?: string;
  github?: string;
  status: 'Em Produção' | 'Em Desenvolvimento' | 'Concluído';
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Acessibilidade Urbana',
    description: 'Meu TCC: Sistema de mapeamento colaborativo e gestão com dashboard.',
    longDescription:
      'Projeto desenvolvido 100% por mim de ponta a ponta (Full Stack). Sistema web para mapeamento de acessibilidade utilizando Vue.js, FastAPI, PostgreSQL e gestão de acesso via RFID.',
    tags: ['Vue.js', 'FastAPI','Tailwind','PostgreSQL', 'Leaflet'],
    icon: <Shield className="w-6 h-6" />,
    featured: true,
    deploy: 'https://teresina-acessivel-api.onrender.com',
    github: 'https://github.com/kauanjsc/sistema-acessibilidade-urbana',
    status: 'Concluído',
  },
  {
    id: 2,
    title: 'BaseSUAS',
    description: 'Cadastro de Trabalhadores e Serviços Socioassistenciais de Teresina.',
    longDescription:
      'Sistema integrado ao GSUAS para gerenciar dados da rede socioassistencial. Contribuí focado exclusivamente no desenvolvimento do Front-End (Código fechado no GitLab).', 
    tags: ['Vue.js', 'FastAPI', 'TypeScript', 'Tailwind',],
    icon: <BarChart2 className="w-6 h-6" />,
    deploy: 'https://basesuas.teresina.pi.gov.br/',
    github: 'https://git.teresina.pi.gov.br/kauanjsc',
    status: 'Em Produção',
  },
  {
    id: 3,
    title: 'GoBody',
    description: 'Marketplace fitness para busca de academias e reserva de aulas.',
    longDescription:
      'Projeto MVP de uma plataforma fitness com API escalável. Contribuí no desenvolvimento do Front-End em colaboração com a equipe.',
    tags: ['Next.js', 'FastAPI', 'TypeScript', 'Tailwind', 'PostgreSQL',],
    icon: <Layers className="w-6 h-6" />,
    deploy: 'https://faisca-massacre.vercel.app/',
    github: 'https://github.com/projetonickjumper-byte/GoBody-Front-end',
    status: 'Em Desenvolvimento',  
  },
  {
    id: 4,
    title: 'GSUAS THE',
    description: 'Sistema da Prefeitura de Teresina para acesso a serviços de assistência social.',
    longDescription:
      'Ferramenta central de gestão para os serviços da SEMCASPI. Atuei no desenvolvimento Full Stack (Front-End e Back-End) neste projeto em equipe (Código fechado no GitLab da Prefeitura).',
    tags: ['Vue.js', 'FastAPI', 'Storybook (PMT)','TypeScript', 'PostgreSQL',],
    icon: <TrendingUp className="w-6 h-6" />,
    featured: true,
    deploy: 'https://s64sdf26-8080.brs.devtunnels.ms/',
    github: 'https://git.teresina.pi.gov.br/kauanjsc/gsuas-the',
    status: 'Concluído',
  },
];

function StatusBadge({ status }: { status: Project['status'] }) {
  const colors = {
    'Em Produção': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    'Em Desenvolvimento': 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    'Concluído': 'bg-brand-500/10 text-brand-600 dark:text-brand-400 border-brand-500/20',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-mono font-medium border ${colors[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === 'Em Produção' ? 'bg-emerald-500 animate-pulse' : status === 'Em Desenvolvimento' ? 'bg-amber-500 animate-pulse' : 'bg-brand-500'}`} />
      {status}
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative flex flex-col h-full bg-neutral-50 dark:bg-neutral-900/40 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-brand-500/30 transition-colors duration-300"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-6 flex flex-col h-full gap-5 relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover:scale-105 transition-transform duration-300 shadow-sm">
            {project.icon}
          </div>
          <div className="flex flex-col items-end gap-2">
            <StatusBadge status={project.status} />
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 text-[10px] uppercase tracking-wider font-mono">
                <Star className="w-3 h-3 text-brand-500" /> Destaque
              </span>
            )}
          </div>
        </div>

        <div className="flex-1">
          <h3 className="font-display text-xl font-bold text-neutral-900 dark:text-white mb-2">
            {project.title}
          </h3>
          <p className="font-body text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed min-h-[60px]">
            {hovered ? project.longDescription : project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 mt-auto border-t border-neutral-200 dark:border-neutral-800">
          {project.deploy && (
            <motion.a
              href={project.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-4 h-4" />
              Acessar
            </motion.a>
          )}
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-transparent border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm font-medium transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4" />
              Repositório
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-32 relative bg-white dark:bg-neutral-950">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-mono text-sm text-brand-600 dark:text-brand-400 tracking-widest uppercase mb-2">
                Portfólio
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-950 dark:text-white">
                Projetos 
              </h2>
            </div>
            
            <a
              href="https://github.com/kauanjsc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-500/30 transition-all font-medium text-sm w-fit"
            >
              <Github className="w-4 h-4" />
              Ver mais no GitHub
            </a>
          </div>
          
          <p className="font-body text-neutral-600 dark:text-neutral-400 mt-6 max-w-2xl leading-relaxed">
            Soluções que desenvolvi de forma independente ou em equipe. Passe o mouse sobre os cards para ver mais detalhes sobre a minha atuação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}