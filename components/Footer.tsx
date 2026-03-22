'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Heart, ArrowUp } from 'lucide-react';

const quickLinks = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Contato', href: '#contact' },
];

const socials = [
  { icon: <Github className="w-4 h-4" />, href: 'https://github.com/kauanjsc', label: 'GitHub' },
  { icon: <Linkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/in/kauan-santos-b76829239/', label: 'LinkedIn' },
  { icon: <Mail className="w-4 h-4" />, href: 'mailto:kauanjscardoso@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="section-container py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center shadow-glow">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-lg">
                <span className="gradient-text">Kauan</span>
                <span className="text-gray-400">Santos</span>
              </span>
            </div>
            <p className="font-body text-sm text-gray-500 leading-relaxed max-w-xs">
              Desenvolvedor Full Stack apaixonado por criar soluções digitais modernas e eficientes.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center
                             text-gray-400 hover:text-brand-400 hover:border-brand-500/30 transition-all duration-200"
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
            <h4 className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className="font-body text-sm text-gray-400 hover:text-brand-400 transition-colors duration-200 group flex items-center gap-2"
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
            <h4 className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-5">
              Stack Principal
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Tailwind'].map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-brand-500/5 border border-brand-500/10">
              <p className="font-mono text-xs text-gray-500 mb-1">Status atual</p>
              <p className="font-display text-sm font-semibold text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Disponível para projetos
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="font-body text-xs text-gray-600 flex items-center gap-1.5">
            © {new Date().getFullYear()} Kauan Santos — Desenvolvido com{' '}
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> usando Next.js & Tailwind CSS
          </p>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-mono text-xs text-gray-500 hover:text-brand-400 transition-colors"
            whileHover={{ y: -2 }}
          >
            Voltar ao topo
            <div className="w-7 h-7 rounded-lg glass border border-white/10 flex items-center justify-center">
              <ArrowUp className="w-3 h-3" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
