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
  AlertCircle,
} from 'lucide-react';

const socialLinksData = [
  {
    icon: <Github className="w-6 h-6" />,
    label: 'GitHub',
    handle: '@kauanjsc',
    href: 'https://github.com/kauanjsc',
    cardColor: 'bg-gray-100 dark:bg-gray-800/50',
    textColor: 'text-gray-600 dark:text-gray-300',
    iconColor: 'text-gray-800 dark:text-gray-200',
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: 'LinkedIn',
    handle: 'in/kauan-santos-b76829239/',
    href: 'https://www.linkedin.com/in/kauan-santos-b76829239/',
    cardColor: 'bg-brand-50 dark:bg-brand-500/10',
    textColor: 'text-brand-800 dark:text-brand-200',
    iconColor: 'text-brand-600 dark:text-brand-400',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: 'Email',
    handle: 'kauanjscardoso@gmail.com',
    href: 'mailto:kauanjscardoso@gmail.com',
    cardColor: 'bg-brand-50 dark:bg-brand-500/10',
    textColor: 'text-brand-800 dark:text-brand-200',
    iconColor: 'text-brand-600 dark:text-brand-400',
  },
];

type FormState = { name: string; email: string; message: string };
type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formspree.io/f/mzdjlvzn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Nome: form.name,
          Email: form.email,
          Mensagem: form.message
        })
      });

      if (response.ok) {
        setStatus('sent');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Inputs adaptados para tema claro e escuro
  const inputClass =
    'w-full py-3 bg-transparent border-0 border-b-2 border-gray-100 dark:border-gray-800 focus:ring-0 focus:border-brand-500 font-body text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 transition-colors duration-300 outline-none';

  const titleVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } },
  };

  const descriptionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const contentVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
  };

  const leftCardVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const rightFormVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.1 } },
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300" ref={ref}>
      {/* Glow effect ajustado para dark mode */}
      <div className="absolute w-[600px] h-[600px] bg-brand-100/50 dark:bg-brand-900/10 rounded-full blur-[100px] bottom-0 right-0 translate-x-1/2 translate-y-1/2 opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.p
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={titleVariant}
            className="text-xs font-mono font-medium tracking-widest text-brand-400 dark:text-brand-400 uppercase mb-2"
          >
            contato
          </motion.p>
          <motion.h2
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={titleVariant}
            className="text-5xl font-display font-bold text-gray-900 dark:text-white mb-6"
          >
            Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-cyan dark:from-brand-400 dark:to-accent-cyan">conversar</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={descriptionVariant}
            className="font-body text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Aberto a oportunidades, freelas e colaborações. Me manda uma mensagem!
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={contentVariant}
          className="flex flex-col md:flex-row md:items-start md:gap-16"
        >
          {/* Lado Esquerdo: Redes Sociais */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={leftCardVariant}
            className="md:w-[45%] space-y-4 mb-12 md:mb-0"
          >
            <div className="mb-8">
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Me encontre por aqui
              </h3>
              <p className="font-body text-sm text-gray-500 dark:text-gray-400">
                Prefiro responder pelo LinkedIn ou email, mas GitHub também funciona!
              </p>
            </div>

            {socialLinksData.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                className={`${link.cardColor} ${link.textColor} p-5 rounded-2xl flex items-center gap-5 transition-transform duration-300 hover:-translate-y-1 border border-transparent dark:border-gray-800/50`}
              >
                <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-gray-900 dark:border dark:border-gray-800 shadow-sm ${link.iconColor}`}>
                  {link.icon}
                </div>
                <div>
                  <div className="font-display text-lg font-bold">{link.label}</div>
                  <div className="font-mono text-xs opacity-70 mt-0.5">{link.handle}</div>
                </div>
              </motion.a>
            ))}

            {/* Card de Disponibilidade */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.95, duration: 0.6 }}
              className="mt-6 p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-500/10 flex items-center gap-5 border border-emerald-100 dark:border-emerald-500/20"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white dark:bg-gray-900 shadow-sm border border-emerald-100 dark:border-emerald-500/20">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-emerald-600 dark:text-emerald-400">
                  Disponível agora
                </div>
                <div className="font-body text-xs text-emerald-600/80 dark:text-emerald-400/80 mt-0.5">
                  Aberto a propostas e freelas
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Lado Direito: Formulário */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={rightFormVariant}
            className="md:flex-1 w-full"
          >
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-brand-500 dark:text-brand-400" />
                </div>
                <h3 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  Mensagem enviada!
                </h3>
                <p className="font-body text-gray-500 dark:text-gray-400 mb-8 max-w-sm">
                  Obrigado pelo contato. Responderei no seu email o mais rápido possível! 
                </p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', message: '' }); }}
                  className="px-8 py-3.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-display text-sm font-semibold transition hover:bg-gray-800 dark:hover:bg-gray-100"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 bg-transparent p-2">
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm flex items-center gap-3">
                    <AlertCircle className="w-5 h-5" />
                    Ops! Ocorreu um erro ao enviar. Tente novamente.
                  </div>
                )}
                
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-mono text-xs font-semibold text-gray-400 dark:text-gray-500 mb-1 tracking-widest uppercase">
                      Nome
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
                    <label className="block font-mono text-xs font-semibold text-gray-400 dark:text-gray-500 mb-1 tracking-widest uppercase">
                      Email
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

                <div className="relative">
                  <div className="flex justify-between items-end mb-1">
                      <label className="block font-mono text-xs font-semibold text-gray-400 dark:text-gray-500 tracking-widest uppercase">
                        Mensagem
                      </label>
                      <MessageSquare className="w-5 h-5 text-brand-200 dark:text-brand-800/50" />
                  </div>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Oi Kauan, gostaria de conversar sobre..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full justify-center py-4 rounded-xl bg-brand-600 text-white font-display text-lg font-bold flex items-center gap-3 shadow-brand transition-all hover:bg-brand-500"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}