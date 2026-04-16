'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Mail } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-10 max-w-6xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 bg-[var(--accent-dim)] border border-[var(--accent)] rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-xs font-mono text-accent">{t('status')}</span>
        </div>

        {/* Hello + Name */}
        <p className="font-mono text-sm text-accent mb-4">Hi, my name is</p>
        <h1 className="text-hero font-display font-bold text-[var(--text)] mb-2 tracking-tight">
          {t('name')}
          <span className="text-[var(--text-tertiary)] ml-4 text-[0.6em] font-normal">
            {t('nameEn')}
          </span>
        </h1>

        {/* Tagline */}
        <h2 className="text-hero font-display font-bold text-[var(--text-secondary)] mb-8 tracking-tight leading-[1.1]">
          {t('tagline')}.
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mb-4 leading-relaxed">
          {t('subtitle')}
        </p>
        <p className="font-mono text-sm text-[var(--text-tertiary)] max-w-2xl mb-12">
          {t('tagline_en')}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-[var(--accent-dim)] transition-all font-mono text-sm"
          >
            <Download size={16} />
            {t('cta_resume')}
          </a>
          <a
            href="https://github.com/nightrunner01"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--text)] hover:text-[var(--text)] transition-all font-mono text-sm"
          >
            <Github size={16} />
            {t('cta_github')}
          </a>
          <a
            href="mailto:[your-email]"
            className="group flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--text)] hover:text-[var(--text)] transition-all font-mono text-sm"
          >
            <Mail size={16} />
            {t('cta_email')}
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <ArrowDown size={16} className="text-[var(--text-tertiary)] animate-bounce" />
      </motion.div>
    </section>
  );
}
