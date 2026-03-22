'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star, TrendingUp, Shield, BarChart2, Layers } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  icon: React.ReactNode;
  color: string;
  gradient: string;
  featured?: boolean;
  deploy?: string;
  github?: string;
  status: 'Em Produção' | 'Em Desenvolvimento' | 'Concluído';
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Sistema de Acessibilidade Urbana',
    description: 'TCC — sistema de gestão e controle de acesso com RFID e dashboard.',
    longDescription:
      'Sistema web para mapeamento colaborativo de acessibilidade urbana utilizando Vue.js, Leaflet e Design System Gov.br. (TCC)',
    tags: ['Vue.js', 'Node.js', 'FastAPI', 'PostgreSQL'],
    icon: <Shield className="w-6 h-6" />,
    color: 'from-brand-500/20 to-violet-500/10',
    gradient: 'from-brand-500 to-violet-500',
    featured: true,
    deploy: 'https://teresina-acessivel-api.onrender.com',
    github: 'https://github.com/kauanjsc/sistema-acessibilidade-urbana',
    status: 'Concluído',
  },
  {
    id: 2,
    title: 'GSUAS THE',
    description: 'Sistema que oferece aos cidadãos a possibilidade de acessar serviços de assistência social da Prefeitura de forma prática, rápida e segura, promovendo inclusão social e mais autonomia no dia a dia.',
    longDescription:
      'ferramenta central de gestão para os serviços da SEMCASPI, integrando dados do BaseSuas (Projeto em equipe - Atuei como Front-end, codigo bloqueado por ser um sistema da prefeitura - GitLab privado)',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'JWT', 'Prisma', 'Chart.js'],
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-emerald-500/20 to-teal-500/10',
    gradient: 'from-emerald-500 to-teal-500',
    featured: true,
    deploy: 'https://s64sdf26-8080.brs.devtunnels.ms/',
    github: 'https://git.teresina.pi.gov.br/kauanjsc/gsuas-the',
    status: 'Concluído',
  },
  {
    id: 3,
    title: 'Projeto GoBody',
    description: 'API escalável com autenticação completa, roles e refresh tokens.',
    longDescription:
      'Prjeto MVP com a ideia de Marketplace para a area fitness, onde o usuário pode se cadastrar, criar um perfil, listar academias próximas e reservar aulas. Atuei como Front-end (Projeto em equipe)',
    tags: [ 'Next.js ', 'Node.js', 'TypeScript', 'Integrações Swagger' ],
    icon: <Layers className="w-6 h-6" />,
    color: 'from-orange-500/20 to-amber-500/10',
    gradient: 'from-orange-500 to-amber-500',
    deploy: 'https://faisca-massacre.vercel.app/',
    github: 'https://github.com/projetonickjumper-byte/GoBody-Front-end',
    status: 'Em Desenvolvimento',  
  },
  {
    id: 4,
    title: 'BaseSuas',
    description: 'Sistema de Cadastro de Trabalhadores e Serviços Socioassistencias do Município de Teresina/PI.',
    longDescription:
      'BaseSUAS tem por finalidade coletar, processar e gerenciar dados sobre a rede socioassistencial no âmbito do Município de Teresina/PI, além de viabilizar o acesso a outros sistemas municipais, por meio de uma integração com o Sistema de Gestão do SUAS de Teresina (GSUAS THE) - (Projeto em equipe - Atuei como Front-end, codigo bloqueado por ser um sistema da prefeitura - GitLab privado)', 
    tags: ['Vue.js', 'TypeScript', 'Tailwind', 'Axios', 'Pinia', 'Vite'],
    icon: <BarChart2 className="w-6 h-6" />,
    color: 'from-pink-500/20 to-rose-500/10',
    gradient: 'from-pink-500 to-rose-500',
    deploy: 'https://basesuas.teresina.pi.gov.br/',
    github: 'https://git.teresina.pi.gov.br/kauanjsc',
    status: 'Em Produção',
  },
];

function StatusBadge({ status }: { status: Project['status'] }) {
  const colors = {
    'Em Produção': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    'Em Desenvolvimento': 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    'Concluído': 'bg-brand-500/15 text-brand-400 border-brand-500/30',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium border ${colors[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === 'Em Produção' ? 'bg-emerald-400 animate-pulse' : status === 'Em Desenvolvimento' ? 'bg-amber-400 animate-pulse' : 'bg-brand-400'}`} />
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
      className={`card-project group ${project.featured ? 'md:col-span-1' : ''}`}
    >
      {/* Gradient top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Hover glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      <div className="relative p-6 flex flex-col h-full gap-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} 
                        border border-white/10 flex items-center justify-center
                        text-gray-600 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300`}
          >
            {project.icon}
          </div>
          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-[10px] font-mono">
                <Star className="w-2.5 h-2.5" /> Destaque
              </span>
            )}
            <StatusBadge status={project.status} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:gradient-text transition-all duration-300">
            {project.title}
          </h3>
          <p className="font-body text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            {hovered ? project.longDescription : project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-badge">
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2 border-t border-white/5">
          {project.deploy && (
            <motion.a
              href={project.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-4 flex-1 justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Ver Projeto
            </motion.a>
          )}
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs py-2 px-4 flex-1 justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-3.5 h-3.5" />
              Ver Código
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
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/[0.03] to-transparent dark:via-brand-500/[0.03] pointer-events-none" />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <p className="section-label"> projetos</p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="section-title">
              O que eu <span className="gradient-text">construí ou fiz parte </span>
            </h2>
            <a
              href="https://github.com/kauansantos"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm py-2 px-4"
            >
              <Github className="w-4 h-4" />
              Ver GitHub
            </a>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="font-body text-gray-500 dark:text-gray-400 mb-12 max-w-2xl"
        >
          Projetos reais desenvolvidos com foco em boas práticas, código limpo e soluções que resolvem
          problemas reais. Passe o mouse para ver mais detalhes.
        </motion.p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
