'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, ArrowUp } from 'lucide-react';

const quickLinks = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Contato', href: '#contact' },
];

const socials = [
  { icon: <Github className="w-5 h-5" />, href: 'https://github.com/kauanjsc', label: 'GitHub' },
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/kauan-santos-b76829239/', label: 'LinkedIn' },
  { icon: <Mail className="w-5 h-5" />, href: 'mailto:kauanjscardoso@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white pt-16 border-t border-gray-100">
      {/* Linha gradiente no topo (adaptada para o tema claro) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center shadow-brand">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-gray-900">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-cyan">Kauan</span>
                <span className="text-gray-900 ml-1">Santos</span>
              </span>
            </div>
            <p className="font-body text-sm text-gray-500 leading-relaxed max-w-xs">
              Desenvolvedor Full Stack apaixonado por criar soluções digitais modernas e eficientes.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socials.map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center
                             text-gray-500 hover:text-brand-600 hover:border-brand-200 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-gray-400 tracking-widest uppercase mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className="font-body text-sm text-gray-500 hover:text-brand-600 transition-colors duration-200 group flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-brand-500 transition-all duration-300" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-gray-400 tracking-widest uppercase mb-5">
              Stack Principal
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Vue.js', 'TypeScript', 'FastAPI', 'Node.js', 'PostgreSQL', 'Tailwind'].map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Status ajustado para o layout novo */}
            <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-100/50">
              <p className="font-mono text-xs text-emerald-600/70 mb-1 uppercase tracking-wider">Status atual</p>
              <p className="font-display text-sm font-bold text-emerald-600 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Disponível para projetos
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar (Centralizada) */}
        <div className="flex flex-col items-center justify-center gap-6 pt-8 border-t border-gray-100">
          <motion.button
            onClick={scrollToTop}
            className="flex flex-col items-center gap-2 font-mono text-xs font-medium text-gray-400 hover:text-brand-600 transition-colors group"
            whileHover={{ y: -2 }}
          >
            <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:border-brand-200 transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
            VOLTAR AO TOPO
          </motion.button>

          <p className="font-body text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Kauan Santos — Desenvolvido usando Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}