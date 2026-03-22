'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Github,
  Linkedin,
  Mail,
  Send,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
    handle: '@kauanjsc',
    href: 'https://github.com/kauanjsc',
    color: 'hover:border-gray-400/50 hover:text-gray-300',
    bg: 'bg-gray-800/50',
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    handle: 'in/kauan-santos-b76829239/',
    href: 'https://www.linkedin.com/in/kauan-santos-b76829239/',
    color: 'hover:border-blue-500/50 hover:text-blue-400',
    bg: 'bg-blue-900/20',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    handle: 'kauanjscardoso@gmail.com',
    href: 'mailto:kauanjscardoso@gmail.com',
    color: 'hover:border-brand-500/50 hover:text-brand-400',
    bg: 'bg-brand-900/20',
  },
];

type FormState = { name: string; email: string; message: string };
type FormStatus = 'idle' | 'sending' | 'sent';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate send (no backend)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('sent');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-brand-500/50 focus:outline-none focus:ring-2 focus:ring-brand-500/20 font-body text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 transition-all duration-200 bg-white/50 dark:bg-transparent';

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/5 via-transparent to-transparent dark:from-brand-500/5 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      {/* Glow */}
      <div className="glow-dot w-[500px] h-[500px] bg-brand-600 bottom-0 right-0 translate-x-1/2 translate-y-1/2 opacity-10" />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">contato</p>
          <h2 className="section-title">
            Vamos <span className="gradient-text">conversar</span>
          </h2>
          <p className="font-body text-gray-500 dark:text-gray-400 mt-4 max-w-lg mx-auto">
            Aberto a oportunidades, freelas e colaborações. Me manda uma mensagem!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Left: Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-2 space-y-4"
          >
            <div className="mb-6">
              <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2">
                Me encontre por aqui
              </h3>
              <p className="font-body text-sm text-gray-500 dark:text-gray-400">
                Prefiro responder pelo LinkedIn ou email, mas GitHub também funciona!
              </p>
            </div>

            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`flex items-center gap-4 p-4 rounded-xl border border-white/10 
                           ${link.bg} ${link.color} group transition-all duration-300
                           hover:-translate-y-1 hover:shadow-lg`}
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center flex-shrink-0">
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-sm font-semibold text-gray-900 dark:text-white">
                    {link.label}
                  </div>
                  <div className="font-mono text-xs text-gray-500 truncate">{link.handle}</div>
                </div>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}

            {/* Availability indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <div>
                <div className="font-display text-sm font-semibold text-emerald-400">
                  Disponível agora
                </div>
                <div className="font-body text-xs text-gray-500">
                  Aberto a propostas e freelas
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="relative p-6 md:p-8 rounded-2xl glass border border-white/10">
              <div className="absolute top-4 right-4">
                <MessageSquare className="w-5 h-5 text-brand-500/40" />
              </div>

              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Mensagem enviada!
                  </h3>
                  <p className="font-body text-sm text-gray-500">
                    Obrigado pelo contato. Responderei em breve! 🚀
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setForm({ name: '', email: '', message: '' }); }}
                    className="btn-outline text-sm mt-6 py-2"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-xs text-gray-500 mb-2 tracking-wide">
                        NOME
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-gray-500 mb-2 tracking-wide">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-gray-500 mb-2 tracking-wide">
                      MENSAGEM
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Olá Kauan, gostaria de conversar sobre..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full justify-center py-3.5"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Enviar Mensagem
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
