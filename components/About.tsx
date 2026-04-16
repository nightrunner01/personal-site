'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { MapPin, Languages } from 'lucide-react';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-24 px-6 md:px-10 max-w-6xl mx-auto scroll-mt-20">
      <SectionHeading number="01" title={t('heading')} />

      <div className="grid md:grid-cols-5 gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-3 space-y-5 text-[var(--text-secondary)] leading-relaxed"
        >
          <p>{t('bio_1')}</p>
          <p>{t('bio_2')}</p>
          <p>{t('bio_3')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-2"
        >
          {/* Portrait placeholder - replace /images/portrait.jpg */}
          <div className="relative aspect-[4/5] border border-accent bg-[var(--surface)] overflow-hidden group">
            <div className="absolute inset-0 bg-[var(--accent-dim)] group-hover:bg-transparent transition-all duration-500" />
            <div className="absolute inset-0 flex items-center justify-center text-[var(--text-tertiary)] font-mono text-xs">
              [ portrait.jpg ]
            </div>
            {/* When you have a photo, replace the above two divs with:
              <img src="/images/portrait.jpg" alt="Windy Chen" className="w-full h-full object-cover" />
            */}
          </div>

          <div className="mt-6 space-y-2 font-mono text-xs text-[var(--text-tertiary)]">
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-accent" />
              <span>{t('location')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Languages size={12} className="text-accent" />
              <span>{t('languages')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
